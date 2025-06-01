import { Collection, ObjectId, Db } from 'mongodb';
import { Media } from '@modules/media/domain/models/Media.interface';
import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';
import { MediaImpl } from '@modules/media/domain/entities/MediaImpl.entity';

export class MediaRepositoryImpl implements MediaRepository {
  private collection: Collection<Media>;

  constructor(db: Db) {
    this.collection = db.collection<Media>('medias');
  }

  async create(media: Media): Promise<void> {
    const c = MediaImpl.create(media);
    await this.collection.insertOne(c.toJson());
  }

  async save(media: Media): Promise<void> {
    await this.collection.updateOne(
      { _id: new ObjectId(media.id) },
      { $set: media }
    );
  }

  async remove(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) });
  }

  async find(): Promise<MediaImpl[]> {
    const medias = await this.collection.find().toArray();
    return medias.map(media =>
      MediaImpl.create(media)
    );
  }

  async findByName(name: string): Promise<MediaImpl | null> {
    const media = await this.collection.findOne({ name });
    return media ? MediaImpl.create(media) : null;
  }

  async findById(id: string): Promise<MediaImpl | null> {
    const media = await this.collection.findOne({
      _id: new ObjectId(id),
    });
    return media ? MediaImpl.create(media) : null;
  }

  async findByUUID(id: string): Promise<MediaImpl | null> {
    const media = await this.collection.findOne({
      id: id,
    });
    return media ? MediaImpl.create(media) : null;
  }

  async findByEmail(email: string): Promise<MediaImpl | null> {
    const media = await this.collection.findOne({ email });
    return media ? MediaImpl.create(media) : null;
  }

  async findByPhone(phone: string): Promise<MediaImpl | null> {
    const media = await this.collection.findOne({ phone });
    return media ? MediaImpl.create(media) : null;
  }

  async findByIds(ids: string[]): Promise<MediaImpl[]> {
    const medias = await this.collection.find({ id: { $in: ids } }).toArray();
    return medias.map(media => MediaImpl.create(media));
  }
}
