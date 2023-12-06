export default function groceriesList() {
    const res = new Map();
    const objData = {
      Apples: 10,
      Tomatoes: 10,
      Pasta: 1,
      Rice: 1,
      Banana: 5,
    };
    const list = Array.from(Object.keys(objData));
  
    list.map((item) => res.set(item, objData[item]));
    return res;
  }
