import { useParseMd } from "../../services/parse-md/use-parse-md";
import { EditorBox } from "../editor-box/EditorBox";
import { Toolbar } from "../toolbar/Toolbar";

export const EditorContainer = () => {
  const parseMd = useParseMd();

  const onChange = (event: any) => {
    parseMd?.render(event.target.value);
  };

  return (
    <div className="m-3 shadow-box">
      <Toolbar title="Editor"></Toolbar>
      <EditorBox mdText={parseMd?.mdText} onChange={onChange} />
    </div>
  );
};
