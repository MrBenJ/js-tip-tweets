
// TIP: Use the Partial<Type> utility
// type in Typescript to make all the
// properties of a type optional

type Sometype = {
  required: boolean;
  alsoRequired: string;
  extremelyRequired: number;
};

type OptionalSomeType = Partial<Sometype>;

// This is OK! ✅✅✅
const opt: OptionalSomeType = {
  extremelyRequired: 12
};


