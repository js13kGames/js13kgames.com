// XXX: This should be grabbed from the API
const CURRENT_EDITION = '2021';

module.exports = {
	publicRuntimeConfig: {
		// Public runtime variables are visible in the browser
		// Do not expose app secrets in public runtime config
		APP_HOSTNAME: process.env.APP_HOSTNAME,
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
		AUTH0_DOMAIN: process.env.AUTH0_DOMAIN
	},

	async redirects() {
		return [
			{
				source: '/',
				destination: '/' + CURRENT_EDITION,
				permanent: false
			}
		];
	},

	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/graphql',
	// 			destination: 'http://graphql:5433/graphql'
	// 		}
	// 	];
	// },

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader']
		});

		return config;
	}
};
