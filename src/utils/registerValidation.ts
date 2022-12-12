import * as yup from 'yup'
const patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/

export const regiterValidation = yup.object().shape({
  name: yup
    .string()
    .required('Please enter full name')
    .matches(/^.{0,25}$/, 'please enter less than 25 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space')
    .matches(/^[a-zA-Z ]*$/, 'Please enter valid name, no special char allowed'),

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
    .min(10, 'Mobile number should be of 10 digits')
    .max(10, 'Mobile number should be of 10 digits')
    .matches(/^[1-9][0-9]*$/, 'Enter valid mobile number'),

  gender: yup.string().required('Please Select One').typeError('Must select one'),

  collegeName: yup
    .string()
    .label('Collge Name')
    .required('Please enter your college name')
    .matches(/^.{0,50}$/, 'enter less than 50 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space')
    .min(3)
    .matches(/^[a-zA-Z \-,.()]*$/, 'Please enter valid name'),

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
    .matches(/^[a-zA-Z0-9_.-]*$/, 'Enter valid valid roll no. (number only)')
    .matches(/^.{0,30}$/, 'enter less than 30 alphabets')
    .matches(/^\S|^$/, 'Field value must not start with space'),

  percentageInSelectedQualif: yup
    .number()
    .label('Percentage')
    .required('Please enter your percentage')
    .max(100)
    .test('is-decimal', 'The percent should be a decimal with maximum two digits after dot', (val: any) => {
      if (val != undefined) {
        return patternTwoDigisAfterComma.test(val)
      }

      return true
    })
    .typeError('It must be a number'),
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
    .matches(/^\S|^$/, 'Field value must not start with space')
    .matches(/^[a-zA-Z0-9 _.-]*$/, 'Please enter valid value'),
})
