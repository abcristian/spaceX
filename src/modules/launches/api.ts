import {AxiosResponse} from "axios";

import {apiClient} from "../../httpClient";
import {Launch} from "./typings";
import {Filter} from "../filters/reducer";

export const getLaunchesService = async ({
  year,
  sort,
}: Filter): Promise<AxiosResponse<Launch[], Filter>> => {
  let url = `/launches?id=true&sort=launch_date_local&order=${sort}`;
  if (year) url = `${url}&launch_year=${year}`;
  const response = await apiClient.get(url);
  return response.data;
};
