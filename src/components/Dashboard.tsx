import * as React from 'react'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
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
} from 'styles/components/Dashboard'

type Person = {
  name: string
  email: string
  phone: string
  university: string
  course: string
  interest: string
  status: string
  action: boolean
}

const defaultData: Person[] = [
  {
    name: 'tanner',
    email: 'tanner@gmail.com',
    phone: '2434',
    university: 'college name',
    course: 'B.tech',
    interest: 'react',
    status: 'awaiting',
    action: true,
  },
  {
    name: 'cooper',
    email: 'tanner@gmail.com',
    phone: '2434',
    university: 'college name',
    course: 'B.tech',
    interest: 'react',
    status: 'completed',
    action: false,
  },
  {
    name: 'rasher',
    email: 'tanner@gmail.com',
    phone: '2434',
    university: 'college name',
    course: 'B.tech',
    interest: 'react',
    status: 'completed',
    action: true,
  },
]

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
          {row.original?.status === 'awaiting' ? (
            <AwaitingButton
              style={{
                backgroundColor: 'red',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            ></AwaitingButton>
          ) : (
            ''
          )}
          {row.original?.status === 'processing' ? (
            <ProcessingButton
              style={{
                backgroundColor: '#ebba34',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            ></ProcessingButton>
          ) : (
            ''
          )}
          {row.original?.status === 'completed' ? (
            <CompletedButton
              style={{
                backgroundColor: 'green',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            ></CompletedButton>
          ) : (
            ''
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
  const [data] = React.useState(() => [...defaultData])
  //   const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <MainContainer>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHeadingRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeader key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
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
