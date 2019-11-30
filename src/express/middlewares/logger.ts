import { createLogger, format, transports } from 'winston';

const level = process.env.LOG_LEVEL || 'debug';

const formatParams = (info: any): string => {
  const { timestamp, level, message, ...args } = info;
  const ts = timestamp.slice(0, 19).replace('T', ' ');

  return `${ts} | ${level}: ${message} | ${Object.keys(args).length ? JSON.stringify(args, null, '') : 'end'}`;
};

const developmentFormatter = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(formatParams),
);

const productionFormatter = format.combine(format.timestamp(), format.align(), format.printf(formatParams));

const development = createLogger({
  level,
  format: developmentFormatter,
  transports: [new transports.Console({})],
});

const production = createLogger({
  level,
  format: productionFormatter,
  transports: [
    new transports.Console({}),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'register.log' }),
  ],
});

const log = process.env.NODE_ENV === 'development' ? development : production;

export { log };
