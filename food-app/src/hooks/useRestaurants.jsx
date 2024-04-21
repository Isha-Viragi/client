import useData from "./useData";

const useRestaurants = (selectedCategory) =>
  useData({
    endpoint: "/api/restaurants",
    reqConfig: { params: { category: selectedCategory } },
    dependency: selectedCategory,
  });
export default useRestaurants;
