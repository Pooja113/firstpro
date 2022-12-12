import styled from 'styled-components'

export const MainContainer = styled.div`
  background: #f9f1d2;
  width: 100vw;
`
export const TableContainer = styled.div`
  width: 100%;
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
`
export const TableData = styled.td`
  font-size: 0.6rem;
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
  font-size: 0.5rem;
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
  justify-content: flex-end;
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
