import { Media } from "../models/Media.interface";
import { MediaRepository } from "../repositories/Media.repository";

interface MediaFinderTopRatedUsecaseProps {
  mediaRepository: MediaRepository;
}

interface MediaFinderTopRatedInput {
  mediaType?: 'movie' | 'tv';
}

export class MediaFinderTopRatedUsecase {
  private mediaRepository: MediaRepository;

  constructor({ mediaRepository }: MediaFinderTopRatedUsecaseProps) {
    this.mediaRepository = mediaRepository;
  }

  public async execute(input: MediaFinderTopRatedInput): Promise<Media[]> {
    const { mediaType } = input;
    const medias = await this.mediaRepository.findTopRated(mediaType);
    return medias.map(media => media.toJson());
  }
}
