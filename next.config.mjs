import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure path aliases work in production
  webpack: (config, { isServer, dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(__dirname, 'src'),
    };

    // Optimize bundle size
    if (!dev && !isServer) {
      // Tree shaking optimizations
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };

      // Remove unnecessary polyfills for modern browsers
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
  
  // Target modern browsers to reduce polyfills
  target: 'server',
  
  // Vercel deployment optimizations
  output: 'standalone',
  
  // Reduce polyfills by targeting modern browsers
  swcMinify: true,
  
  // Image optimization
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'react',
      'react-dom',
    ],
    // Reduce JavaScript bundle size
    optimizeCss: true,
    // Enable modern builds
    esmExternals: true,
    // Reduce server-side bundle
    serverComponentsExternalPackages: ['sharp'],
  },
  
  // Compression
  compress: true,

  // Minimize polyfills by setting browser targets
  env: {
    NEXT_PRIVATE_BROWSERSLIST_CONFIG: JSON.stringify([
      'last 2 Chrome versions',
      'last 2 Firefox versions',
      'last 2 Safari versions',
      'last 2 Edge versions',
      'not IE 11',
      'not IE_Mob 11',
    ]),
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Cache static assets more aggressively
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Optimize redirects and rewrites
  async redirects() {
    return [];
  },

  // Enable gzip compression
  poweredByHeader: false,
  
  // Reduce runtime overhead
  reactStrictMode: true,
  
  // Bundle analyzer (uncomment when needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },
};

export default nextConfig;