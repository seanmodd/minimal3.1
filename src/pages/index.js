import Header from '../components/Header';
import Head from '../components/Head';

const Index = () => (
  <>
    <Head />

    <Header />
    <div style={{ minHeight: '100vh', background: '#181818' }}>
      <div
        // style={{ background: '#ff1515' }}
        className="px-4 pt-10 mx-auto sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">The Open Source</span>{' '}
            <span className="block text-green-400 xl:inline">
              Firebase Alternative
            </span>
          </h1>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Create a backend in less than 2 minutes. Start your project with a
            Postgres Database, Authentication, instant APIs, Realtime
            subscriptions and Storage.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-600 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-400 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Index;
