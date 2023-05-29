import React from "react";

type IProps = {
  description: string;
};

export const Para: React.FC<IProps> = ({ description }): JSX.Element => {
  return (
    <p className="font-normal text-gray-500 text-md dark:text-gray-500 line-clamp-4">
      {description}
    </p>
  );
};
