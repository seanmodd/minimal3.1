import Link from 'next/link';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSolid } from '@fortawesome/free-solid-svg-icons';

function BodyComponent() {
  return (
    <div style={{ minHeight: '90vh', background: '#181818' }}>
      <div className="px-4 pt-10 mx-auto sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">The Open Source</span>{' '}
            <span className="block text-green-400 xl:inline">
              Firebase Alternative
            </span>
          </h1>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Sean Modd's test example app using my own custom hooks and Supabase
            for the backend.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/buttons">
                <Box
                  style={{ cursor: 'pointer' }}
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                >
                  View Buttons Example
                </Box>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              {/* <Box sx={{ textAlign: 'center', backgroundColor: 'white' }}> */}
              <FontAwesomeIcon color="blue" icon="fa-solid fa-coffee" />
              {/* </Box> */}
              <i
                className="fa-solid fa-mug-hot fa-beat"
                color="red"
                style={{ '--fa-beat-scale': 5.0 }}
              />

              <i
                className="fa-solid fa-triangle-person-digging fa-beat-fade"
                style={{ color: 'red' }}
              />

              <span style={{ fontSize: '3rem' }}>
                <span style={{ color: 'Mediumslateblue' }}>
                  <i className="fas fa-camera" />
                </span>
              </span>

              <Link href="/auth">
                <Box
                  style={{ cursor: 'pointer' }}
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-400 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </Box>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
