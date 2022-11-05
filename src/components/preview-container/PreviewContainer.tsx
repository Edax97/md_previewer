import { useParseMd } from "../../services/use-parse-md";
import { PreviewArea } from "../preview-area/PreviewArea";

export const PreviewContainer = () => {
  const parseMd = useParseMd();

  return (
    <div className="p-3">
      <h1 className="mb-3">Preview</h1>
      <PreviewArea renderedHTML={parseMd?.htmlRendered} />
    </div>
  );
};
