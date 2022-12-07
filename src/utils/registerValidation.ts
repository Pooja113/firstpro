import * as yup from 'yup'

export const regiterValidation = yup.object().shape({
  name: yup.string().required('Please enter full name'),
  email: yup.string().email('Email must be valid').required('Please enter Email'),
  phoneNumber: yup.number().required('Please enter Phone Number').typeError('It must be a number'),
  gender: yup.string().required('Please Select One').typeError('Must select one'),
  collegeName: yup.string().required('Please enter your college name'),
  stream: yup.string().required('Please enter your stream'),
  educationalQualification: yup.string().required('Please select one'),
  semester: yup.string().required('Please enter your semester'),
  course: yup.string().required('Please enter the course name'),
  percentageInSelectedQualif: yup.number().required('Please enter your percentage').typeError('It must be a number'),
  passingYearOfSelectedQualf: yup
    .number()
    .max(new Date().getFullYear(), 'Max year is 2022')
    .required('Please enter passing year')
    .typeError('It must be a number'),
  intrestedIn: yup.string().required('Please select one'),
  prevInternshipExp: yup.string().required('Please write "No", if no internship'),
  offerInHand: yup.string().required('Please write "No", if no offers'),
})
