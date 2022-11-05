import "./preview-area.scss";
import html from "react-inner-html";

interface PropsType {
  renderedHTML: string | undefined;
}

export const PreviewArea = (props: PropsType) => {
  return (
    <div
      id="preview"
      className="px-3 px-lg-5 py-4 bg-secondary"
      {...html(props.renderedHTML)}
    ></div>
  );
};
