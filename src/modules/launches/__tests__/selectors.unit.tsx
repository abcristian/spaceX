import {launchesMock} from "./launches.mock";
import {RootState} from "../../../redux/configStore";
import {isLaunchesSelector, launchesSelector} from "../selectors";

describe("Selectors", () => {
  test("launchesSelector", async () => {
    const state: RootState = {
      launches: launchesMock,
    } as RootState;
    const result = launchesMock;
    expect(launchesSelector(state)).toStrictEqual(result);
  });

  test("isLaunchesSelector", async () => {
    const state: RootState = {
      launches: launchesMock,
    } as RootState;
    const result = true;
    expect(isLaunchesSelector(state)).toStrictEqual(result);
  });
});
