

// TIP: Create a map from a simple object!

// Using Object.entries() - we can easily convert
// a simple object to a map!

const Profile = {
  name: 'Alex',
  occupation: 'programmer',
  hobby: 'yes',
  awesome: true
};

const Person = new Map(Object.entries(Profile));

Person.get('name');
// => 'Alex'

Person.get('awesome');
// => true

