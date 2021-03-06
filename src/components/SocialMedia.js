import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    query SocialMediaList {
      allSocialMediaJson {
        edges {
          node {
            name
            url
            iconPath {
              childImageSharp {
                gatsbyImageData(width: 36)
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <span className="mt-10">
        {data.allSocialMediaJson.edges.map((item, index) => {
          const image = getImage(item.node.iconPath);
          return (
            <a
              href={item.node.url}
              key={index}
              target="_blank"
              className="mr-6"
            >
              <GatsbyImage
                image={image}
                alt={item.node.name}
                placeholder="blurred"
              />
            </a>
          );
        })}
      </span>
    </>
  );
};

export default SocialMedia;
