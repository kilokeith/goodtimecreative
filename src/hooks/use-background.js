import { useStaticQuery, graphql } from 'gatsby';

export const useBackground = filename => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: {
          extension: { regex: "/(jpe?g)|(png)/" }
          relativeDirectory: { eq: "backgrounds" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 90, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
              fixed(width: 1024) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  if (!filename) {
    return data.backgrounds.edges;
  }

  const image = data.backgrounds.edges.find(n => {
    return n.node.base === filename;
  });

  if (!image) {
    return data.backgrounds.edges;
  }

  return image;
};
