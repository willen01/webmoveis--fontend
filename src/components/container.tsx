import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    // width 100% max-width 72rem margin auto
    <div className={`w-full max-w-6xl mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
