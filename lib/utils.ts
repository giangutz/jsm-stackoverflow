import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getTimestamps = (createdAt: Date): string => {
  const now = new Date();
  const timeDiff = now.getTime() - new Date(createdAt).getTime();

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = 365 * day;

  if (timeDiff < minute) {
    const seconds =Math.floor(timeDiff / 1000);
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
  } else if (timeDiff < hour) {
    const minutes = Math.floor(timeDiff / minute);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (timeDiff < day) {
    const hours = Math.floor(timeDiff / hour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (timeDiff < week) {
    const days = Math.floor(timeDiff / day);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (timeDiff < month) {
    const weeks = Math.floor(timeDiff / week);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (timeDiff < year) {
    const months = Math.floor(timeDiff / month);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else if (timeDiff < year) {
    const years = Math.floor(timeDiff / year);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  } else {
    const years = Math.floor(timeDiff / year);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }

}

export const formatandDivideNumber = (number: number): string => {
  if (number > 1000000) {
    return (number / 1000000).toFixed(1) + 'M'
  } else if (number > 1000) {
    return (number / 1000).toFixed(1) + 'K'
  } else {
    return (number / 1).toFixed(0)
  }
}