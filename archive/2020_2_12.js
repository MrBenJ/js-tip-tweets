
// TIP: Here's how you make the FormikErrors<>
// error type with keys of your form values
// with error types of "string"
// It's using Record<T,K> from Typescript

import { FormikErrors } from 'formik';

type FormValues = {
  username: string;
  password: string;
};

const validate =
  (values: FormValues): FormikErrors<Record<keyof FormValues, string>> => {
    const errors: FormikErrors<Record<keyof FormValues, string>> = {};

    if (!values.username) {
      errors.username = 'This field is required';
    }

    if (values.password.length < 3) {
      errors.password = 'Password must be more than 3 characters';
    }

    return errors;
};



