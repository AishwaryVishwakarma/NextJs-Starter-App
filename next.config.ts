import type {NextConfig} from 'next';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: IS_PRODUCTION,
  },
  reactStrictMode: true,
};

export default nextConfig;
