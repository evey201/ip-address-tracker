/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    googleMapsApiKey: 'AIzaSyBgwV6UNcSTr1_7Ansh5vIMPDElbvhtFeA'
  }
}

module.exports = nextConfig
