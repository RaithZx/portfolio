import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";

const SocialMedia = () => {
  let media =  [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/yuri-fraga-leandro",
      "iconPath": "../../content/images/icon.png",
      "iconName": "linkedin.svg"
    },
    {
      "name": "Instagram",
      "url": "https://www.instagram.com/yuri_codes",
      "iconPath": "../../content/images/instagram.svg",
      "iconName": "instagram.svg"
    },
    {
      "name": "GitHub",
      "url": "https://www.github.com/raithzx",
      "iconPath": "../../content/images/github.svg",
      "iconName": "github.svg"
    },
    {
      "name": "Trailblazer.me",
      "url": "https://trailblazer.me/id/yleandro",
      "iconPath": "../../content/images/salesforce.svg",
      "iconName": "salesforce.svg"
    }
  ]
  const data = useStaticQuery(graphql`
      query SocialMediaList {
        allSocialMediaJson {
          edges {
            node {
              name
              url
              iconPath {
                childImageSharp {
                  gatsbyImageData(width: 200)
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
    <span className="mt-8"> 
      {data.allSocialMediaJson.edges.map((item ,index) => {
        {console.log(item.node.name + " - "+item.node.iconPath.childImageSharp.fluid)}
        {console.log(item.node.iconPath.childImageSharp.fluid)}
        const image = getImage(item.node.iconPath)
        return(
        <a 
           href={item.url}
             key={index}
             target="_blank"
             className="text-primary font-bold mr-3 text-lg"
             >
          {/* <img src={item.node.publicURL} /> */}
          <GatsbyImage image={image} alt="xx"/>
          {item.node.name}
        </a>)
      })}
    </span>
    </>
  )
  // return(
  // <StaticQuery
  //   query={graphql`
  //     query SocialMediaList {
  //       allSocialMediaJson {
  //         edges {
  //           node {
  //             name
  //             url
  //             iconPath {
  //               childImageSharp {
  //                 fluid {
  //                   src
  //                 }
  //               }
  //               extension
  //               publicURL
  //             }
  //           }
  //         }
  //       }
  //       }
  //   `}
  //   render={data => (
  //   <span className="mt-8">
  //     {data.allSocialMediaJson.edges.map((item, index) => {
  //       console.log(item.node.iconPath.publicURL)
  //       return (
  //         <a
  //           href={item.node.url}
  //           key={index}
  //           target="_blank"
  //           className="text-primary font-bold mr-3 text-lg"
  //         >
  //           {item.node.name}
  //           {/* {item.node.name.iconPath} */}
  //           {/* <Img src="{item.node.iconPath.publicURL}" /> */}
  //           {/* <Img src="linkedin.svg" /> */}
  //           {/* <StaticImage src="../linkedin.png" /> */}
  //           {/* <StaticImage src="{item.node.iconPath.publicURL}" /> */}
  //         </a>
  //       );
  //     })}
  //   </span>
  //   )}
  // />)
};

export default SocialMedia;
