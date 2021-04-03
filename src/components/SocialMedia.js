import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";

const SocialMedia = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialMediaList {
          allSocialMediaJson {
            edges {
              node {
                name
                url
                iconName
              }
            }
          }
        }
      `}
      render={(data) => (
        <span className="mt-8">
          {data.allSocialMediaJson.edges.map((item, index) => {
            return (
              <a
                href={item.node.url}
                key={index}
                target="_blank"
                className="text-primary font-bold mr-3 text-lg"
              >
                {item.node.name}
              </a>
            );
          })}
        </span>
      )}
    />
  );
};

export default SocialMedia;
