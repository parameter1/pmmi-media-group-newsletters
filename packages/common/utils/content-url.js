const { get } = require('@mindful-web/object-path');

const PROSOURCE_SHORT_NAME = 'PS';

/**
 * Determines whether the content's primary site is ProSource.
 *
 * @param {object} content
 * @returns {boolean}
 */
const isProSourcePrimary = (content) => get(content, 'primarySite.shortName') === PROSOURCE_SHORT_NAME;

/**
 * Resolves the landing page URL for a content item.
 *
 * `siteContext.url` is always resolved against the _requesting_ site (the newsletter's brand site,
 * set via the `x-site-id` header), so content whose primary site is ProSource would otherwise link
 * to the secondary PMG brand host. Detect that case and build the ProSource URL directly.
 *
 * All link targets for a content item -- headline, text CTA, button -- must use this so they
 * cannot drift apart.
 *
 * @param {object} content
 * @returns {string}
 */
const getContentUrl = (content) => (isProSourcePrimary(content)
  ? `https://www.prosource.org/article/${get(content, 'id')}/${get(content, 'slug')}`
  : get(content, 'siteContext.url'));

/**
 * Resolves the primary section name for a content item, honoring the ProSource override.
 *
 * Requires the `prosourcePrimarySection` alias from the `NewsletterContentListFragment` fragment.
 *
 * @param {object} content
 * @returns {string}
 */
const getContentSectionName = (content) => (isProSourcePrimary(content)
  ? get(content, 'prosourcePrimarySection.name')
  : get(content, 'primarySection.name'));

module.exports = { getContentUrl, getContentSectionName, isProSourcePrimary };
