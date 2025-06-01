import { Request, Response, Router } from 'express';

import mediaRouter from '@modules/media/infra/http/routes/media.routes';

const routes = Router();

routes.get('/health', (request: Request, response: Response) => {
  return response.json({
    message: 'Colaborativo API - OK',
  });
});

routes.use('/media', mediaRouter);

export default routes;
