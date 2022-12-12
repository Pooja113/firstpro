import styled from 'styled-components'

export const MainContainer = styled.div`
  background: #f9f1d2;
  padding: 20px;
  min-height: 78vh;
  align-items: center;
  display: flex;
`

export const RegisterContainer = styled.div`
  padding: 20px;
`

export const PersonalInfo = styled.div`
  width: 60%;
  margin: 0 auto;
  justify-content: center;
`

export const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: #dc3545;
`

export const EducationDetails = styled.div`
  padding-bottom: 40px;
`

export const PersonalInfoHeading = styled.h1`
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  width: 35%;
  margin: 20px auto;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 35%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 40px 10px 0px;
`

export const InputField = styled.input`
  padding: 10px;
  border: 2px solid #eee;
  border-radius: 10px;
`

export const InputTextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #eee;
  border-radius: 10px;
  max-height: 6vw;
  max-width: 65vw;
  min-width: 60vw;
  min-height: 6vw;
`

export const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #555454;
  padding-bottom: 10px;
`

export const InputSubLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  padding-right: 10px;
  cursor: pointer;
`

export const GenderContainer = styled.div`
  display: flex;
  padding-top: 5px;
  width: 45%;
  align-items: center;
  color: #555454;
`

export const Radiobuttonfield = styled.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0px 10px 0px 0px;
  cursor: pointer;
`

export const RegisterButton = styled.button`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 15px;
  width: 20%;
  margin: auto;
  border-radius: 10px;
  border: none;
  background-color: #2d4195;
  color: #fff;
  cursor: pointer;
  :hover {
    color: #000000;
    background-color: #ffe100;
  }
`

export const CourseContainer = styled.div`
  display: flex;
`

export const CourseField = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 10px 10px 0px 0px;
`

export const Interests = styled.select`
  padding: 10px;
  border: 2px solid #eee;
  border-radius: 10px;
`

export const InterestOptions = styled.option``
