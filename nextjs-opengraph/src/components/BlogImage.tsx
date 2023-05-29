import Image from "next/image";
import React from "react";
type IProps = {
  imageUrl: string;
};

export const BlogImage: React.FC<IProps> = ({ imageUrl }) => {
  return <Image src={imageUrl} alt={"image"} fill />;
};
