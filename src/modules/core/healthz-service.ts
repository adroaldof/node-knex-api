import { moment } from '../../utils';

export interface IhealthZReturn {
  [key: string]: string | Date;
}

export const healthZ = (): IhealthZReturn => {
  const current = moment();
  const hour = current.hour();
  const now = current.format();

  let greeting = 'good morning';
  if (hour > 12) {
    greeting = 'good afternoon';
  }

  if (hour > 18) {
    greeting = 'good evening';
  }

  return { greeting, now };
};
