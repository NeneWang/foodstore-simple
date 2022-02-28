export const product = {
  DEFAULT_QUANTITY: 1,
};
import data from './categories.json';

export const shop = {
  CATEGORISE: ["Todo"].concat(Object.keys(data.options).sort()),
  PRICE_POINTS: [0, 25, 50, 75, 100],
  SORT_TYPES: [
    { name: "Default", value: "default" },
    { name: "A a Z", value: "az" },
    { name: "Z a A", value: "za" },
    { name: "Precio de menor a mayor", value: "lowToHigh" },
    { name: "Precio de mayor a menor", value: "highToLow" },
  ],
  DEFAULT_VIEW: "grid",
};
