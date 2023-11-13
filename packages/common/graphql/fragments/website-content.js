const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentListFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  published
  company {
    id
    type
    name
    siteContext {
      path
    }
  }
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress" } })
    alt
    isLogo
  }
  ...on ContentEvent {
    name(input: { mutation: Email })
    ends
    starts
    startDate
    endDate
    city
    state
    website
  }
}

`;
