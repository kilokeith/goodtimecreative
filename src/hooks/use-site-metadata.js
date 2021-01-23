import { useStaticQuery, graphql } from 'gatsby';
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            keywords
            author
            contactEmail
            contactAddress
            social {
              instagram
              facebook
              twitter
              linkedIn
              angelList
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
