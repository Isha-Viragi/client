import useData from "./useData";

const useRestaurantById = (id) =>
  useData({
    endpoint: `/api/restaurants/${id}`,
    dependency: id,
  });

export default useRestaurantById;
