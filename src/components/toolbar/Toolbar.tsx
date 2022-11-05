import { HiArrowsExpand } from "react-icons/hi";
import { useExpandBox } from "../../services/expand-box/use-expand-box";
import "./toolbar.scss";

interface PropsType {
  title: string;
}
export const Toolbar = (props: PropsType) => {
  const expandBox = useExpandBox();

  const onExpand = () => {
    expandBox?.toggleExpand(props.title);
  };
  return (
    <div className="py-2 px-4 bg-primary toolbar d-flex">
      <div className="me-auto fs-5 fw-bold">{props.title}</div>
      <div className="fs-5" role="button" onClick={onExpand}>
        <HiArrowsExpand />
      </div>
    </div>
  );
};
