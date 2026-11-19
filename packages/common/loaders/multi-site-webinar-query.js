const { allPublishedContent } = require('@mindful-web/web-common/block-loaders');
const defaultFragment = require('../graphql/fragments/website-content');

// Site-wide on purpose: on the Mindful read API a website-scheduled-content
// query without a section only matches the home section.
const loadContent = async (apolloClient, { sort, ...params } = {}) => {
  const defaults = {
    queryFragment: defaultFragment,
  };
  // console.log('hit: ', defaults, params)
  return allPublishedContent(apolloClient, {
    ...defaults,
    ...params,
    ...(sort && { sortField: sort.field, sortOrder: sort.order }),
  });
};

const sortArrayByFieldAsc = async (array, key) => array.sort((a, b) => {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
});

const sortArrayByFieldDesc = async (array, key) => array.sort((a, b) => {
  if (a[key] < b[key]) {
    return 1;
  }
  if (a[key] > b[key]) {
    return -1;
  }
  return 0;
});

module.exports = async (apolloClient, {
  siteIds = [],
  params = {
    limit: 1,
    sort: {
      field: 'startDate',
      order: 'asc',
    },
  },
} = {}) => {
  const schedules = [];
  await Promise.all(siteIds.map(async (siteId) => {
    const siteContent = await loadContent(apolloClient, {
      ...params,
      siteId,
    });
    siteContent.nodes.forEach((node) => {
      if (!schedules.map(({ id }) => id).includes(node.id)) {
        schedules.push(node);
      }
    });
  }));

  if (params && params.sort && params.limit) {
    const { sort, limit } = params;
    const { field, order } = sort;
    const sortedSchedules = order === 'desc' ? await sortArrayByFieldDesc(schedules, field) : await sortArrayByFieldAsc(schedules, field);

    return {
      schedules: sortedSchedules.slice(0, limit),
    };
  }
  return {
    schedules,
  };
};
