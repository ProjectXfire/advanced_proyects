import { createContext, ReactNode, useReducer } from "react";
import { getNews } from "../services";
// Interfaces
import { IHit, INewsResponse } from "../intefaces";
// Reducers
import { HackerNewsReducer } from "./rHackerNews";

export interface HackerNewsState {
  hits: IHit[];
  term: string;
  loading: boolean;
  errorMessage: string;
  currentPage?: number;
  nbPages?: number;
  hitsPerPage?: number;
}

const HackerNewsInitState: HackerNewsState = {
  hits: [],
  term: "",
  loading: false,
  errorMessage: "",
  currentPage: undefined,
  nbPages: undefined,
  hitsPerPage: undefined,
};

interface HackerNewsContextProps {
  state: HackerNewsState;
  setData: (page: number, query?: string) => void;
}

export const HackerNewsContext = createContext({} as HackerNewsContextProps);

export const HackerNewsProvider = ({ children }: { children: ReactNode }) => {
  //--> Hooks

  const [state, dispatch] = useReducer(HackerNewsReducer, HackerNewsInitState);

  //--> Methods

  const setData = async (page: number, query?: string) => {
    try {
      dispatch({ type: "startLoading" });
      const newsResponse = await getNews(page, query);
      dispatch({
        type: "setData",
        payload: { data: newsResponse, term: query || "" },
      });
      dispatch({ type: "finishLoading" });
    } catch (error: any) {
      dispatch({ type: "finishLoading" });
      dispatch({ type: "setErrorMessage", payload: error.message });
    }
  };

  //--> Renders

  return (
    <HackerNewsContext.Provider value={{ state, setData }}>
      {children}
    </HackerNewsContext.Provider>
  );
};
