import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const OPSQImg = () => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes('opsq.png'));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img alt="OPSQ" fixed={imageFixed} />;
    }}
  />
);

OPSQImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default OPSQImg;
