import { INewsResponse } from "../intefaces";
import { HackerNewsState } from "./cHackerNews";

type Actions =
  | {
      type: "setData";
      payload: {
        term: string;
        data: INewsResponse;
      };
    }
  | { type: "startLoading" }
  | { type: "finishLoading" }
  | { type: "setErrorMessage"; payload: string }
  | { type: "clearErrorMessage" };

export const HackerNewsReducer = (
  state: HackerNewsState,
  action: Actions
): HackerNewsState => {
  switch (action.type) {
    case "startLoading": {
      return { ...state, loading: true, errorMessage: "" };
    }
    case "finishLoading": {
      return { ...state, loading: false };
    }
    case "setErrorMessage":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "clearErrorMessage":
      return {
        ...state,
        errorMessage: "",
      };
    case "setData":
      return {
        ...state,
        hits: action.payload.data.hits,
        currentPage: action.payload.data.page,
        hitsPerPage: action.payload.data.hitsPerPage,
        nbPages: action.payload.data.nbPages,
        term: action.payload.term,
      };
    default:
      return state;
  }
};
