const gql = require('graphql-tag');

module.exports = gql`

fragment NewsletterContentListFragment on Content {
  id
  type
  name(input: { mutation: Email })
  teaser(input: { mutation: Email, useFallback: false, maxLength: null })
  primaryImage {
    id
    src
    alt
  }
  labels
  # externalLinks {
  #   key
  #   url
  #   label
  # }
  published
  company {
    id
    name
    tasAdvertiserId: customAttribute(input: { path: "tasAdvertiserId" })
  }
  primarySite {
    shortName
  }
  ... on ContentPromotion {
    body(input: { mutation: Email })
    linkText
  }
  ...on ContentNews {
    byline
  }
  ...on Authorable {
    authors {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}

`;
