import winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

const formats = [winston.format.json(), winston.format.errors({ stack: true })];
const transports: winston.transport[] = [new winston.transports.Console()];

if (process.env.NODE_ENV !== 'production') {
  // no ambiente de produção, a cloud usada já providencia timestamp de logs assim como
  // o seu armazenamento. Por isso, as opções a seguir são para ambiente de desenvolvimento
  formats.push(winston.format.timestamp());
  transports.push(new winston.transports.File({ filename: 'core_api.log' }));
}

const options = {
  format: winston.format.combine(...formats),
  transports: transports,
  levels: levels,
};

export const logger = winston.createLogger(options);
