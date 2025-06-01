import { toZonedTime } from 'date-fns-tz';

export class DateUtils {
  static adjustToCorrectTimezone(date: Date, offsetHours: number): Date {
    const result = new Date(date);
    result.setHours(result.getHours() - offsetHours);
    return result;
  }
  static getTimeInBrazil() {
    const timeZone = 'America/Sao_Paulo';
    const brazilTime = new Date();
    const brazilTimeUtc = toZonedTime(brazilTime, timeZone);

    return brazilTimeUtc;
  }
}
