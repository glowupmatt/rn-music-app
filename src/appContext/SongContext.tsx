import React, { createContext } from "react";
import { albums } from "../utils/data/musicData";

type SongContextType = {
  albums: typeof albums;
};

type Props = {
  children: React.ReactNode;
};

export const DataContext = createContext({} as SongContextType);

const SongContext = ({ children }: Props) => {
  return (
    <DataContext.Provider value={{ albums }}>{children}</DataContext.Provider>
  );
};

export default SongContext;
