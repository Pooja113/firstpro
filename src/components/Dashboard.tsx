import React from 'react'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

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
    status: 'processing',
    action: true,
  },
  {
    name: 'cooper',
    email: 'tanner@gmail.com',
    phone: '2434',
    university: 'college name',
    course: 'B.tech',
    interest: 'react',
    status: 'processing',
    action: false,
  },
  {
    name: 'rasher',
    email: 'tanner@gmail.com',
    phone: '2434',
    university: 'college name',
    course: 'B.tech',
    interest: 'react',
    status: 'processing',
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
            <div
              style={{
                backgroundColor: 'red',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            ></div>
          ) : (
            ''
          )}
          {row.original?.status === 'processing' ? (
            <div
              style={{
                backgroundColor: '#ebba34',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            ></div>
          ) : (
            ''
          )}
          {row.original?.status === 'completed' ? (
            <div
              style={{
                backgroundColor: 'green',
                height: '0.7vw',
                width: '0.7vw',
                borderRadius: '50%',
              }}
            ></div>
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
      return <div>{row.original?.action ? <button>reattempt</button> : ''}</div>
    },
  }),
]

const DashboardPage = () => {
  const [data, setData] = React.useState<Person[]>([])
  setData(defaultData)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  )
}

export default DashboardPage
