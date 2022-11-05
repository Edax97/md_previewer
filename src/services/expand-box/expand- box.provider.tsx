import React, { Component } from "react";
import { createContext, useEffect, useState } from "react";
import { ExpandBoxType } from "../../types/expand-box.type";

export const ExpandBoxContext = createContext<ExpandBoxType | null>(null);

export class ExpandBoxProvider extends Component<any> {
  toggleExpand = (target: string) => {
    if (target === "Editor") {
      this.setState({
        ...this.state,
        editorExpanded: !this.state.editorExpanded,
      });
    }
    if (target === "Preview")
      this.setState({
        ...this.state,
        previewExpanded: !this.state.previewExpanded,
      });
  };

  state = {
    editorExpanded: false,
    previewExpanded: false,
    toggleExpand: this.toggleExpand,
  };

  render() {
    return (
      <ExpandBoxContext.Provider value={this.state}>
        {this.props.children}
      </ExpandBoxContext.Provider>
    );
  }
}
