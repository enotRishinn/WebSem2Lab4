export default function getAddedCitiesFromStorage(key = 'added_cities') {
  const localStorageContent = JSON.parse(localStorage.getItem(key));
  let added_cities = [];
  if (localStorageContent !== null && Array.isArray(localStorageContent))
    added_cities = localStorageContent;
  return new Map(added_cities.map(cityName => [cityName, undefined]));
}
