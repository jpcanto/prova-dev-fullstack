import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';
import {
  Media,
  MediaIn,
  MediaModuleDependenciesIn,
} from '@modules/media/domain/models/Media.interface';
import { MediaImpl } from '../entities/MediaImpl.entity';

class MediaCreatorUsecase {
  private mediaRepository: MediaRepository;

  constructor({ mediaRepository }: MediaModuleDependenciesIn) {
    this.mediaRepository = mediaRepository;
  }

  public async execute(mediaIn: MediaIn): Promise<Media> {
    const media = MediaImpl.create(mediaIn);

    await this.mediaRepository.create(media);

    return media.toJson();
  }
}

export { MediaCreatorUsecase };
