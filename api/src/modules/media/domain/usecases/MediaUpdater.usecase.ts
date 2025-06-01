import { NotFound } from '@shared/errors/NotFound';
import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';
import {
  UpdateMediaIn,
  MediaModuleDependenciesIn,
} from '@modules/media/domain/models/Media.interface';
import { DateUtils } from '@shared/utils/date';

class MediaUpdaterUsecase {
  private mediaRepository: MediaRepository;

  constructor({ mediaRepository }: MediaModuleDependenciesIn) {
    this.mediaRepository = mediaRepository;
  }

  public async execute({
    id,
    name,
    email,
    phone,
    city,
    state,
    country,
    profileImageUrl,
  }: UpdateMediaIn): Promise<object> {
    const media = await this.mediaRepository.findById(id);

    if (!media) {
      throw new NotFound('media not found.');
    }

    media.name = name;
    media.email = email;
    media.phone = phone;
    media.city = city;
    media.state = state;
    media.country = country;
    media.profileImageUrl = profileImageUrl;
    media.updatedAt = DateUtils.getTimeInBrazil();

    await this.mediaRepository.save(media);

    return { message: 'Media updated successfully!' };
  }
}

export { MediaUpdaterUsecase };
