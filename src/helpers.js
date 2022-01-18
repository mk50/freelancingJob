export const days = [
  { id: 1, day: "MONDAY" },
  { id: 2, day: "TUESDAY" },
  { id: 3, day: "WEDNESDAY" },
  { id: 4, day: "THURSDAY" },
  { id: 5, day: "FRIDAY" },
  { id: 6, day: "SATURDAY" },
  { id: 7, day: "SUNDAY" },
];

export let { cYear, cMonth, cDay } = {
  cYear: new Date().getFullYear(),
  cMonth: new Date().getMonth(),
  cDay: new Date().getDate(),
};

export const months = [
  { id: 0, month: "January" },
  { id: 1, month: "February" },
  { id: 2, month: "March" },
  { id: 3, month: "April" },
  { id: 4, month: "May" },
  { id: 5, month: "June" },
  { id: 6, month: "July" },
  { id: 7, month: "August" },
  { id: 8, month: "September" },
  { id: 9, month: "October" },
  { id: 10, month: "November" },
  { id: 11, month: "December" },
];

export const USER_REDIRECT_DELAY = 2000;

export const DB_INPUT_USER = "xxx@xxx.com";
export const DB_INPUT_PASS = "123123";
export const DB_OTP = 1234;

export const getNumberOfDaysInMonth = (month) => {
  const date = new Date();
  const year = date.getFullYear();
  return new Date(year, month, 0).getDate();
};

export const categoriseArrayToObject = (array) => {
  let daysInMonth = {};
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let key = item.month;
    if (!(key in item)) daysInMonth[key] = {};
    daysInMonth[key] = getNumberOfDaysInMonth(item.id);
  }
  return daysInMonth;
};

export const convertCategoriseObjectToArray = (object) => {
  let monthDaysArray = [];
  let i = 0;
  for (let month in object) {
    monthDaysArray.push({
      [month]: { id: i, days: object[month], year: new Date().getFullYear() },
    });
    i++;
  }
  return monthDaysArray;
};

export const loopNumbers = (maxNumber) => {
  let numbers = [];
  for (let i = 1; i < maxNumber; i++) {
    numbers.push(i);
  }
  return numbers;
};
