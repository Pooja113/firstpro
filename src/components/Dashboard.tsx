import React, { useEffect } from 'react'
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
  DownloadButton,
  DownloadContainer,
} from 'styles/components/Dashboard'
import useGet from 'hooks/useGet'

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
      return (
        <ReattemptButtonContainer>
          <ReattemptButton disabled={!row.original?.action}>Re-Attempt</ReattemptButton>
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
    <>
      <DownloadContainer>
        <DownloadButton
          onClick={() => {
            window.location.pathname = '/admin/downloadexcel'
          }}
        >
          Download
        </DownloadButton>
      </DownloadContainer>
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
    </>
  )
}

export default DashboardPage
