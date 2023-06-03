const getStringFromSlug = (slug) => {
  return slug.replace(/-/g, " ");
};

const getSlugFromString = (string) => {
  return string.toLowerCase().replace(/\s+/g, "-");
};

export { getStringFromSlug, getSlugFromString };
