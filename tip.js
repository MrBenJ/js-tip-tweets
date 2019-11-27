
// TIP: Use Proxy() to set default values for missing
// ENV variables!

// Oh no! Someone forgot to put in their database URL!
process.env = {
  DB_USERNAME: 'MrBenJ',
  DB_PASSWORD: '********************'
};

const envs = new Proxy(process.env, {
  get(env, prop) {
    // No problem! Return the default DB url here!
    if(!env[prop] && prop === 'DB_URL') {
      return 'default.db.dev.com:3303';
    }
    return env[prop];
  }
});
console.log(envs.DB_URL);
// => 'default.db.dev.com:3303'



