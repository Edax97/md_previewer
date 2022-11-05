import { useParseMd } from "../../services/parse-md/use-parse-md";
import { PreviewArea } from "../preview-area/PreviewArea";
import { Toolbar } from "../toolbar/Toolbar";

export const PreviewContainer = () => {
  const parseMd = useParseMd();

  return (
    <div className="m-3  shadow-box">
      <Toolbar title="Preview"></Toolbar>
      <PreviewArea renderedHTML={parseMd?.htmlRendered} />
    </div>
  );
};
