import {Filter} from "../../filters/reducer";
import * as actions from "../actions";
import {getLaunchesService} from "../api";

jest.mock("../api", () => ({
  getLaunchesService: jest.fn().mockResolvedValue({}),
}));

describe("getLaunches ", () => {
  const dispatch = jest.fn();
  const getState = jest.fn().mockReturnValue({});
  const rejectedWithValue = jest.fn();

  const filter: Filter = {sort: "asc", year: 2016};

  test("execute getLaunches", async () => {
    await actions.getLaunches(filter)(dispatch, getState, {});
    expect(getLaunchesService).toHaveBeenCalled();
  });
  test("should dispatch getLunchesService", async () => {
    (getLaunchesService as jest.Mock).mockRejectedValue({
      response: {data: "error"},
    });
    await actions.getLaunches(filter)(dispatch, getState, {
      extraArgument: {rejectedWithValue},
    });
    expect(getLaunchesService).toHaveBeenCalled();
  });
});
