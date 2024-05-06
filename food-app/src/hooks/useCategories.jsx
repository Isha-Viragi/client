import useData from "./useData";

const useCategories = () =>
  useData({ endpoint: "/api/restaurants/categories" });

export default useCategories;
