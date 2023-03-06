const fetchDataFunction = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
};

const x = await fetchDataFunction();
console.log(x);
