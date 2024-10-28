export const selectAllCars = (state) => state.cars.items;

export const selectCar = (state) => state.cars.item;

export const selectTotalCar = (state) => state.cars.totalPages;

export const selectIsLoading = (state) => state.cars.loading;

export const selectIsError = (state) => state.cars.error;
