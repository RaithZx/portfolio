import React from "react";
import { StaticQuery, graphql, Link } from 'gatsby';
import { getCurrentPath, isCurrentPath }  from "../helpers/helpers";

const Header = (location) => {
  console.log("HEADER")
  console.log(location)
  
  return (
    <StaticQuery
    query={graphql`
      query menu {
        allMenuJson {
          edges {
            node {
              id
              name
              link
            }
          }
        }
      }
    `}
    render = { data =>(
    <header
      id="top"
      className=" flex flex-col  container  mx-auto py-4  mb-10 pt-12"
    >
      <nav
        id="site-menu"
        className="flex  sm:flex-row  justify-end items-center px-2 sm:px-4 py-1  sm:shadow-none w-full sm:w-2/3  mx-auto"
      >
        <div
          id="menu"
          className=" h-full py-1 pb-1 sm:py-0 sm:pb-0  "
        >
         {data.allMenuJson.edges.map((item, index) =>{
           console.log(item)
           console.log('LCOATION')
           console.log(location.location)
           return (
             <>
             {!isCurrentPath(location.location.pathname, item.node.link) && (

               <Link
               className="text-dark font-bold text-lg mr-4"
               to={"/"+item.node.link} >
             {item.node.name}
            </Link>
              )}
            </>
           )
         })} 
        </div>
      </nav>
    </header>

    )} 
    />
  );
};

export default Header;
