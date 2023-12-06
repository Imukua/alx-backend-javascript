/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
    let res = true;
    list.map((val) => {
      if (!set.has(val)) {
        res = false;
      }
    });
  
    return res;
  }
