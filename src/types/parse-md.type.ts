export interface ParseMdType {
  mdText: string;
  htmlRendered: string;
  render: (arg: string) => any;
}
