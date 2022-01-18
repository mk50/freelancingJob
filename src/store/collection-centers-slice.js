import { createSlice } from "@reduxjs/toolkit";

let today = new Date();

let lastYear = new Date(
  today.getFullYear() - 1,
  new Date().getMonth(),
  new Date().getDate()
);
// lastYear.setDate(today.getDate() + 1);

let nextYear = new Date(
  today.getFullYear() + 1,
  new Date().getMonth(),
  new Date().getDate()
);
// let afterTomorrow = new Date();
// afterTomorrow.setDate(lastYear.getDate() + 1);

const initialState = {
  centers: [
    {
      id: "6Y6MqXMCWX",
      title: "Ayurveda farmacutical clinic",
      center: "Wellness Centre",
      date: today,
      type: "completed",
      scheduleStatus: true,
      ongoing: true,
      nonCompilance: true,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
      hasNc: 5,
      hasCompleted: 2,
    },
    {
      id: "l8lKe9fomR",
      title: "Mahendra Bhadra  Surgical lab, Ring Road, Mohali",
      center: "FPSC",
      date: new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
      ),
      type: "pending",
      scheduleStatus: true,
      ongoing: true,
      nonCompilance: true,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
    },
    {
      id: "EBqEUdf_zS",
      title: "Guru Gobind Clinic, Deughar",
      center: "PSC/COCO",
      date: today,
      type: "completed",
      scheduleStatus: true,
      ongoing: true,
      nonCompilance: true,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
      hasCompleted: 6,
    },
    {
      id: "W_3QSYFxuL",
      title: "Ayurveda farmacutical clinic",
      center: "Wellness Centre",
      date: lastYear,
      type: "completed",
      scheduleStatus: true,
      ongoing: true,
      nonCompilance: true,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
      hasNc: 5,
      hasCompleted: 2,
    },
    {
      id: "LC8uBlVmvr",
      title: "Mahendra Bhadra  Surgical lab, Ring Road, Mohali",
      center: "FPSC",
      date: lastYear,
      type: "pending",
      scheduleStatus: false,
      ongoing: false,
      nonCompilance: false,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
    },
    {
      id: "cWfridkvNY",
      title: "Guru Gobind Clinic, Deughar",
      center: "PSC/COCO",
      date: lastYear,
      type: "pending",
      scheduleStatus: false,
      ongoing: false,
      nonCompilance: false,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
    },
    {
      id: "D-niKOd3AF",
      title: "Ayurveda farmacutical clinic",
      center: "Wellness Centre",
      date: nextYear,
      type: "completed",
      scheduleStatus: false,
      ongoing: false,
      nonCompilance: false,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
      hasNc: 5,
      hasCompleted: 2,
    },
    {
      id: "vBaNbqQws6",
      title: "Mahendra Bhadra  Surgical lab, Ring Road, Mohali",
      center: "FPSC",
      date: nextYear,
      type: "pending",
      scheduleStatus: false,
      ongoing: false,
      nonCompilance: false,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
    },
    {
      id: "siuCAuNF2U",
      title: "Guru Gobind Clinic, Deughar",
      center: "PSC/COCO",
      date: nextYear,
      type: "completed",
      scheduleStatus: false,
      ongoing: false,
      nonCompilance: false,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
      hasNc: 5,
      hasCompleted: 2,
    },
    {
      id: "x1235xqqq",
      title: "Mahendra Bhadra  Surgical lab, Ring Road, Mohali",
      center: "PSC/COCO",
      date: nextYear,
      type: "completed",
      scheduleStatus: false,
      ongoing: false,
      nonCompilance: true,
      address: "Sector B, Jabalpur, New Market, Kolkata -72889, West Bengal",
      hasNc: 5,
      hasCompleted: 10,
    },
  ],
  singleCenter: {},
};

const collectionCentersSlice = createSlice({
  name: "centers",
  initialState: initialState,
  reducers: {
    getSingleCenter(state, action) {
      state.singleCenter = state.centers.find(
        (center) => center.id === action.payload.id
      );
    },
  },
});

export const collectionCentersActions = collectionCentersSlice.actions;

export default collectionCentersSlice.reducer;
