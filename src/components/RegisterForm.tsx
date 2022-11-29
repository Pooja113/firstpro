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

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(regiterValidation),
  })

  const onSubmit = (data: any) => {
    return data
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
              <InputLabel htmlFor="fname">Full name *</InputLabel>
              <InputField id="fname" {...register('fname')} />
              {errors.fname && <ErrorMessage>{errors.fname.message}</ErrorMessage>}
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="email">Email *</InputLabel>
              <InputField id="email" {...register('email')} />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="phone">Phone Number *</InputLabel>
              <InputField id="phone" {...register('phone')} />
              {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
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
                <InputLabel htmlFor="college">College Name *</InputLabel>
                <InputField id="college" {...register('college')} />
                {errors.college && <ErrorMessage>{errors.college.message}</ErrorMessage>}
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
                <InputLabel htmlFor="coursename">Course Name *</InputLabel>
                <InputField id="coursename" {...register('coursename')} />
                {errors.coursename && <ErrorMessage>{errors.coursename.message}</ErrorMessage>}
              </CourseField>
              <CourseField>
                <InputLabel htmlFor="percentage">Percentage * </InputLabel>
                <InputField id="percentage" {...register('percentage')} />
                {errors.percentage && <ErrorMessage>{errors.percentage.message}</ErrorMessage>}
              </CourseField>
              <CourseField>
                <InputLabel htmlFor="passingyear">Passing Year *</InputLabel>
                <InputField id="passingyear" {...register('passingyear')} />
                {errors.passingyear && <ErrorMessage>{errors.passingyear.message}</ErrorMessage>}
              </CourseField>
            </CourseContainer>
          </EducationDetails>

          <PersonalInfoHeading>Other Details</PersonalInfoHeading>
          <DetailsContainer>
            <InputLabel htmlFor="interests">Interested In</InputLabel>
            <Interests id="interests" {...register('interests')}>
              <InterestOptions value="Full stack Developer">Full stack Developer</InterestOptions>
              <InterestOptions value="React.js">React.js</InterestOptions>
              <InterestOptions value="Node.js">Node.js</InterestOptions>
              <InterestOptions value="iOS">iOS</InterestOptions>
              <InterestOptions value="Android">Android</InterestOptions>
              <InterestOptions value=".Net">.Net</InterestOptions>
              <InterestOptions value=".Web Designing">Web Designing</InterestOptions>
              <InterestOptions value="UI/UX Designing">UI/UX Designing</InterestOptions>
              <InterestOptions value="Networking">Networking</InterestOptions>
              <InterestOptions value="Digital Marketing,">Digital Marketing,</InterestOptions>
              <InterestOptions value="Quality Analyst">Quality Analyst</InterestOptions>
              <InterestOptions value="Blockchain">Blockchain</InterestOptions>
              <InterestOptions value="AI/ML">AI/ML</InterestOptions>
            </Interests>
            {errors.interests && <ErrorMessage>{errors.interests.message}</ErrorMessage>}
          </DetailsContainer>

          <DetailsContainer>
            <InputLabel htmlFor="interneship">Internship Experience ? (If any give details) *</InputLabel>
            <InputTextArea id="interneship" {...register('interneship')} />
            {errors.interneship && <ErrorMessage>{errors.interneship.message}</ErrorMessage>}
          </DetailsContainer>

          <DetailsContainer>
            <InputLabel htmlFor="offer">Any offer in hand ? *</InputLabel>
            <InputTextArea id="offer" {...register('offer')} />
            {errors.offer && <ErrorMessage>{errors.offer.message}</ErrorMessage>}
          </DetailsContainer>
        </RegisterContainer>

        <RegisterButton>Register</RegisterButton>
      </FormContainer>
    </MainContainer>
  )
}

export default RegisterForm
