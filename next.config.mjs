const allowedImageSrc = [];
  
  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    // Optional: support for Dockerfile
    // output: 'standalone',
  
    // Configure Next Image
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      minimumCacheTTL: 60 * 60 * 24, // 1 day
      domains: allowedImageSrc,
    },
  
    // Configure sitemap from API route
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ];
    },
  
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            // Optional: Configure CSP here
            // {
            //   key: 'Content-Security-Policy',
            //   value: generateCsp(),
            // },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload',
            },
            {
              key: 'Permissions-Policy',
              value: 'microphone=()',
            },
          ],
        },
      ];
    },
  };
  
  export default config;
  