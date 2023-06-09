import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { children } = props;
  return <div className="h-screen dark:bg-slate-900">{children}</div>;
};
