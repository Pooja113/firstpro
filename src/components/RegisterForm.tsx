import React, { useContext, useState } from 'react'
import {
  CourseContainer,
  CourseField,
  DetailsContainer,
  EducationDetails,
  ErrorMessage,
  FormContainer,
  InputContainer,
  InputField,
  InputLabel,
  InputTextArea,
  InterestOptions,
  Interests,
  MainContainer,
  PersonalInfo,
  PersonalInfoHeading,
  RegisterButton,
  RegisterContainer,
} from 'styles/components/RegisterForm'
import { useForm } from 'react-hook-form'
import { regiterValidation } from 'utils/registerValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import usePost from 'hooks/usePost'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'
import { LoaderContext } from 'context/loader'
import ErrorModal from 'components/ErrorModal'
import interests from 'assets/data/interests.json'
import qualification from 'assets/data/qualification.json'
import { semester, gender, passingYear, courses } from 'assets/data/studentCourseData'
import textCapitalize from 'utils/text'

const RegisterForm = () => {
  const navigate = useNavigate()
  const { setLoader } = useContext(LoaderContext)
  const [modal, setModal] = useState(false)
  const { mutateAsync } = usePost()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(regiterValidation),
    mode: 'all',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: any) => {
    setLoader(true)
    try {
      const response = await mutateAsync({
        url: 'user/registerUser',
        payload: {
          ...data,
          name: textCapitalize(data?.name),
          email: data?.email?.toLowerCase(),
          collegeName: textCapitalize(data?.collegeName),
          internshipExpTechnology: '',
          course: textCapitalize(data?.course),
          stream: textCapitalize(data?.stream),
          passingYearOfSelectedQualf: parseInt(data?.passingYearOfSelectedQualf),
          phoneNumber: parseInt(data?.phoneNumber),
        },
      })

      if (response.accessToken) {
        localStorage.setItem('_token', response.accessToken)
      }

      if (response) {
        setLoader(false)
        navigate(`${ROUTES?.INSTRUCTIONS?.LINK}`, { replace: true })
      }

      if (response?.message) {
        // setErrMsg(response?.message)
      }
    } catch (error: any) {
      setLoader(false)
      setModal(true)
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
              <Interests id="gender" {...register('gender')}>
                {gender.map((data) => (
                  <InterestOptions key={data.value} value={data.value}>
                    {data.label}
                  </InterestOptions>
                ))}
              </Interests>
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
                <InputLabel htmlFor="educationalQualification">Education Qualification *</InputLabel>
                <Interests id="educationalQualification" {...register('educationalQualification')}>
                  {qualification.map((each) => (
                    <InterestOptions key={each.value} value={each.value}>
                      {each.label}
                    </InterestOptions>
                  ))}
                </Interests>
                {errors.educationalQualification && (
                  <ErrorMessage>{errors.educationalQualification.message}</ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="stream">Stream *</InputLabel>
                <InputField id="stream" {...register('stream')} />
                {errors.stream && <ErrorMessage>{errors.stream.message}</ErrorMessage>}
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="semester">Semester *</InputLabel>
                <Interests id="semester" {...register('semester')}>
                  {semester.map((each) => (
                    <InterestOptions key={each.value} value={each.value}>
                      {each.label}
                    </InterestOptions>
                  ))}
                </Interests>
                {errors.semester && <ErrorMessage>{errors.semester.message}</ErrorMessage>}
              </InputContainer>
            </PersonalInfo>

            <CourseContainer>
              <CourseField>
                <InputLabel htmlFor="course">Course Name *</InputLabel>
                <Interests id="course" {...register('course')}>
                  {courses.map((course) => (
                    <InterestOptions key={course.value} value={course.value}>
                      {course.label}
                    </InterestOptions>
                  ))}
                </Interests>
                {errors.course && <ErrorMessage>{errors.course.message}</ErrorMessage>}
              </CourseField>
              <CourseField>
                <InputLabel htmlFor="rollNumber">Roll No *</InputLabel>
                <InputField id="rollNumber" {...register('rollNumber')} />
                {errors.rollNumber && <ErrorMessage>{errors.rollNumber.message}</ErrorMessage>}
              </CourseField>
              <CourseField>
                <InputLabel htmlFor="percentageInSelectedQualif">Percentage/CGPA * </InputLabel>
                <InputField id="percentageInSelectedQualif" {...register('percentageInSelectedQualif')} />
                {errors.percentageInSelectedQualif && (
                  <ErrorMessage>{errors.percentageInSelectedQualif.message}</ErrorMessage>
                )}
              </CourseField>
              <CourseField>
                <InputLabel htmlFor="passingYearOfSelectedQualf">Passing Year (YYYY) *</InputLabel>
                <Interests id="passingYearOfSelectedQualf" {...register('passingYearOfSelectedQualf')}>
                  {passingYear.map((each) => (
                    <InterestOptions key={each.value} value={each.value}>
                      {each.label}
                    </InterestOptions>
                  ))}
                </Interests>
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
              {interests.map((interest) => (
                <InterestOptions key={interest.value} value={interest.value}>
                  {interest.label}
                </InterestOptions>
              ))}
            </Interests>
            {errors.intrestedIn && <ErrorMessage>{errors.intrestedIn.message}</ErrorMessage>}
          </DetailsContainer>

          <DetailsContainer>
            <InputLabel htmlFor="prevInternshipExp">
              Internship Experience ? (If any,Please give details with technology.) *
            </InputLabel>
            <InputTextArea id="prevInternshipExp" {...register('prevInternshipExp')} />
            {errors.prevInternshipExp && <ErrorMessage>{errors.prevInternshipExp.message}</ErrorMessage>}
          </DetailsContainer>

          <DetailsContainer>
            <InputLabel htmlFor="offerInHand">Any offer in hand ? *</InputLabel>
            <InputTextArea id="offerInHand" {...register('offerInHand')} />
            {errors.offerInHand && <ErrorMessage>{errors.offerInHand.message}</ErrorMessage>}
          </DetailsContainer>
        </RegisterContainer>
        <RegisterButton>Register</RegisterButton>
      </FormContainer>
      <ErrorModal isOpen={modal} error={`Candidate already appeared for exam`} close={() => setModal(false)} />
    </MainContainer>
  )
}

export default RegisterForm
