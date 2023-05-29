import React from "react";
import { BlogImage, Button, Date, Para, Title } from "../components";
type IProps = {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
  created_at: string;
};
export const BlogCard: React.FC<IProps> = ({
  title,
  thumbnail,
  summary,
  created_at,
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-80 bg-slate-800">
        <BlogImage imageUrl={thumbnail} />
      </div>
      <Title title={title} />
      <Para description={summary} />
      <div className="flex items-center justify-between">
        <Button />
        <Date date={created_at} />
      </div>
    </div>
  );
};
