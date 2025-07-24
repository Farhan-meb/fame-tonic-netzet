import { ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
    className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
    return <main className={className}>{children}</main>;
};

export default PageLayout;
