import React, { useContext, useEffect, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import {
  MainContainer,
  ReattemptButton,
  ReattemptButtonContainer,
  Table,
  TableBodyContainer,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableHeadingRow,
  TableRow,
  AwaitingButton,
  ProcessingButton,
  CompletedButton,
  ViewPhotoBtn,
} from 'styles/components/Dashboard'
import useGet from 'hooks/useGet'
import Modal from 'react-modal'
import { ModalTitle } from '../styles/components/ErrorModal'
import usePost from 'hooks/usePost'
import { LoaderContext } from 'context/loader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Person = {
  name: string
  email: string
  phone: string
  university: string
  course: string
  interest: string
  status: string
  marks: string | number
  pass: string
  action: boolean
  photo: any
  id: any
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('email', {
    header: 'Email',
  }),
  columnHelper.accessor('phone', {
    header: 'Phone',
  }),
  columnHelper.accessor('university', {
    header: 'University',
  }),
  columnHelper.accessor('course', {
    header: 'Course',
  }),
  columnHelper.accessor('interest', {
    header: 'Interest',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div>
          {row.original?.status === 'awaiting' && (
            <AwaitingButton
              style={{
                backgroundColor: 'red',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            />
          )}
          {row.original?.status === 'processing' && (
            <ProcessingButton
              style={{
                backgroundColor: '#ebba34',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            />
          )}
          {row.original?.status === 'completed' && (
            <CompletedButton
              style={{
                backgroundColor: 'green',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            />
          )}
        </div>
      )
    },
  }),
  columnHelper.accessor('marks', {
    header: 'Marks',
    cell: ({ row }) => {
      return <div>{row.original.marks}</div>
    },
  }),
  columnHelper.accessor('pass', {
    header: 'Pass',
    cell: ({ row }) => {
      return (
        <div>
          {row.original?.marks < 50 ? (
            <div style={{ color: 'red' }}>Fail</div>
          ) : (
            <div
              style={{
                color: 'green',
              }}
            >
              Pass
            </div>
          )}
        </div>
      )
    },
  }),
  columnHelper.accessor('action', {
    header: 'Action',
    cell: ({ row }) => {
      const { setLoader } = useContext(LoaderContext)
      const notify = () => toast('Student Deleted Successfully!')

      const { mutateAsync } = usePost()

      const RemoveStudent = async () => {
        setLoader(true)
        try {
          const response = await mutateAsync({
            url: 'admin/removeStudent',
            payload: { userId: row.original.id },
          })
          if (response) {
            setLoader(false)
            notify()
            setTimeout(() => {
              window.location.reload()
            }, 2000)
          }
        } catch (error: any) {
          setLoader(false)
          return { error: error?.response?.data?.errorMessage }
        }
      }

      return (
        <ReattemptButtonContainer>
          <ReattemptButton onClick={() => RemoveStudent()} disabled={row.original?.action}>
            Remove Student
          </ReattemptButton>
          <ToastContainer />
        </ReattemptButtonContainer>
      )
    },
  }),
  columnHelper.accessor('photo', {
    header: 'Photo',
    cell: ({ row }) => {
      const [modal, setModal] = useState(false)
      const { setLoader } = useContext(LoaderContext)
      const [img, setImg] = useState()

      const { mutateAsync } = usePost()

      const ViewPhoto = async () => {
        setLoader(true)
        try {
          const response = await mutateAsync({
            url: 'admin/viewPhoto',
            payload: { userId: row.original.id },
          })
          if (response) {
            setLoader(false)
            setImg(response.data)
            setModal(true)
          }
        } catch (error: any) {
          setLoader(false)
          return { error: error?.response?.data?.errorMessage }
        }
      }

      return (
        <ReattemptButtonContainer>
          <ViewPhotoBtn
            onClick={() => {
              ViewPhoto()
            }}
          >
            View Photo
          </ViewPhotoBtn>
          <Modal isOpen={modal} onRequestClose={close} contentLabel="Example Modal">
            <button onClick={() => setModal(false)}>close</button>
            <ModalTitle>
              <img src={img} />
            </ModalTitle>
          </Modal>
        </ReattemptButtonContainer>
      )
    },
  }),
]

const DashboardPage = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const [data, setData] = React.useState<Person[]>([])
  const { refetch, data: studentData } = useGet('fetchStudents', 'admin/fetchStudents', true)

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (studentData?.data?.length && !data.length) {
      const formattedData = studentData?.data?.map((item: any) => ({
        name: item.name,
        email: item.email,
        phone: item.phoneNumber,
        interest: item.intrestedIn,
        course: item.course,
        university: item.collegeName,
        status: 'processing',
        marks: (18 / 30) * 100,
        pass: '',
        photo: '',
        id: item.id,
      }))
      setData(formattedData)
    }
  }, [studentData])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <MainContainer>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHeadingRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeader key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableHeader>
                ))}
              </TableHeadingRow>
            ))}
          </TableHead>
          <TableBodyContainer>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableData key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableData>
                ))}
              </TableRow>
            ))}
          </TableBodyContainer>
        </Table>
        <div className="h-4" />
      </TableContainer>
    </MainContainer>
  )
}

export default DashboardPage
