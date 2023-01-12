module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}
