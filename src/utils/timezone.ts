import momentTz from 'moment-timezone';

const defaultTimeZone = 'America/Sao_Paulo';
const moment = momentTz.tz.setDefault(defaultTimeZone);
export { moment };
