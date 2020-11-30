import { PgDb } from 'pogi';
import { ENV } from './env';
import { PgDbType } from './types';

export const create_db_connection = async () => {
	return <PgDbType>await PgDb.connect({ connectionString: ENV.DATABASE_URL });
};
