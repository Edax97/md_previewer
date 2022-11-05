import { useState } from "react";
import { useParseMd } from "../../services/use-parse-md";
import { EditorBox } from "../editor-box/EditorBox";

export const EditorContainer = () => {
  const parseMd = useParseMd();

  const onChange = (event: any) => {
    parseMd?.render(event.target.value);
  };

  return (
    <div className="p-3">
      <h1 className="mb-3">Editor</h1>
      <EditorBox mdText={parseMd?.mdText} onChange={onChange} />
    </div>
  );
};
