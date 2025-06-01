import { MongoClient, Db } from 'mongodb';
import { assertNotUndefined } from '@shared/utils/assert';

class MongoDBDataSource {
  private client: MongoClient;
  private db: Db | null = null;

  constructor() {
    const user = assertNotUndefined(process.env.MONGODB_USER);
    const password = assertNotUndefined(process.env.MONGODB_PASSWORD);
    const host = assertNotUndefined(process.env.MONGODB_HOST);
    const database = assertNotUndefined(process.env.MONGODB_DATABASE);
    const authSource = assertNotUndefined(process.env.MONGODB_AUTH_SOURCE);

    const uri = `mongodb://${user}:${password}@${host}/${database}?authSource=${authSource}`;

    this.client = new MongoClient(uri);
  }

  async connect(): Promise<void> {
    await this.client.connect();
    this.db = this.client.db(process.env.MONGODB_DATABASE);
  }

  getDatabase(): Db | null {
    return this.db;
  }
}

export const ODMDataSource = new MongoDBDataSource();
