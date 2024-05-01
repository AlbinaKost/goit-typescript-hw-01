interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

let mango: User;
mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};
let poly: User;
poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
