export const sortByAdded = (data) => {
  return data.sort((a, b) => {
    let addedA = a.added;
    let addedB = b.added;

    if (addedA < addedB) {
      return 1;
    } else if (addedA > addedB) {
      return -1;
    }
  });
};
