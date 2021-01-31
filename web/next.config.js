// XXX: This should be grabbed from the API
const CURRENT_EDITION = '2020';

module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/' + CURRENT_EDITION,
				permanent: false
			}
		];
	}
};
