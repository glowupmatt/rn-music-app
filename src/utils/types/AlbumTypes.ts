export type AlbumsType = {
  title: string;
  artist: string;
  image: string;
  mainColor: string;
  secondColor: string;
  id: string;
  songs: {
    name: string;
    id: string;
    credits: string;
    audio: string;
  }[];
};
