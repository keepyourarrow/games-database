export const splitSlug = (str) => str.split("-").join(" ");

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatLargeNumbers = (str) => {
  return new Intl.NumberFormat("en", {
    maximumSignificantDigits: 3,
  }).format(str);
};
