import {Pool} from "pg";
import {env} from './env'

export const DB=new Pool({connectionString:env.DATABASE_URL});