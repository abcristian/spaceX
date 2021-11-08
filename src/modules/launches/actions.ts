import {createAsyncThunk} from "@reduxjs/toolkit";

import {getLaunchesService} from "./api";
import {Launch} from "./typings";
import {Filter} from "../filters/reducer";

export const getLaunches = createAsyncThunk<Launch[], Filter>(
  "launches/get_launches",
  (props): Launch[] => {
    return getLaunchesService(props) as unknown as Launch[];
  },
);
