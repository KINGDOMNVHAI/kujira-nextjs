/** @type {import('next').NextConfig} */
// const nextConfig = {
//     i18n: {
//         locales: ['en', 'es', 'pt'],
//         defaultLocale: 'en',
//     },
// }

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js'
);

module.exports = withNextIntl
