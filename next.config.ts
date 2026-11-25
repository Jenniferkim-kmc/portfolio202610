import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 예전 /saas 주소로 들어와도 /b2b로 보낸다 (이미 보낸 링크 보호)
  async redirects() {
    return [
      { source: "/saas", destination: "/b2b", permanent: true },
      { source: "/saas/:path*", destination: "/b2b/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
