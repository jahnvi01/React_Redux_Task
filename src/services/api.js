import {
  table1Data,
  table2Data,
  table3Data,
  TableSlug1,
  TableSlug2,
  TableSlug3,
  View1,
  view1Data,
  View2,
  view2Data,
} from "../data";
import http from "../http-common";

export const getAllTables = (viewType) => {
  if (viewType === View1) {
    return view1Data;
  } else if (viewType === View2) {
    return view2Data;
  }
};

export const getTableDetails = (slugType, filter) => {
  if (slugType === TableSlug1) return table1Data;
  if (slugType === TableSlug2) return table2Data;
  if (slugType === TableSlug3) {
    if (filter) {
      return {
        ...table3Data,
        result: table3Data.result.filter((row) => row.id === filter),
      };
    } else {
      return table3Data;
    }
  }
};
