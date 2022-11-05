import { useContext } from "react";
import { ExpandBoxContext } from "./expand- box.provider";

export const useExpandBox = () => useContext(ExpandBoxContext);
