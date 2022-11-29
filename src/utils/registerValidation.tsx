import * as yup from 'yup'

export const regiterValidation = yup.object().shape({
  fname: yup.string().required('Please enter full name'),
  email: yup.string().email('Email must be valid').required('Please enter Email'),
  phone: yup.number().required('Please enter Phone Number').typeError('It must be a number'),
  gender: yup.string().required('Please Select One').typeError('Must select one'),
  college: yup.string().required('Please enter your college name'),
  stream: yup.string().required('Please enter your stream'),
  semester: yup.string().required('Please enter your semester'),
  coursename: yup.string().required('Please enter the course name'),
  percentage: yup.number().required('Please enter your percentage').typeError('It must be a number'),
  passingyear: yup
    .number()
    .max(new Date().getFullYear(), 'Max year is 2022')
    .required('Please enter passing year')
    .typeError('It must be a number'),
  interests: yup.string().required('Please select one'),
  interneship: yup.string().required('Please write "No", if no internship'),
  offer: yup.string().required('Please write "No", if no offers'),
})
