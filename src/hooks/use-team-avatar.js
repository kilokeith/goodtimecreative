import { useStaticQuery, graphql } from 'gatsby';

export const useTeamAvatar = name => {
  const data = useStaticQuery(graphql`
    query {
      avatars: allFile(
        filter: {
          extension: { regex: "/(jpe?g)|(png)/" }
          relativeDirectory: { eq: "team" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 90, maxWidth: 360) {
                ...GatsbyImageSharpFluid_withWebp
              }
              fixed(width: 360) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  if (!name) {
    return data.avatars.edges;
  }

  const images = data.avatars.edges.filter(n => {
    return n.node.base.includes(name);
  });

  if (!images) {
    return data.avatars.edges;
  }

  return {
    image: images.find(img => !img.node.base.includes('-over')),
    hover: images.find(img => img.node.base.includes('-over')),
  };
};
