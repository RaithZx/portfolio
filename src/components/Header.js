import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { isCurrentPath } from "../helpers/helpers";

const Header = (locationProp) => {
  console.log("HEADER");
  console.log(locationProp);

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
      render={(data) => (
        <header
          id="top"
          className="flex justify-center sm:justify-end py-10 sm:px-10 container lg:px-32 "
        >
          <nav id="site-menu" className="flex ">
            <ul id="menu" className="flex w-full  ">
              {data.allMenuJson.edges.map((item, index) => {
                console.log("Header Location");
                console.log(locationProp);
                return (
                  <>
                    {!isCurrentPath(
                      locationProp.location.pathname,
                      item.node.link
                    ) && (
                      <li className="text-dark font-bold sm:text-lg mr-4 md:mr-10">
                        <Link to={"/" + item.node.link}>{item.node.name}</Link>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </nav>
        </header>
      )}
    />
  );
};

export default Header;
