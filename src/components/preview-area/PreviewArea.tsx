import "./preview-area.scss";

interface PropsType {
  renderedHTML: string | undefined;
}

export const PreviewArea = (props: PropsType) => {
  return (
    <div id="preview">
      <div dangerouslySetInnerHTML={{ __html: props.renderedHTML || "" }}></div>
    </div>
  );
};
