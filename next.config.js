const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline',
  '@mui/material',
  '@mui/system',
]);

// module.exports = {
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false, path: false };
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@mui/styled-engine': '@mui/styled-engine-sc',
//     };
//     return config;
//   },
// };

module.exports = withTM({
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
});
