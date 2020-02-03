
// TIP: Need to override a type or interface?
// Use Omit<T,K> plus intersection type (&)
// to override properties!

type FormProps = {
  onSuccess: (resp: Response) => Promise<void>;
  onError: (error: Error, resp: Response) => Promise<void>;
};

// I need a new type that sends an extra value
// for "onSuccess" here. Let's use our trick here!

type FormPropsForEditUser = Omit<FormProps, 'onSuccess'> & {
  onSuccess: (resp: Response, userId: number) => Promise<void>;
}
// => FormPropsForEditUser
/**
 *  {
 *    onSuccess: (resp: Response, userId: number) => Promise<void>;
 *    onError: (error: Error, resp: Response) => Promise<void>;
 *  }
 */


