import 'dotenv/config';
import { handleError } from './middlewares/handleError.middleware';
import express from 'express';
import 'express-async-errors';
import { corsMiddleware } from './middlewares/CORSMiddleware';
import routes from './routes';

const app = express();

app.use(handleError);
app.use(corsMiddleware);
app.use(express.json());
app.use(routes);

export { app };
