import PgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector';
import { GraphQLErrorExtended, postgraphile } from 'postgraphile';
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
import { validate_token } from '../../utils/validateToken';
export const config = {
	api: {
		bodyParser: false,
		externalResolver: true
	}
};

const schemas = ['public'];

const postgraphile_middleware = postgraphile(
	process.env.DATABASE_URL,
	schemas,
	{
		appendPlugins: [ConnectionFilterPlugin, PgSimplifyInflector],
		allowExplain: false,
		disableQueryLog: false, //true,
		dynamicJson: false,
		enableQueryBatching: true,
		enableCors: false,
		enhanceGraphiql: false,
		graphqlRoute: '/api/graphql',
		exportGqlSchemaPath: '/web/graphql/schema.graphql',
		graphiql: false,
		handleErrors(errors) {
			console.log('errors?');
			return errors.map(function (err) {
				console.error(err);

				return err as GraphQLErrorExtended;
			});
		},
		ignoreRBAC: false,
		setofFunctionsContainNulls: false,
		sortExport: true,
		subscriptions: true,
		watchPg: false,
		pgSettings: async (req) => {
			try {
				// @ts-ignore
				const token = req.cookies.token;
				console.log({ token });
				const claims = await validate_token(token);
				return {
					role: 'js13k_user',
					'user.id': claims.sub
				};
			} catch (error) {
				console.error('failed to authenticate', error);
				return { role: 'js13k_anonymous' };
			}
		}
	}
);

export default postgraphile_middleware;
