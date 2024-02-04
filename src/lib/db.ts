import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
dotenv.config({ path: '.env' });

if(!process.env.DATABASE_url) {
    console.log('🔴 NO database url')
}

