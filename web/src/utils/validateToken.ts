import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const jwks_uri = `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`;

const client = jwksClient({ jwksUri: jwks_uri });

const get_key = (header: any, callback: Function) => {
	client.getSigningKey(header.kid, (err: any, key: any) => {
		if (err) {
			console.error(`getSigningKey error: ${err}`);
			return callback(err, null);
		}

		console.info(`Got signing key for JWT.`);
		const signing_key = key ? key.publicKey || key.rsaPublicKey : '';
		callback(null, signing_key);
	});
};

export const validate_token = (
	token: string = ''
): Promise<Record<string, string>> => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, get_key.bind(this), {}, (error: any, decoded: any) => {
			if (error) {
				reject(error);
			} else {
				// console.log(`LOGGED IN: ${JSON.stringify(decoded, null, 4)}`);
				resolve(decoded);
			}
		});
	});
};
