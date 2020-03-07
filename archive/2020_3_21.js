
// TIP: Combine nullish coalescing
// and optional chaning to create
// safe access default values!

const id = data?.getUserByAccount?.id ?? 0;
// Will either be "getUserByAccount.id" or 0

if (!id) {
  throw Error('User not found!');
}

// Do something with id here...


