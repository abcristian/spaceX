import {AxiosResponse} from "axios";

import {apiClient} from "../../httpClient";
import {Launch} from "./typings";

export const getLaunchesService = async ({
  year,
  order,
}: {
  year?: number;
  order: string;
}): Promise<AxiosResponse<Launch[], {year?: number; order?: string}>> => {
  let url = `/launches?id=true&sort=launch_date_local&order=${order}`;
  if (year) url = `${url}&launch_year=${year}`;
  const response = await apiClient.get(url);
  return response.data;
};
