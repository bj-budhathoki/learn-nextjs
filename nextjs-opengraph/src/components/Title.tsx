import React from "react";
interface IProps {
  title: string;
}

export const Title: React.FC<IProps> = ({ title }) => {
  return (
    <h3 className="text-lg font-extrabold text-gray-900 dark:text-black ">
      {title}
    </h3>
  );
};
