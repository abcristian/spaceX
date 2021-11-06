import {createAsyncThunk} from "@reduxjs/toolkit";

import {getLaunchesService} from "./api";
import {Launch} from "./typings";

export const getLaunches = createAsyncThunk<Launch[], {year: number}>(
  "launches/get_launches",
  async (year: number) => {
    return await getLaunchesService();
  },
);
