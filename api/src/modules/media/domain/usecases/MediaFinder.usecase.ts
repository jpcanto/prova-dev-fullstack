import { NotFound } from '@shared/errors/NotFound';
import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';
import {
  Media,
  MediaModuleDependenciesIn,
} from '@modules/media/domain/models/Media.interface';
import { MediaImpl } from '../entities/MediaImpl.entity';

interface Request {
  id?: string;
  email?: string;
  phone?: string;
}

class MediaFinderUsecase {
  private mediaRepository: MediaRepository;

  constructor({ mediaRepository }: MediaModuleDependenciesIn) {
    this.mediaRepository = mediaRepository;
  }

  public async execute({
    id,
    email,
    phone,
  }: Request): Promise<Media | Media[]> {
    let media: MediaImpl | MediaImpl[] | null = null;

    if (id) {
      media = await this.mediaRepository.findById(id);
    } else if (email) {
      media = await this.mediaRepository.findByEmail(email);
    } else if (phone) {
      media = await this.mediaRepository.findByPhone(phone);
    } else {
      media = await this.mediaRepository.find();
    }

    if (!media) {
      throw new NotFound('Media not found.');
    }

    return Array.isArray(media) ? media.map(m => m.toJson()) : media.toJson();
  }
}

export { MediaFinderUsecase };
