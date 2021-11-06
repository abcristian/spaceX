import {AxiosResponse} from "axios";

import {apiClient} from "../../httpClient";
import {Launch} from "./typings";

export const getLaunchesService = async (): Promise<
  AxiosResponse<Launch[]>
> => {
  const response = await apiClient.get('/launches');
  return response.data;
};
