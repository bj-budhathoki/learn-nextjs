import React from "react";

export const Date: React.FC<{ date: string }> = ({ date }): JSX.Element => {
  return <div className="text-gray-500">{date}</div>;
};
