import { app } from './app';
import { ODMDataSource } from '@shared/infra/odm';
import { logger } from '@shared/utils/logger';
import 'dotenv/config';
import 'reflect-metadata';

const appPort = process.env.APP_PORT ?? 8000;

async function startServer() {
  try {
    await ODMDataSource.connect();
    logger.info('MongoDB connected successfully.');

    app.listen(appPort, () => {
      logger.info(`Server started on port ${appPort}!`);
    });
  } catch (error) {
    logger.error(`Error during data source initialization: "${error}"`);
    process.exit(1);
  }
}

startServer();
