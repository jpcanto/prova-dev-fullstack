import { NotFound } from '@shared/errors/NotFound';
import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';
import {
  UpdateMediaIn,
  MediaModuleDependenciesIn,
} from '@modules/media/domain/models/Media.interface';
import { DateUtils } from '@shared/utils/date';
import { BadRequest } from '@shared/errors/BadRequest';

class MediaUpdaterUsecase {
  private mediaRepository: MediaRepository;

  constructor({ mediaRepository }: MediaModuleDependenciesIn) {
    this.mediaRepository = mediaRepository;
  }

  public async execute(updateData: Partial<UpdateMediaIn>): Promise<object> {
    const { id } = updateData;

    if (!id) {
      throw new BadRequest('Media ID is required for update.');
    }

    const media = await this.mediaRepository.findById(id);

    if (!media) {
      throw new NotFound('media not found.');
    }

    if (updateData.original_language !== undefined)
      media.original_language = updateData.original_language;
    if (updateData.original_title !== undefined)
      media.original_title = updateData.original_title;
    if (updateData.overview !== undefined) media.overview = updateData.overview;
    if (updateData.popularity !== undefined)
      media.popularity = updateData.popularity;
    if (updateData.poster_path !== undefined)
      media.poster_path = updateData.poster_path;
    if (updateData.release_date !== undefined)
      media.release_date = updateData.release_date;
    if (updateData.title !== undefined) media.title = updateData.title;
    if (updateData.mediaType !== undefined)
      media.mediaType = updateData.mediaType;

    media.updatedAt = DateUtils.getTimeInBrazil();

    await this.mediaRepository.save(media);

    return { message: 'Media updated successfully!' };
  }
}

export { MediaUpdaterUsecase };
