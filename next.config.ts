import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 예전 /saas, /b2b 주소로 들어와도 /system으로 보낸다 (이미 보낸 링크 보호)
  async redirects() {
    return [
      { source: "/saas", destination: "/system", permanent: true },
      { source: "/saas/:path*", destination: "/system/:path*", permanent: true },
      { source: "/b2b", destination: "/system", permanent: true },
      { source: "/b2b/:path*", destination: "/system/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
