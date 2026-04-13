const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  },
  experimental: {
    appDir: true
  }
};

export default nextConfig;
