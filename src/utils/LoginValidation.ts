import * as yup from 'yup'

export const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid')
    .required('Please enter Email')
    .matches(/^[A-Za-z0-9._%+-]+@thewitslab\.com$/, 'Please enter valid email'),
  password: yup
    .string()
    .required('Please enter Password')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Please enter valid Password'),
})
