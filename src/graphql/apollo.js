import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { print } from 'graphql';

const isServer = typeof window === 'undefined';
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let CLIENT;

export function getApolloClient(forceNew) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: 'https://carx.hasura.app/v1/graphql',
      cache: new InMemoryCache().restore(windowApolloState || {}),

      /**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
    });
  }

  return CLIENT;
}

export const CARSQUERY = gql`
  query Variants {
    variants(limit: 1000) {
      year
      vin: car_vin
      make
      model
      status: vehicle_status
      dealership: car_dealership
    }
  }
`;

const ALLCARSQUERY = (dataPerPage, pageNum, filters) => gql`
  query Variants {
    variants(
      limit: ${dataPerPage}, 
      start: ${(pageNum - 1) * dataPerPage},
      ${filters.sort_by_popularity ? `sort: "int_car_views:desc",` : ``}
      where: {
        ${
          filters.make?.length
            ? `make_in: ${JSON.stringify(filters.make)},`
            : ''
        }
        ${
          filters.dealership?.length
            ? `car_dealership_in: ${JSON.stringify(filters.dealership)},`
            : ''
        }
        ${filters.type ? `type: ${filters.type},` : ''}
        ${filters.price_gt ? `price_gt: ${filters.price_gt},` : ''}
        price_gte: ${filters.price_gte},
        price_lte: ${filters.price_lte},
        int_car_odometer_gte: ${filters.int_car_odometer_gte},
        int_car_odometer_lte: ${filters.int_car_odometer_lte}
      }) {
      id
      car_currentCarURL
      car_name
      car_make_name
      car_price
      price
      year
      vehicle_status
      car_vin
      int_car_views
      int_car_odometer
      car_exteriorColor
      car_imgSrcUrl_1
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
const CARSMAKEQUERY = gql`
  query VariantsMake($where: JSON) {
    variants(where: $where) {
      id
      car_carFax_status
      car_currentCarURL
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
      int_car_samplePayment
      int_car_samplePaymentDetails_Months
      int_car_samplePaymentDetails_APR
      int_car_samplePaymentDetails_DownPayment
      car_exteriorColor
      car_carFaxUrl
      car_imgSrcUrl_1
      car_imgSrcUrl_2
      car_imgSrcUrl_3
      car_imgSrcUrl_4
      car_imgSrcUrl_5
      car_imgSrcUrl_6
      car_dealership
      car_carFax_details_status
      car_carFax_details_status2
      carfax_previousOwnerCount
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

const MYCARQUERY = gql`
  query Variant($id: ID!) {
    variant(id: $id) {
      id
      car_carFax_status
      car_currentCarURL
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
      int_car_samplePayment
      int_car_samplePaymentDetails_Months
      int_car_samplePaymentDetails_APR
      int_car_samplePaymentDetails_DownPayment
      car_exteriorColor
      car_carFaxUrl
      car_imgSrcUrl_1
      car_imgSrcUrl_2
      car_imgSrcUrl_3
      car_imgSrcUrl_4
      car_imgSrcUrl_5
      car_imgSrcUrl_6
      car_dealership
      car_carFax_details_status
      car_carFax_details_status2
      carfax_previousOwnerCount
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

export const GET_DATA_FOR_FILTERS = gql`
  query Variants {
    variantsConnection {
      aggregate {
        count
        max {
          price
        }
        max {
          int_car_odometer
        }
      }
      groupBy {
        car_dealership {
          key
        }
        make {
          key
        }
      }
    }
  }
`;
