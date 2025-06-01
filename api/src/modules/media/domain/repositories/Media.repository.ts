import { MediaImpl } from '../entities/MediaImpl.entity';

export interface MediaRepository {
  findByName(name: string): Promise<MediaImpl | null>;
  findById(id: string): Promise<MediaImpl | null>;
  findByUUID(id: string): Promise<MediaImpl | null>;
  findByIds(ids: string[]): Promise<MediaImpl[]>;
  findByEmail(email: string): Promise<MediaImpl | null>;
  findByPhone(phone: string): Promise<MediaImpl | null>;
  create(data: MediaImpl): Promise<void>;
  save(media: MediaImpl): Promise<void>;
  remove(id: string): Promise<void>;
  find(): Promise<MediaImpl[]>;
}
