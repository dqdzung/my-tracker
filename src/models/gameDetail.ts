export interface GameDetail {
  about_the_game: string;
  achievements: {
    total: number;
    highlighted: {
      name: string;
      path: string;
    }[]
  };
  background: string;
  background_raw: string;
  categories: {
    id: number;
    description: string
  }[],
  controller_support: string;
  detailed_descriptio: string;
  developers: string[];
  genres: {
    id: number;
    description: string
  }[],
  header_image: string;
  is_free: boolean;
  metacritic: {
    score: number;
    url: string
  };
  movies: {
    id: number;
    name: string;
    mp4: { 480: string, max: string };
    thumbnail: string;
    webm: { 480: string, max: string };
  }[];
  name: string;
  pc_requirements: {
    minimum: string;
    recommended: string;
  };
  platforms: { [key: string]: boolean };
  publishers: string[];
  recommendations: { total: number };
  release_date: {
    coming_soon: boolean;
    date: string
  };
  screenshots: {
    id: number;
    path_full: string;
    path_thumnail: string;
  }[];
  short_description: string;
  steam_appid: number;
  website: string
}