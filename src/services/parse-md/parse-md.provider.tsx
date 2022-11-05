import { marked } from "marked";
import { createContext, useEffect, useState } from "react";
import { ParseMdType } from "../../types/parse-md.type";
import { initialMdText } from "./initial-md-text";
import * as DOMPurify from "dompurify";

marked.use({ breaks: true });

export const ParseMdContext = createContext<undefined | ParseMdType>(undefined);

export const ParseMdProvider = (props: any) => {
  const render = (mdText: string) => {
    const htmlInsane = marked.parse(mdText);
    const htmlRendered = DOMPurify.sanitize(htmlInsane);
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
