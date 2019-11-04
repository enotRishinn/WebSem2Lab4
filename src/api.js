import fetch from 'isomorphic-fetch';

export function getGeolocation () {
  return fetch('').then((r) => r.json());
}
