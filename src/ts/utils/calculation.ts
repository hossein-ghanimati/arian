import { WithCreatedAt } from "@/types/withCreatedAt.type";
import  moment from "moment-jalaali"
export const MILLISECONDS_IN_SECOND = 1000;
export const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
export const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;
export const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;
export const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY * 7;
export const MILLISECONDS_IN_MONTH = MILLISECONDS_IN_WEEK * 4 + MILLISECONDS_IN_DAY * 2; // 4 هفته + 2 روز اضافی
export const MILLISECONDS_IN_YEAR = MILLISECONDS_IN_MONTH * 12;
export const JALALI_FORMAT = "jYYYY/jMM/jDD HH:mm:ss"

export const calculateRelativeTimeDifference = (createdAt: string) => {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);
  const time = currentTime.getTime() - createdTime.getTime();

  let date = null;

  if (time < MILLISECONDS_IN_MINUTE) {
    date = "لحظاتی پیش";
  } else if (time < MILLISECONDS_IN_HOUR) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_MINUTE);
    date = `${calculatedTime} دقیقه پیش`;
  } else if (time < MILLISECONDS_IN_DAY) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_HOUR);
    date = `${calculatedTime} ساعت پیش`;
  } else if (time < MILLISECONDS_IN_WEEK) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_DAY);
    date = `${calculatedTime} روز پیش`;
  } else if (time < MILLISECONDS_IN_MONTH) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_WEEK);
    date = `${calculatedTime} هفته پیش`;
  } else if (time < MILLISECONDS_IN_YEAR) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_MONTH);
    date = `${calculatedTime} ماه پیش`;
  } else if (time >= MILLISECONDS_IN_YEAR) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_YEAR);
    date = `${calculatedTime} سال پیش`;
  }

  return date || "نامشخص";
};


export const getDateTimeFromJalali = (jalaliDate: string) => (
  (
    moment(
      jalaliDate,
      JALALI_FORMAT
    ).toDate()
  ).getTime()
)

export const getJalaliFromDate = () => 
  moment(new Date()).format(JALALI_FORMAT);


export const sortByLast = <T extends WithCreatedAt>(param: T[]) => {
  const sortedItems = [...param].sort((a, b) =>
    getDateTimeFromJalali(b.createdAt)
    -
    getDateTimeFromJalali(a.createdAt)
  );
  return sortedItems
}
export const sortByFirst = <T extends WithCreatedAt>(param: T[]) => {

  const sortedItems = [...param].sort((a, b) =>
    getDateTimeFromJalali(a.createdAt)
    -
    getDateTimeFromJalali(b.createdAt)
  );
  return sortedItems
}

