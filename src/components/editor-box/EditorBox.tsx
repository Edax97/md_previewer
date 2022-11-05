import React from "react";
import "./editor-box.scss";

interface PropsType {
  mdText: string | undefined;
  onChange: (arg: any) => any;
}

export const EditorBox = (props: PropsType) => {
  return (
    <div className="">
      <textarea
        className="form-control"
        name="mdEdit"
        id="editor"
        rows={30}
        onChange={props.onChange}
        value={props.mdText}
        aria-label="markdown edit input"
      ></textarea>
    </div>
  );
};
