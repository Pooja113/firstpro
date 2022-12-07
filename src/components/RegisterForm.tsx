import React from 'react'
import {
  CourseContainer,
  CourseField,
  DetailsContainer,
  EducationDetails,
  ErrorMessage,
  FormContainer,
  GenderContainer,
  InputContainer,
  InputField,
  InputLabel,
  InputSubLabel,
  InputTextArea,
  InterestOptions,
  Interests,
  MainContainer,
  PersonalInfo,
  PersonalInfoHeading,
  Radiobuttonfield,
  RegisterButton,
  RegisterContainer,
} from 'styles/components/RegisterForm'
import { useForm } from 'react-hook-form'
import { regiterValidation } from 'utils/registerValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import usePost from 'hooks/usePost'
// import { useNavigate } from 'react-router-dom'
// import ROUTES from 'routes'

const RegisterForm = () => {
  // const navigate = useNavigate()

  const { mutateAsync } = usePost()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(regiterValidation),
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await mutateAsync({
        url: 'user/registerUser',
        payload: data,
      })

      if (response.accessToken) {
        localStorage.setItem('token', response.accessToken)
      }
    } catch (error: any) {
      return { error: error?.response?.data?.errorMessage }
    }
  }

  const onError = (errors: any) => {
    return errors
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit, onError)}>
        <RegisterContainer>
          <PersonalInfoHeading>Personal Information</PersonalInfoHeading>
          <PersonalInfo>
            <InputContainer>
              <InputLabel htmlFor="name">Full name *</InputLabel>
              <InputField id="name" {...register('name')} />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="email">Email *</InputLabel>
              <InputField id="email" {...register('email')} />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="phoneNumber">Phone Number *</InputLabel>
              <InputField id="phoneNumber" {...register('phoneNumber')} />
              {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="gender">Gender *</InputLabel>
              <GenderContainer>
                <Radiobuttonfield id="male" type="radio" {...register('gender')} value="male" />
                <InputSubLabel htmlFor="male">Male</InputSubLabel>
                <Radiobuttonfield id="female" type="radio" {...register('gender')} value="female" />
                <InputSubLabel htmlFor="female">Female</InputSubLabel>
                <Radiobuttonfield id="others" type="radio" {...register('gender')} value="others" />
                <InputSubLabel htmlFor="others">Others</InputSubLabel>
              </GenderContainer>
              {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
            </InputContainer>
          </PersonalInfo>
          <PersonalInfoHeading>Education Details</PersonalInfoHeading>
          <EducationDetails>
            <PersonalInfo>
              <InputContainer>
                <InputLabel htmlFor="collegeName">College Name *</InputLabel>
                <InputField id="collegeName" {...register('collegeName')} />
                {errors.collegeName && <ErrorMessage>{errors.collegeName.message}</ErrorMessage>}
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="stream">Stream *</InputLabel>
                <InputField id="stream" {...register('stream')} />
                {errors.stream && <ErrorMessage>{errors.stream.message}</ErrorMessage>}
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="semester">Semester *</InputLabel>
                <InputField id="semester" {...register('semester')} />
                {errors.semester && <ErrorMessage>{errors.semester.message}</ErrorMessage>}
              </InputContainer>
            </PersonalInfo>

            <InputLabel htmlFor="education">Education Qualification</InputLabel>
            <CourseContainer>
              <CourseField>
                <InputLabel htmlFor="course">Course Name *</InputLabel>
                <InputField id="course" {...register('course')} />
                {errors.course && <ErrorMessage>{errors.course.message}</ErrorMessage>}
              </CourseField>
              <CourseField>
                <InputLabel htmlFor="percentageInSelectedQualif">Percentage * </InputLabel>
                <InputField id="percentageInSelectedQualif" {...register('percentageInSelectedQualif')} />
                {errors.percentageInSelectedQualif && (
                  <ErrorMessage>{errors.percentageInSelectedQualif.message}</ErrorMessage>
                )}
              </CourseField>
              <CourseField>
                <InputLabel htmlFor="passingYearOfSelectedQualf">Passing Year *</InputLabel>
                <InputField id="passingYearOfSelectedQualf" {...register('passingYearOfSelectedQualf')} />
                {errors.passingYearOfSelectedQualf && (
                  <ErrorMessage>{errors.passingYearOfSelectedQualf.message}</ErrorMessage>
                )}
              </CourseField>
            </CourseContainer>
          </EducationDetails>

          <PersonalInfoHeading>Other Details</PersonalInfoHeading>
          <DetailsContainer>
            <InputLabel htmlFor="intrestedIn">Interested In</InputLabel>
            <Interests id="intrestedIn" {...register('intrestedIn')}>
              <InterestOptions value="Full stack Developer">Full stack Developer</InterestOptions>
              <InterestOptions value="React.js">React.js</InterestOptions>
              <InterestOptions value="Node.js">Node.js</InterestOptions>
              <InterestOptions value="iOS">iOS</InterestOptions>
              <InterestOptions value="Android">Android</InterestOptions>
              <InterestOptions value=".Net">.Net</InterestOptions>
              <InterestOptions value=".Web Designing">Web Designing</InterestOptions>prevInternshipExp
              <InterestOptions value="UI/UX Designing">UI/UX Designing</InterestOptions>
              <InterestOptions value="Networking">Networking</InterestOptions>
              <InterestOptions value="Digital Marketing,">Digital Marketing,</InterestOptions>
              <InterestOptions value="Quality Analyst">Quality Analyst</InterestOptions>
              <InterestOptions value="Blockchain">Blockchain</InterestOptions>
              <InterestOptions value="AI/ML">AI/ML</InterestOptions>
            </Interests>
            {errors.intrestedIn && <ErrorMessage>{errors.intrestedIn.message}</ErrorMessage>}
          </DetailsContainer>

          <DetailsContainer>
            <InputLabel htmlFor="prevInternshipExp">Internship Experience ? (If any give details) *</InputLabel>
            <InputTextArea id="prevInternshipExp" {...register('prevInternshipExp')} />
            {errors.prevInternshipExp && <ErrorMessage>{errors.prevInternshipExp.message}</ErrorMessage>}
          </DetailsContainer>

          <DetailsContainer>
            <InputLabel htmlFor="offerInHand">Any offer in hand ? *</InputLabel>
            <InputTextArea id="offerInHand" {...register('offerInHand')} />
            {errors.offerInHand && <ErrorMessage>{errors.offerInHand.message}</ErrorMessage>}
          </DetailsContainer>
        </RegisterContainer>

        <RegisterButton
        // onClick={() => {
        //   navigate(`${ROUTES?.INSTRUCTIONS?.LINK}`, { replace: true })
        // }}
        >
          Register
        </RegisterButton>
      </FormContainer>
    </MainContainer>
  )
}

export default RegisterForm
