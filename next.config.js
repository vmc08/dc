module.exports = {
  headers: async () => [
    {
      source: '/.well-known/apple-app-site-association',
      headers: [
        { key: 'Content-Type', value: 'application/json' },
        { key: 'Access-Control-Allow-Origin', value: '*' },
      ],
    },
  ],
  reactStrictMode: true,
  env: {
    appIcon: '/public/favicon.ico',
    appName: 'FE Starter',
    appDescription: 'Build to boost development start up vs starting from scratch.',
  },
}
