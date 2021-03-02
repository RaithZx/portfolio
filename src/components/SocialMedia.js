import React from "react";
import Media from "../../content/media.json";
const SocialMedia = () => {
  return (
    <div className="flex mt-8">
      {Media.items.map((data) => {
        return <a href={data.url} target="_blank" className="text-primary font-bold mr-3">{data.name}</a>;
      })}
    </div>
  );
};

export default SocialMedia;
