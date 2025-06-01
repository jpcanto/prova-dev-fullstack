import { MediaRepositoryImpl } from '../odm/repositories/MediaImpl.repository';
import { MediaController } from '../http/controllers/Media.controller';
import { ODMDataSource } from '@shared/infra/odm';

async function initMediaController() {
  await ODMDataSource.connect();
  const db = ODMDataSource.getDatabase();

  if (!db) {
    throw new Error('Database connection failed.');
  }

  const mediaRepository = new MediaRepositoryImpl(db);
  return new MediaController(mediaRepository);
}

export const mediaController = initMediaController();
