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

const initialState = {
  audits: [
    {
      id: "DT1JFIZ8OB",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "open",
      centerId: "6Y6MqXMCWX",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "Wyfej7n9Co",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "nc",
      centerId: "vBaNbqQws6",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "GpW056n6-p",
      question: "List of services provided",
      status: "completed",
      centerId: "D-niKOd3AF",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "rL8rGT2DU2",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "open",
      centerId: "6Y6MqXMCWX",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "VVXcA4S9sc",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "checked",
      centerId: "siuCAuNF2U",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "_31t42DDB6",
      question: "List of services provided",
      status: "open",
      centerId: "cWfridkvNY",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "rnXB0PUfvo",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "completed",
      centerId: "LC8uBlVmvr",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "m7HYtjPgWU",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "open",
      centerId: "LC8uBlVmvr",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "owUw1uD_T6",
      question: "List of services provided",
      status: "nc",
      centerId: "6Y6MqXMCWX",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: today,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "kk4ooJAvN-",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "nc",
      centerId: "6Y6MqXMCWX",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: nextYear,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "koBZHSJWtq",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "completed",
      centerId: "W_3QSYFxuL",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: nextYear,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "_cDrwy-Tq9",
      question: "List of services provided",
      status: "checked",
      centerId: "l8lKe9fomR",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: nextYear,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "CgsXlgT5kG",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "open",
      centerId: "6Y6MqXMCWX",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",

      date: nextYear,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "QpjRYJNA-q",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "completed",
      centerId: "6Y6MqXMCWX",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: nextYear,
    },
    {
      id: "_KfwB4Grgo",
      question: "List of services provided",
      status: "open",
      centerId: "EBqEUdf_zS",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: nextYear,
    },
    {
      id: "TLrm13A5eN",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "open",
      centerId: "l8lKe9fomR",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: nextYear,
    },
    {
      id: "n_7C8-vZoX",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "open",
      centerId: "6Y6MqXMCWX",
      categoryId: "JVDoLZrxoK",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: nextYear,
    },
    {
      id: "0eyiVyTH5D",
      question: "List of services provided",
      status: "open",
      centerId: "6Y6MqXMCWX",
      categoryId: "JVDoLZrxoK",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: nextYear,
    },
    {
      id: "8O_5o4GVTc",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "checked",
      centerId: "l8lKe9fomR",
      categoryId: "JVDoLZrxoK",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: nextYear,
    },
    {
      id: "yEx0XvYl71",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "open",
      centerId: "EBqEUdf_zS",
      categoryId: "JVDoLZrxoK",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      date: lastYear,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "Jl-P7f52MM",
      question: "List of services provided",
      status: "nc",
      centerId: "EBqEUdf_zS",
      categoryId: "JVDoLZrxoK",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: lastYear,
    },
    {
      id: "Jzk3H79EOB",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "open",
      centerId: "W_3QSYFxuL",
      categoryId: "JVDoLZrxoK",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: lastYear,
    },
    {
      id: "w6egbhX3aW",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "checked",
      centerId: "6Y6MqXMCWX",
      categoryId: "JVDoLZrxoK",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: lastYear,
    },
    {
      id: "rJBJP85YFP",
      question: "List of services provided",
      status: "open",
      centerId: "l8lKe9fomR",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      date: lastYear,
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],
      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
    },
    {
      id: "XG1pBHPXVi",
      question:
        "Does it have adequate space & separation to avoid cross contamination?",
      status: "open",
      centerId: "W_3QSYFxuL",
      categoryId: "ZZ7K6TGcvV",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: lastYear,
    },
    {
      id: "GIea0kUP0R",
      question:
        "Does the staff possess knowledge of first aid measures to deal with situations they are likely to encounter in the course of specimen collection? Eg - Spillage /prick",
      status: "nc",
      centerId: "l8lKe9fomR",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: lastYear,
    },
    {
      id: "Ow4thEmPmk",
      question: "List of services provided",
      status: "open",
      centerId: "6Y6MqXMCWX",
      categoryId: "fjZJ3Rs9rU",
      compilance:
        "Does it have adequate space & separation to avoid cross contamination?",
      assigns: [
        { id: 1, text: "CCI Sudip Kumar" },
        { id: 2, text: "HOD Supid Kumar" },
        { id: 3, text: "ABM Joydeep Singh" },
        { id: 4, text: "RSM Joydeep Singh" },
      ],

      notes:
        "Social distancing stickers are to be made visible at all major points where patient are to stand or sit in the waiting area",
      images: [],
      date: lastYear,
    },
  ],
  centerAudits: [],
  filteredAudits: [],
  singleNC: {},
  filters: {
    all: true,
    nc: false,
    open: false,
    checked: false,
    completed: false,
    pending: false,
    closed: false,
  },
};

const auditsSlice = createSlice({
  name: "audits",
  initialState: initialState,
  reducers: {
    updateAudit(state, action) {
      const auditTemp = action.payload.audit;
      const toUpdateAuditIndex = state.audits.findIndex(
        (audit) => audit.id === auditTemp.id
      );
      const toUpdateCentersAuditIndex = state.centerAudits.findIndex(
        (audit) => audit.id === auditTemp.id
      );
      const toUpdateFilteredAuditIndex = state.filteredAudits.findIndex(
        (audit) => audit.id === auditTemp.id
      );

      let auditUpdatedStatus =
        action.payload.audit.status === "checked" ? "open" : "checked";

      state.audits[toUpdateAuditIndex] = {
        ...auditTemp,
        status: auditUpdatedStatus,
      };

      // FILTERS COUNTER DOESN"T WORK
      state.centerAudits[toUpdateCentersAuditIndex] = {
        ...auditTemp,
        status: auditUpdatedStatus,
      };

      // CHECKED CIRCLE DOESN"T DISPLAYED AT THE SAME TIME
      state.filteredAudits[toUpdateFilteredAuditIndex] = {
        ...auditTemp,
        status: auditUpdatedStatus,
      };
    },
    getCenterAudits(state, action) {
      const filteredcenterAudits = state.audits.filter(
        (audit) => audit.centerId === action.payload.centerId
      );
      state.centerAudits = filteredcenterAudits;
      state.filteredAudits = filteredcenterAudits;
    },
    updateFilters(state, action) {
      //prettier-ignore
      console.log("FILTER UPDATED ============================================", action.payload);
      state.filters = action.payload;
    },
    filterCenterAudits(state, action) {
      let isFilterByAll = false;

      let tempCenterAudits = [...state.centerAudits];

      let conditionString = "";

      for (let condition in state.filters) {
        if (state.filters["all"] === true && !state.filters[condition]) {
          isFilterByAll = true;
        }
        if (state.filters[condition] && condition !== "all") {
          conditionString += ` || audit.status === '${condition}'`;
        }
      }

      const condition = `audit.status === 'all'${
        conditionString && conditionString
      }`;

      state.filteredAudits = tempCenterAudits.filter((audit) => {
        if (isFilterByAll) {
          return audit;
        } else if (eval(condition)) {
          return eval(condition);
        }
      });
    },
    getSingleNC(state, action) {
      state.singleNC = state.audits.find(
        (audit) => audit.id === action.payload.id
      );
    },
  },
});

export const auditsActions = auditsSlice.actions;

export default auditsSlice.reducer;
