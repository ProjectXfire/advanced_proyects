// Generated by https://quicktype.io

export interface INewsResponse {
  hits: IHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: IExhaustive;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: IProcessingTimingsMS;
}

export interface IExhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface IHit {
  created_at: string;
  title: null | string;
  url: null | string;
  author: string;
  points: number;
  story_text: null | string;
  comment_text: null;
  num_comments: number | null;
  story_id: null;
  story_title: null;
  story_url: null;
  parent_id: number | null;
  created_at_i: number;
  relevancy_score?: number;
  _tags: string[];
  objectID: string;
  _highlightResult: IHighlightResult;
}

export interface IHighlightResult {
  title?: IAuthor;
  url?: IAuthor;
  author: IAuthor;
  story_text?: IAuthor;
}

export interface IAuthor {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: any[];
}

export enum MatchLevel {
  None = "none",
}

export interface IProcessingTimingsMS {
  total: number;
}
