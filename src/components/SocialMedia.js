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
                  gatsbyImageData(width:28)
                }
                extension
                publicURL
              }
            }
          }
        }
        }
    `)
  return (
    <>
    <span className="mt-10"> 
      {data.allSocialMediaJson.edges.map((item ,index) => {
        {console.log(item.node.name + " - "+item.node.iconPath.childImageSharp.fluid)}
        {console.log(item.node.iconPath.childImageSharp.fluid)}
        const image = getImage(item.node.iconPath)
        return(
        <a 
           href={item.node.url}
             key={index}
             target="_blank"
             className="text-primary font-bold mr-3 text-lg mr-6"
             >
               <GatsbyImage image={image} alt="xx"
               placeholder="blurred"/> 
          
        </a>)
      })}
    </span>
    </>
  )
};

export default SocialMedia;
