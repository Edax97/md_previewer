import React from "react";
import "./App.scss";
import { EditorContainer } from "./components/editor-container/EditorContainer";
import { Header } from "./components/header/Header";
import { PreviewContainer } from "./components/preview-container/PreviewContainer";
import { useExpandBox } from "./services/expand-box/use-expand-box";

function App() {
  const expandBox = useExpandBox();

  let editorClass = "col-lg-5";
  let previewClass = "col-lg-7";
  if (expandBox?.editorExpanded) {
    previewClass = "d-none";
    editorClass = "col-12";
  }
  if (expandBox?.previewExpanded) {
    editorClass = "d-none";
    previewClass = "col-12";
  }

  return (
    <>
      <Header />
      <div className="container-fluid app px-1 px-lg-4 mb-3">
        <div className="row">
          <div className={editorClass}>
            <EditorContainer />
          </div>
          <div className={previewClass}>
            <PreviewContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
