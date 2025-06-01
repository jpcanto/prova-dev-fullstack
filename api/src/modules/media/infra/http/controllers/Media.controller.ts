import { Request, Response } from 'express';
import { MediaRemoverUsecase } from '@modules/media/domain/usecases/MediaRemover.usecase';
import { MediaFinderUsecase } from '@modules/media/domain/usecases/MediaFinder.usecase';
import { MediaUpdaterUsecase } from '@modules/media/domain/usecases/MediaUpdater.usecase';
import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';
import {
  updateSchema,
  idFromParamsSchema,
  createSchema,
} from '@modules/media/infra/http/controllers/schemas/schemas';
import { parseRequest } from '@shared/utils/parseRequest';
import { MediaCreatorUsecase } from '@modules/media/domain/usecases/MediaCreator.usecase';
export class MediaController {
  private mediaRepository: MediaRepository;

  constructor(mediaRepository: MediaRepository) {
    this.mediaRepository = mediaRepository;
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listmedia = new MediaFinderUsecase({
      mediaRepository: this.mediaRepository,
    });
    const medias = await listmedia.execute({});

    return response.json(medias);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = parseRequest(idFromParamsSchema, request.params);
    const showMedia = new MediaFinderUsecase({
      mediaRepository: this.mediaRepository,
    });
    const media = await showMedia.execute({ id });

    return response.json(media);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
    } = parseRequest(createSchema, request.body);

    const createMedia = new MediaCreatorUsecase({
      mediaRepository: this.mediaRepository,
    });

    const media = await createMedia.execute({
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
    });

    return response.json(media);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
    } = parseRequest(updateSchema, request.body);
    const { id } = parseRequest(idFromParamsSchema, request.params);

    const updateMedia = new MediaUpdaterUsecase({
      mediaRepository: this.mediaRepository,
    });

    const media = await updateMedia.execute({
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
    });

    return response.json(media);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = parseRequest(idFromParamsSchema, request.params);

    const deleteMedia = new MediaRemoverUsecase({
      mediaRepository: this.mediaRepository,
    });

    await deleteMedia.execute({ id });

    return response.json([]);
  }
}
