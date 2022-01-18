import { createSlice } from "@reduxjs/toolkit";

import { cYear, cMonth, cDay } from "../helpers";

const initialState = {
  currentDate: new Date(cYear, cMonth, cDay),
  scrollToX: cMonth,
  selectedDate: new Date(cYear, cMonth, cDay),
  selectedYear: new Date().getFullYear(),
  selectedMonth: new Date().getMonth() + 1,
  activeDayItem: new Date(cYear, cMonth, cDay).getDate(),
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: {
    updateCurrentDate(state, action) {
      state.currentDate = action.payload.newDate;
    },
    updateSelectedYear(state, action) {
      state.selectedDate = action.payload.newYear;
    },
    updateSelectedMonth(state, action) {
      state.selectedDate = action.payload.newMonth;
    },
    updateSelectedDate(state, action) {
      state.selectedDate = action.payload.newSelectedDate;
    },
    updateActiveDayItem(state, action) {
      state.selectedDate = action.payload.newActiveDay;
    },
    updateScrollToX(state, action) {
      state.scrollToX = action.payload.monthId;
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
