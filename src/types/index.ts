export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type FetchMoviesResponse = {
  results: Movie[];
};

export type FetchParams = {
  api_key: string;
  language?: string;
  sort_by?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number;
};

export type MoviesListState = {
  movies: Movie[];
  similar: Movie[];
  loading: boolean;
  error: boolean | undefined;
};
