import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col flex-1">
        <Steps/>
        {children}
      </MaxWidthWrapper>
    </>
  );
};

export default Layout;
