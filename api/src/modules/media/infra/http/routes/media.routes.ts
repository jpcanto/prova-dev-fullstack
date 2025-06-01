import { Router, Request, Response } from 'express';
import { mediaController } from '../../dependencies/Media.dependencies';

const mediaRouter = Router();

mediaRouter.get('/', async (req: Request, res: Response) =>
  (await mediaController).index(req, res)
);

mediaRouter.get('/:id', async (req: Request, res: Response) =>
  (await mediaController).show(req, res)
);

mediaRouter.post('/', async (req: Request, res: Response) =>
  (await mediaController).create(req, res)
);

mediaRouter.put('/:id', async (req: Request, res: Response) =>
  (await mediaController).update(req, res)
);

mediaRouter.delete('/:id', async (req: Request, res: Response) =>
  (await mediaController).delete(req, res)
);

export default mediaRouter;
