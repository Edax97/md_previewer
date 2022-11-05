import { useContext } from "react";
import { ParseMdContext } from "./parse-md.provider";

export const useParseMd = () => {
  return useContext(ParseMdContext);
};
