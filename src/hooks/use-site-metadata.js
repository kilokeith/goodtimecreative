import { useStaticQuery, graphql } from 'gatsby';
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
            contactEmail
            contactAddress
            social {
              instagram
              facebook
              twitter
              linkedIn
              pinterest
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
