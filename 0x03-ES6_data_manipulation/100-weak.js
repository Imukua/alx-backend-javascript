export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let c = 0;
  if (weakMap.get(endpoint)) c = weakMap.get(endpoint);
  weakMap.set(endpoint, c + 1);
  if (c + 1 >= 5) throw new Error('Endpoint load is high');
}
