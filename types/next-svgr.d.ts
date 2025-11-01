declare module 'next-svgr' {
  import type { NextConfig } from 'next';
  const withSvgr: (config?: NextConfig) => NextConfig;
  export default withSvgr;
}
