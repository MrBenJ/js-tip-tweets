

// TIP: Validate Required ENV variables with Proxy!

// Throw some handy errors to STDOUT if you miss one!
const envs = new Proxy(process.env, {
  get(env, prop) {
    if (!env[prop]) {
      throw new Error(`ENV Variable ${prop} is missing`);
    }
    return env[prop];
  }
});

console.log(envs.MY_MISSING_VALUE); // => throws an error


