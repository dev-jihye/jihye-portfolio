import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="px-4 pt-6 bg-gray-100 sm:pt-20 sm:px-6">
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
