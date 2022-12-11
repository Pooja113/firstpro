import React, { useContext } from 'react'
import {
  ErrorMessage,
  FormContainer,
  InputContainer,
  InputField,
  InputLabel,
  MainContainer,
  PersonalInfo,
  PersonalInfoHeading,
  RegisterButton,
  RegisterContainer,
} from 'styles/components/LoginForm'
import { useForm } from 'react-hook-form'
import { LoginValidation } from 'utils/LoginValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routes'
import usePost from 'hooks/usePost'
import { LoaderContext } from 'context/loader'

interface ILoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const navigate = useNavigate()
  const { mutateAsync } = usePost()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(LoginValidation),
  })
  // const { mutateAsync } = usePost()
  const { setLoader } = useContext(LoaderContext)

  const onSubmit = async (data: ILoginForm) => {
    setLoader(true)
    try {
      //TODO: turn on loader
      const response = await mutateAsync({
        url: 'admin/login',
        payload: { username: data.email, password: data.password },
      })
      if (response?.success) {
        localStorage.setItem('_token', response?.accessToken)
        navigate(`${ROUTES?.DASHBOARD?.LINK}`, { replace: true })
      }

      if (response) {
        setLoader(false)
      }
    } catch (err) {
      setLoader(false)
    } finally {
      setLoader(false)
    }
  }

  const onError = (errors: any) => {
    return errors
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit, onError)}>
        <RegisterContainer>
          <PersonalInfoHeading>LOGIN</PersonalInfoHeading>
          <PersonalInfo>
            <InputContainer>
              <InputLabel htmlFor="email">Email *</InputLabel>
              <InputField id="email" {...register('email')} />
              {errors.email && <ErrorMessage>{errors.email.message?.toString()}</ErrorMessage>}
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="password">Password *</InputLabel>
              <InputField type="password" id="password" {...register('password')} />
              {errors.password && <ErrorMessage>{errors.password?.message?.toString()}</ErrorMessage>}
            </InputContainer>
          </PersonalInfo>
        </RegisterContainer>
        <RegisterButton>Login</RegisterButton>
      </FormContainer>
    </MainContainer>
  )
}

export default LoginPage
