import { Media, MediaIn } from '../models/Media.interface';
import { BadRequest } from '@shared/errors/BadRequest';
import { randomUUID as uuid } from 'node:crypto';
import { DateUtils } from '@shared/utils/date';
import { assertNotUndefined } from '@shared/utils/assert';

type MediaCreateIn = Partial<Media> & {
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class MediaImpl {
  private props: Media;

  private constructor(props: Media) {
    this.props = props;
  }

  static create(props: MediaCreateIn) {
    this.validate(props);
    return new MediaImpl({
      ...props,
      id: props?.id || uuid(),
      original_language: props?.original_language,
      original_title: props?.original_title,
      overview: props?.overview,
      popularity: props?.popularity,
      poster_path: props?.poster_path,
      release_date: props?.release_date,
      title: props?.title,
      createdAt: props?.createdAt || DateUtils.getTimeInBrazil(),
      updatedAt: props?.updatedAt || DateUtils.getTimeInBrazil(),
    });
  }

  static validate(props: MediaIn) {
    if (!props.original_language)
      throw new BadRequest('original_language não pode ser vazio.');
    if (!props.original_title)
      throw new BadRequest('original_title não pode ser vazio.');
    if (!props.overview) throw new BadRequest('overview não pode ser vazio.');
    if (!props.popularity)
      throw new BadRequest('popularity não pode ser vazio.');
    if (!props.poster_path)
      throw new BadRequest('poster_path não pode ser vazio.');
    if (!props.release_date)
      throw new BadRequest('release_date não pode ser vazio.');
    if (!props.title) throw new BadRequest('title não pode ser vazio.');
  }

  get id() {
    return this.props.id;
  }

  get original_language() {
    return this.props.original_language;
  }

  set original_language(value: string) {
    this.props.original_language = value;
  }

  get original_title() {
    return this.props.original_title;
  }

  set original_title(value: string) {
    this.props.original_title = value;
  }

  get overview() {
    return this.props.overview;
  }

  set overview(value: string) {
    this.props.overview = value;
  }

  get popularity() {
    return this.props.popularity;
  }

  set popularity(value: number) {
    this.props.popularity = value;
  }

  get poster_path() {
    return this.props.poster_path;
  }

  set poster_path(value: string) {
    this.props.poster_path = value;
  }

  get release_date() {
    return this.props.release_date;
  }

  set release_date(value: string) {
    this.props.release_date = value;
  }

  get title() {
    return this.props.title;
  }

  set title(value: string) {
    this.props.title = value;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return assertNotUndefined(this.props.updatedAt);
  }

  set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }

  toJson(): Media {
    return {
      id: this.id,
      original_language: this.original_language,
      original_title: this.original_title,
      overview: this.overview,
      popularity: this.popularity,
      poster_path: this.poster_path,
      release_date: this.release_date,
      title: this.title,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
