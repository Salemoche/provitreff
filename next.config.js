// const {i18n } = require('./next-i18next.config')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
  }
}

// module.exports = nextConfig

// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([
    "@fullcalendar/common",
    "@babel/preset-react",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    // "@fullcalendar/interaction",
    "@fullcalendar/react",
    // "@fullcalendar/timegrid",
])

module.exports = withTM({
  ...nextConfig
})