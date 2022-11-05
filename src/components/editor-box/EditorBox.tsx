import React from "react";
import { useExpandBox } from "../../services/expand-box/use-expand-box";

interface PropsType {
  mdText: string | undefined;
  onChange: (arg: any) => any;
}

export const EditorBox = (props: PropsType) => {
  const editorExpanded = useExpandBox()?.editorExpanded;
  return (
    <div className="editor-container">
      <textarea
        className={
          "form-control bg-secondary" + (editorExpanded ? " expanded" : "")
        }
        name="mdEdit"
        id="editor"
        onChange={props.onChange}
        value={props.mdText}
        aria-label="markdown edit input"
      ></textarea>
    </div>
  );
};
