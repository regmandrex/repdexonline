import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/technology',
        destination: '/category/tech',
        permanent: true,
      },
      {
        source: '/ai-tools-for-marketers-2026',
        destination: '/ai-tools-for-marketers',
        permanent: true,
      },
      {
        source: '/top-screen-recording-tools-2026',
        destination: '/top-screen-recording-tools',
        permanent: true,
      },
      {
        source: '/top-note-taking-apps-2026',
        destination: '/top-note-taking-apps',
        permanent: true,
      },
      {
        source: '/best-productivity-apps-2026',
        destination: '/best-productivity-apps',
        permanent: true,
      },
      {
        source: '/best-tools-for-content-creators-2026',
        destination: '/best-tools-for-content-creators',
        permanent: true,
      },
      {
        source: '/best-time-management-tools-2026',
        destination: '/best-time-management-tools',
        permanent: true,
      },
      {
        source: '/best-ai-writing-assistants-2026',
        destination: '/best-ai-writing-assistants',
        permanent: true,
      },
      {
        source: '/best-free-ai-tools-2026',
        destination: '/best-free-ai-tools',
        permanent: true,
      },
      {
        source: '/best-apps-for-content-creators-2026',
        destination: '/best-apps-for-content-creators',
        permanent: true,
      },
      {
        source: '/top-7-best-android-emulators-for-ios',
        destination: 'https://androidemulatorforios.com',
        permanent: true,
      },
      {
        source: '/top-7-best-android-emulators-for-ios/',
        destination: 'https://androidemulatorforios.com',
        permanent: true,
      },
      {
        source: '/usa/top-7-best-android-emulators-for-ios',
        destination: 'https://androidemulatorforios.com',
        permanent: true,
      },
      {
        source: '/usa/top-7-best-android-emulators-for-ios/',
        destination: 'https://androidemulatorforios.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
