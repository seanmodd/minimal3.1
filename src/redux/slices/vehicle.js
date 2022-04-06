import { createSlice } from '@reduxjs/toolkit';
import sum from 'lodash/sum';
import uniqBy from 'lodash/uniqBy';
// utils
import axios from 'src/utils/axios';
import { print } from 'graphql';
//
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import { apolloClient } from 'src/pages/_app';
import { dispatch } from 'src/redux/store';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  vehicles: [],
  vehicle: null,
  sortBy: null,
  filters: {
    gender: [],
    category: 'All',
    colors: [],
    priceRange: '',
    rating: '',
  },
  checkout: {
    activeStep: 0,
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
  },
};

// Slices
const slice = createSlice({
  name: 'vehicle',
  initialState, 
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET PRODUCTS
    getVehiclesSuccess(state, action) {
      state.isLoading = false;
      state.vehicles = action.payload;
    },
    // GET PRODUCT
    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },
    //  SORT & FILTER PRODUCTS
    sortByVehicles(state, action) {
      state.sortBy = action.payload;
    },
    filterVehicles(state, action) {
      state.filters.gender = action.payload.gender;
      state.filters.category = action.payload.category;
      state.filters.colors = action.payload.colors;
      state.filters.priceRange = action.payload.priceRange;
      state.filters.rating = action.payload.rating;
    },
    // CHECKOUT
    getCart(state, action) {
      const cart = action.payload;
      const subtotal = sum(
        cart.map((cartItem) => cartItem.price * cartItem.quantity)
      );
      const discount = cart.length === 0 ? 0 : state.checkout.discount;
      const shipping = cart.length === 0 ? 0 : state.checkout.shipping;
      const billing = cart.length === 0 ? null : state.checkout.billing;

      state.checkout.cart = cart;
      state.checkout.discount = discount;
      state.checkout.shipping = shipping;
      state.checkout.billing = billing;
      state.checkout.subtotal = subtotal;
      state.checkout.total = subtotal - discount;
    },
    addCart(state, action) {
      const product = action.payload;
      const isEmptyCart = state.checkout.cart.length === 0;
      if (isEmptyCart) {
        state.checkout.cart = [...state.checkout.cart, product];
      } else {
        state.checkout.cart = state.checkout.cart.map((_product) => {
          const isExisted = _product.id === product.id;
          if (isExisted) {
            return {
              ..._product,
              quantity: _product.quantity + 1,
            };
          }
          return _product;
        });
      }
      state.checkout.cart = uniqBy([...state.checkout.cart, product], 'id');
    },
    deleteCart(state, action) {
      const updateCart = state.checkout.cart.filter(
        (item) => item.id !== action.payload
      );
      state.checkout.cart = updateCart;
    },
    resetCart(state) {
      state.checkout.activeStep = 0;
      state.checkout.cart = [];
      state.checkout.total = 0;
      state.checkout.subtotal = 0;
      state.checkout.discount = 0;
      state.checkout.shipping = 0;
      state.checkout.billing = null;
    },
    onBackStep(state) {
      state.checkout.activeStep -= 1;
    },
    onNextStep(state) {
      state.checkout.activeStep += 1;
    },
    onGotoStep(state, action) {
      const goToStep = action.payload;
      state.checkout.activeStep = goToStep;
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      state.checkout.cart = updateCart;
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      state.checkout.cart = updateCart;
    },
    createBilling(state, action) {
      state.checkout.billing = action.payload;
    },
    applyDiscount(state, action) {
      const discount = action.payload;
      state.checkout.discount = discount;
      state.checkout.total = state.checkout.subtotal - discount;
    },
    applyShipping(state, action) {
      const shipping = action.payload;
      state.checkout.shipping = shipping;
      state.checkout.total =
        state.checkout.subtotal - state.checkout.discount + shipping;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getCart,
  addCart,
  resetCart,
  onGotoStep,
  onBackStep,
  onNextStep,
  deleteCart,
  createBilling,
  applyShipping,
  applyDiscount,
  increaseQuantity,
  decreaseQuantity,
  sortByVehicles,
  filterVehicles,
} = slice.actions;

// ----------------------------------------------------------------------
//* Below are the graphql queries:
const ALLCARSQUERY = () => gql`
  query {
    variants {
      id
      car_currentcarurl
      car_name
      car_make_name
      car_price
      price
      year
      vehicle_status
      car_vin
      int_car_views
      int_car_odometer
      car_exteriorcolor
      car_imgsrcurl_1
      car_dealership
      make
      model
      city_mileage
      highway_mileage
      manufacture_data_manufacture_mpg_city
      manufacture_data_manufacture_mpg_highway
    }
  }
`;

const MYCARQUERY = gql`
  query Variant($id: Int!) {
    variants_by_pk(id: $id) {
      id
      car_carfax_status
      car_currentcarurl
      car_name
      car_make_name
      car_price
      price
      active
      car_year
      year
      vehicle_status
      car_vin
      car_stock
      int_car_views
      int_car_odometer
      int_car_samplepayment
      int_car_samplepaymentdetails_months
      int_car_samplepaymentdetails_apr
      int_car_samplepaymentdetails_downpayment
      car_exteriorcolor
      car_carfaxurl
      car_imgsrcurl_1
      car_imgsrcurl_2
      car_imgsrcurl_3
      car_imgsrcurl_4
      car_imgsrcurl_5
      car_imgsrcurl_6
      car_dealership
      car_carfax_details_status
      car_carfax_details_status2
      carfax_previousownercount
      make
      model
      trim
      style
      type
      doors
      fuel_type
      fuel_capacity
      city_mileage
      highway_mileage
      engine
      engine_cylinders
      transmission
      transmission_short
      transmission_type
      transmission_speeds
      drivetrain
      anti_brake_system
      steering_type
      curb_weight
      gross_vehicle_weight_rating
      overall_height
      overall_length
      overall_width
      standard_seating
      invoice_price
      delivery_charges
      manufacturer_suggested_retail_price
      production_seq_number
      front_brake_type
      rear_brake_type
      turning_diameter
      front_suspension
      rear_suspension
      front_spring_type
      rear_spring_type
      front_headroom
      rear_headroom
      front_legroom
      rear_legroom
      standard_towing
      maximum_towing
    }
  }
`;
//* Below is the client to query vehicles:
const client = new ApolloClient({
  uri: `https://carx.hasura.app/v1/graphql`,
  cache: new InMemoryCache(),
});
//* Below are the action creators:
// ----------------------------------------------------------------------
export function getVariants() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const q = ALLCARSQUERY();
      const response = await client.query({
        query: q,
      });
      console.log('This is the response: ', response);
      console.log(
        'product.js	491	response.data.variants',
        print(q),
        response.data.variants
      );

      dispatch(slice.actions.getVehiclesSuccess([...response.data.variants]));
      console.log(') product.js	495	response.data.variants');
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
// ----------------------------------------------------------------------
// export function getVehicle(name) {
//   return async () => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get('/api/products/product', {
//         params: { name },
//       });
//       dispatch(slice.actions.getProductSuccess(response.data.product));
//     } catch (error) {
//       console.error(error);
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

export function getVariantGraphQl(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await client.query({
        // query: CARQUERY,
        query: MYCARQUERY,
        variables: { id },
      });
      dispatch(slice.actions.getProductSuccess(response.data));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
