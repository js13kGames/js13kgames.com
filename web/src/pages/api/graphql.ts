import { GraphQLErrorExtended, postgraphile } from 'postgraphile';
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
		ignoreIndexes: false,
		ignoreRBAC: false,
		legacyRelations: 'omit',
		setofFunctionsContainNulls: false,
		sortExport: true,
		subscriptions: true,
		watchPg: false
	}
);

export default postgraphile_middleware;
