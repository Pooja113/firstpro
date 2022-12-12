import styled from 'styled-components'

export const MainContainer = styled.div`
  background: #f9f1d2;
  padding: 20px;
`

export const InnerContainer = styled.div`
  background: #fff;
  width: 70%;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
  padding: 20px;
`

export const SaveButton = styled.button`
  background-color: #2d4195;
  color: #fff;
  border-radius: 10px;
  padding: 18px 70px;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: #14256c;
  }
`
export const SubmitContainer = styled.div`
  display: flex;
  justify-content: end;
`
