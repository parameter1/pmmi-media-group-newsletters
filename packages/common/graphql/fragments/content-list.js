const gql = require('graphql-tag');

module.exports = gql`

fragment NewsletterContentListFragment on Content {
  id
  type
  name(input: { mutation: Email })
  teaser(input: { mutation: Email, useFallback: false, maxLength: null })
  shortName
  body(input: { mutation: Email })
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 100 } })
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
  primarySection {
    name
  }
  prosourcePrimarySection: primarySection(input: { siteId: "624490387ae702f0058b45b8" }) {
    name
  }
  ... on ContentPromotion {
    name(input: { mutation: Email })
    teaser(input: { mutation: Email, useFallback: false, maxLength: null })
    body(input: { mutation: Email })
    linkText
    linkUrl
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
