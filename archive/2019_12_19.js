
// TIP: Use optional chaining
// to safely access properties
// that might not exist!

const user = {
  name: "Alex",
  favorites: {
    foods: {
      protein: "steak",
      carb: "bread"
    },
    drinks: {
      soda: "Coca cola"
    }
  },
  occupation: "Developer"
};

console.log(user.favorites?.foods?.protein); 
// => 'steak'

console.log(user.favorites?.foods?.veggies?.leafy);
// => null

console.log(user?.skills?.forEach(x => console.log(x));
// => null




