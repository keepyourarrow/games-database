export const formatDate = (date, i18n) => {
  const [year, month, day] = date.split("-"); // 2022-02-25

  return `${i18n.t(`dates.months.${[parseInt(month)]}`)} ${day}, ${year}`;
};

export const getYear = (date = new Date()) => {
  return date.getFullYear();
};

export const getMonth = (date = new Date()) => {
  return date.getMonth() + 1;
};
