import {getLaunches} from "../actions";
import {launchesReducer} from "../reducer";
import {launchesMock} from "./launches.mock";
import {Launch} from "../typings";

describe("Launches Reducer", () => {
  test("launchesReducer", async () => {
    const initialState: Launch[] = [];
    const action = {
      meta: {
        arg: {
          order: "desc",
        },
        requestId: "Be7ZoPXaHfDjHLmMxLBsc",
        requestStatus: "fulfilled",
      },
      payload: launchesMock,
      type: getLaunches.fulfilled,
    };
    const result = launchesMock;
    expect(launchesReducer(initialState, action)).toStrictEqual(result);
  });
});
