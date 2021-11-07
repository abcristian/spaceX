import {createAsyncThunk} from "@reduxjs/toolkit";

import {getLaunchesService} from "./api";
import {Launch} from "./typings";

export const getLaunches = createAsyncThunk<
  Launch[],
  {year?: number; order: string}
>("launches/get_launches", (props): Launch[] => {
  return getLaunchesService(props) as unknown as Launch[];
});
