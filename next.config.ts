import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'repdex.net' }],
        destination: 'https://www.repdex.net/:path*',
        // statusCode instead of `permanent: true`, which emits 308.
        // The Redirect type accepts statusCode only when permanent is absent.
        statusCode: 301,
      },
      {
        source: '/technology',
        destination: '/category/tech',
        statusCode: 301,
      },
      {
        source: '/ai-tools-for-marketers-2026',
        destination: '/ai-tools-for-marketers',
        statusCode: 301,
      },
      {
        source: '/top-screen-recording-tools-2026',
        destination: '/top-screen-recording-tools',
        statusCode: 301,
      },
      {
        source: '/top-note-taking-apps-2026',
        destination: '/top-note-taking-apps',
        statusCode: 301,
      },
      {
        source: '/best-productivity-apps-2026',
        destination: '/best-productivity-apps',
        statusCode: 301,
      },
      {
        source: '/best-tools-for-content-creators-2026',
        destination: '/best-tools-for-content-creators',
        statusCode: 301,
      },
      {
        source: '/best-time-management-tools-2026',
        destination: '/best-time-management-tools',
        statusCode: 301,
      },
      {
        source: '/best-ai-writing-assistants-2026',
        destination: '/best-ai-writing-assistants',
        statusCode: 301,
      },
      {
        source: '/best-free-ai-tools-2026',
        destination: '/best-free-ai-tools',
        statusCode: 301,
      },
      {
        source: '/best-apps-for-content-creators-2026',
        destination: '/best-apps-for-content-creators',
        statusCode: 301,
      },
      {
        source: '/top-7-best-android-emulators-for-ios',
        destination: 'https://androidemulatorforios.com',
        statusCode: 301,
      },
      {
        source: '/top-7-best-android-emulators-for-ios/',
        destination: 'https://androidemulatorforios.com',
        statusCode: 301,
      },
      {
        source: '/usa/top-7-best-android-emulators-for-ios',
        destination: 'https://androidemulatorforios.com',
        statusCode: 301,
      },
      {
        source: '/usa/top-7-best-android-emulators-for-ios/',
        destination: 'https://androidemulatorforios.com',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
