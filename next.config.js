// const {i18n } = require('./next-i18next.config')


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    turbopack: {},
    i18n: {
        locales: ['de', 'en'],
        defaultLocale: 'de',
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
            loader: 'url-loader',
            options: {
                limit: 100000,
                name: '[name].[ext]'
            }
            }
        })
        return config
    }
}

module.exports = nextConfig

// // FullCalendar
// // for transpiling all ESM @fullcalendar/* packages
// // also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
// const withTM = require('next-transpile-modules')([
//     // "@fullcalendar/common",
//     // "@babel/preset-react",
//     // "@fullcalendar/common",
//     // "@fullcalendar/daygrid",
//     // "@fullcalendar/interaction",
//     // "@fullcalendar/react",
//     // "@fullcalendar/timegrid",
// ])

// module.exports = withTM({
//     ...nextConfig
// })