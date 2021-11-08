import {RootState} from "../../../redux/configStore";
import {FULFILLED, PENDING, REJECTED} from "../reducer";
import * as Selectors from "../selectors";

describe("Status selectors", () => {
  test("should give fulfilled state", () => {
    const state = {
      status: {launches: [], status: FULFILLED},
    } as unknown as RootState;

    expect(Selectors.wasFulfilledSelector(state, "testOperation")).toBe(true);
  });
  test("should give loading state", () => {
    const state = {
      status: {launches: [], status: PENDING},
    } as unknown as RootState;

    expect(Selectors.isPendingSelector(state, "testOperation")).toBe(true);
  });
  test("should give rejected state", () => {
    const state = {
      status: {launches: [], status: REJECTED},
    } as unknown as RootState;

    expect(Selectors.wasRejectedSelector(state, "testOperation")).toBe(true);
  });
});
