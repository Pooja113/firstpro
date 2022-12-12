import * as yup from 'yup'

export const regiterValidation = yup.object().shape({
  name: yup
    .string()
    .required('Please enter full name')
    .matches(/^.{0,25}$/, 'please enter less than 25 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  email: yup
    .string()
    .email('Email must be valid')
    .required('Please enter Email')
    .matches(/^.{3,40}$/, 'please enter less alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  phoneNumber: yup
    .string()
    .required('Please enter Phone Number')
    .typeError('It must be a number')
    .matches(/^[0-9]*$/, 'must be numerical')
    .matches(/^.{10,10}$/, 'please enter with in 10 digit limits')
    .matches(/^((?!(0))[0-9]{9})$/, 'Please enter valid phone number'),

  gender: yup.string().required('Please Select One').typeError('Must select one'),

  collegeName: yup
    .string()
    .required('Please enter your college name')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  stream: yup
    .string()
    .required('Please enter your stream')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  educationalQualification: yup
    .string()
    .required('Please select one')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets'),
  semester: yup
    .string()
    .required('Please enter your semester')
    .matches(/^.{0,15}$/, 'enter less than 15 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  course: yup
    .string()
    .required('Please enter the course name')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  rollNumber: yup
    .string()
    .required('Please enter the roll number')
    .matches(/^.{0,30}$/, 'enter less than 30 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  internshipExpTechnology: yup
    .string()
    .required('Please enter the intership technology')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  percentageInSelectedQualif: yup.number().required('Please enter your percentage').typeError('It must be a number'),
  passingYearOfSelectedQualf: yup
    .string()
    .max(new Date().getFullYear(), 'Max year is 2022')
    .required('Please enter passing year')
    .typeError('It must be a number')
    .matches(/^.{4,4}$/, 'enter valid year details'),
  intrestedIn: yup.string().required('Please select one'),
  prevInternshipExp: yup
    .string()
    .required('Please write "No", if no internship')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  offerInHand: yup
    .string()
    .required('Please write "No", if no offers')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),
})
