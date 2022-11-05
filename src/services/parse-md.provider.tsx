import { marked } from "marked";
import { createContext, useEffect, useState } from "react";
import { ParseMdType } from "../types/parse-md.type";
import { initialMdText } from "./initialMdText";

marked.use({ breaks: true, smartypants: true });

export const ParseMdContext = createContext<undefined | ParseMdType>(undefined);

export const ParseMdProvider = (props: any) => {
  const render = (mdText: string) => {
    const htmlRendered = marked.parse(mdText);
    setState({ ...state, mdText, htmlRendered });
  };
  const [state, setState] = useState({
    mdText: initialMdText,
    htmlRendered: "",
    render,
  });

  useEffect(() => {
    render(state.mdText);
  }, []);

  return (
    <ParseMdContext.Provider value={state}>
      {props.children}
    </ParseMdContext.Provider>
  );
};
