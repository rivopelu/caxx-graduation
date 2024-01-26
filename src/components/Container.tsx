import { ReactNode } from "react";

export function Container(props: IProps) {
  return <div className={"mx-8"}>{props.children}</div>;
}

interface IProps {
  children?: ReactNode;
}
