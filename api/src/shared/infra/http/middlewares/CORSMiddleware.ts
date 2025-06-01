import { assertNotUndefined } from '@shared/utils/assert';
import cors from 'cors';

const allowedOrigins = assertNotUndefined(process.env.CORS_ORIGINS)
  .split(',')
  .map(origin => origin.trim());

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  // allowedHeaders: ['Content-Type', 'Authorization'],
};

export const corsMiddleware = cors(corsOptions);
