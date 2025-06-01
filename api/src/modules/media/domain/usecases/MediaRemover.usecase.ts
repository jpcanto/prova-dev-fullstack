import { NotFound } from '@shared/errors/NotFound';
import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';
import { MediaModuleDependenciesIn } from '@modules/media/domain/models/Media.interface';

interface Request {
  id: string;
}

class MediaRemoverUsecase {
  private mediaRepository: MediaRepository;

  constructor({ mediaRepository }: MediaModuleDependenciesIn) {
    this.mediaRepository = mediaRepository;
  }

  public async execute({ id }: Request): Promise<void> {
    const media = await this.mediaRepository.findById(id);

    if (!media) {
      throw new NotFound('media not found.');
    }

    await this.mediaRepository.remove(media.id);
  }
}

export { MediaRemoverUsecase };
