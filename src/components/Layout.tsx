import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="pt-6 sm:pt-20 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
