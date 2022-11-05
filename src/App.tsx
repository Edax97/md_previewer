import React from "react";
import "./App.scss";
import { EditorContainer } from "./components/editor-container/EditorContainer";
import { Header } from "./components/header/Header";
import { PreviewContainer } from "./components/preview-container/PreviewContainer";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid app mt-md-5 px-1 px-lg-4">
        <div className="row">
          <div className="col-12 col-lg-5">
            <EditorContainer />
          </div>
          <div className="col-12 col-lg-7">
            <PreviewContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
