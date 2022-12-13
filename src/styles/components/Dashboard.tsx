import styled from 'styled-components'

export const MainContainer = styled.div`
  background: #f9f1d2;
  display: flex;
  justify-content: center;
`
export const TableContainer = styled.div`
  width: 95%;
  background-color: #fff;
`
export const StyledTable = styled.table`
  width: 100%;
`
export const TableHead = styled.thead`
  background-color: #fbcd22;
  color: #26429a;
`
export const TableHeader = styled.th`
  padding: 5px;
  font-size: 0.7rem;
  padding: 10px;
  font-size: 0.9rem;

  input[type='text'] {
    padding: 5px;
    border: 1px solid #eee;
    border-radius: 5px;
    width: 92%;
    margin-top: 5px;
  }
`
export const TableData = styled.td`
  font-size: 0.8rem;
`

export const TableHeadingRow = styled.tr``

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #fff7db;
  }
  :hover {
    background-color: #f8eecc;
  }
`

export const TableBodyContainer = styled.tbody``

export const ReattemptButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ReattemptButton = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #2d4195;
  color: #fff;
  cursor: pointer;
  :hover {
    color: #26429a;
    background-color: #fbcd22;
  }

  :disabled {
    background-color: #cccccc;
    color: #979595;
    cursor: auto;
  }
`
export const AwaitingButton = styled.div`
  background-color: red;
  width: 0.7vw;
  width: 0.7vw;
  border-radius: 50%;
`
export const ProcessingButton = styled.div``
export const CompletedButton = styled.div``

export const ViewPhotoBtn = styled.div`
  color: blue;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #f9f1d2;
`
export const DownloadButton = styled.button`
  background-color: #2d4195;
  color: #fff;
  border-radius: 10px;
  margin: 1em 7vw;
  padding: 1em;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
`

export const PaginationContainer = styled.div`
  display: flex;
  padding: 12px;
  justify-content: flex-end;

  button {
    padding: 10px 20px;
    background-color: #2d4195;
    color: #fff;
    border: 1px solid #ccc;
    :hover {
      background-color: #ffd900;
    }
  }
`
export const TableSubContainer = styled.div`
  margin: 10px 40px;
`
