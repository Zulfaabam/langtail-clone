/**
 * @param {string} item
 * @param {...any} def
 */
export const fromLocalStorage = (item, def) => {
  const data = localStorage.getItem(item);

  if (data) {
    try {
      const parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.error(error);
      return def;
    }
  } else {
    return def;
  }
};

/**
 * @param {string} item
 * @param {any} data
 */
export const toLocalStorage = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data));
};

/**
 * @param {string} item
 */
export const removeLocalItem = (item) => {
  localStorage.removeItem(item);
};
