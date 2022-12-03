import api from ".";

export const discoverGames = async ({
  type,
  filter = "ordering=-rating",
  pageSize = 20,
  page = 1,
  onSuccess,
  onError,
  onFinally,
  signal,
}) => {
  if (type == "greatest") {
    filter += "&year=2021";
  }

  return await api({
    url: `/games/lists/${type}`,
    filter: `discover=true&page_size=${pageSize}&page=${page}&${filter}`,
    onSuccess,
    onError,
    onFinally,
    signal,
  });
};

export const getGamesByDate = async ({
  date,
  filter = "ordering=-released",
  pageSize = 20,
  page = 1,
  onSuccess,
  onError,
  onFinally,
  signal,
}) => {
  return await api({
    url: `/games/calendar/${date}`,
    filter: `page_size=${pageSize}&page=${page}&${filter}&popular=true`,
    onSuccess,
    onError,
    onFinally,
    signal,
  });
};

export const getGames = async ({
  type,
  filter = "ordering=-added",
  pageSize = 20,
  page = 1,
  onSuccess,
  onError,
  onFinally,
  signal,
}) => {
  filter = `page_size=${pageSize}&page=${page}&${filter}`;

  if (type) {
    filter = `${type}&${filter}`;
  }

  return await api({
    url: `/games`,
    filter,
    onSuccess,
    onError,
    onFinally,
    signal,
  });
};

export const searchGames = ({ pageSize, searchVal, onSuccess, onFinally }) => {
  api({
    url: `/games`,
    filter: `page_size=${pageSize}&page=1&search=${searchVal}`,
    onSuccess,
    onFinally,
  });
};

export const getGameDetails = async ({ type }) => {
  return await api({
    url: `/games/${type}`,
  });
};

export const getGamesList = async () => {
  return await api({
    url: `/games/lists/main`,
    filter: "ordering=-rating",
  });
};

export const getPlatforms = async () => {
  return await api({
    url: `/platforms/lists/parents`,
  });
};

export const getInfo = async ({ type, filter = null }) => {
  return await api({
    url: `/${type}`,
    filter: filter,
  });
};

export const getTags = async () => {
  return await api({
    url: `/tags`,
  });
};
