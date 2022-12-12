import React, { useContext, useEffect, useState } from 'react'
import {
  Column,
  Table,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  ColumnFiltersState,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getFilteredRowModel,
  FilterFn,
} from '@tanstack/react-table'

import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils'

import {
  MainContainer,
  ReattemptButton,
  ReattemptButtonContainer,
  StyledTable,
  TableBodyContainer,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableHeadingRow,
  TableRow,
  ViewPhotoBtn,
  DownloadContainer,
  DownloadButton,
} from 'styles/components/Dashboard'
import Modal from 'react-modal'
import { ModalTitle } from 'styles/components/ErrorModal'
import usePost from 'hooks/usePost'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useGet from 'hooks/useGet'
import instance from 'services/axiosInstance'
import { LoaderContext } from 'context/loader'

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

  columnHelper.accessor('marks', {
    header: 'Marks',
    cell: ({ row }) => {
      return <div>{row.original.pass ? row.original.marks : '-'}</div>
    },
  }),
  columnHelper.accessor('pass', {
    header: 'Result',
    cell: ({ row }) => {
      return (
        <div>
          {row.original?.pass === 'Fail' ? (
            <div style={{ color: 'red' }}>Fail</div>
          ) : row.original?.pass === 'Pass' ? (
            <div style={{ color: 'green' }}>Pass</div>
          ) : (
            <div style={{ color: 'orange' }}>Not Appeared</div>
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
            token: true,
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
            token: true,
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
      const customStyles = {
        overlay: { zIndex: '9' },
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
          <Modal isOpen={modal} onRequestClose={close} contentLabel="Example Modal" style={customStyles}>
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

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

// const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
//   let dir = 0

//   // Only sort by rank if the column has ranking information
//   if (rowA.columnFiltersMeta[columnId]) {
//     dir = compareItems(rowA.columnFiltersMeta[columnId]?.itemRank!, rowB.columnFiltersMeta[columnId]?.itemRank!)
//   }

//   // Provide an alphanumeric fallback for when the item ranks are equal
//   return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
// }

const DashboardPage = () => {
  const { setLoader } = useContext(LoaderContext)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const [data, setData] = React.useState<Person[]>([])
  const { refetch, data: studentData } = useGet('fetchStudents', 'admin/fetchStudents', true)

  const downloadExcelFile = () => {
    setLoader(true)
    instance({
      url: 'admin/downloadExcel',
      method: 'GET',
      responseType: 'blob',
      headers: {
        token: `Bearer ${localStorage.getItem('_token')}`,
        Accept: 'application/vnd.ms-excel',
      },
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'students.xlsx')
        document.body.appendChild(link)
        link.click()
      })
      .catch((error) => {
        alert(`An error occured while downloading file ${error}`)
      })
      .finally(() => {
        setLoader(false)
      })
  }

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
        status: item.status,
        marks: item.userScore,
        pass: item.result,
        photo: '',
        id: item.id,
      }))
      setData(formattedData)
    }
  }, [studentData])

  // const table = useReactTable({
  //   data,
  //   columns,
  //   state: {
  //     sorting,
  //     globalFilter,
  //   },
  //   onSortingChange: setSorting,
  //   getCoreRowModel: getCoreRowModel(),
  //   getSortedRowModel: getSortedRowModel(),
  //   onGlobalFilterChange: setGlobalFilter,
  //   getFilteredRowModel: getFilteredRowModel(),
  // })

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  return (
    <>
      <DownloadContainer>
        <DownloadButton onClick={downloadExcelFile}>Download</DownloadButton>
      </DownloadContainer>
      <MainContainer>
        <TableContainer>
          <StyledTable>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHeadingRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHeader key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
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
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
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
          </StyledTable>
          <div className="h-4" />
        </TableContainer>
      </MainContainer>
    </>
  )
}

export default DashboardPage

function Filter({ column, table }: { column: Column<any, unknown>; table: Table<any> }) {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = React.useMemo(
    () => (typeof firstValue === 'number' ? [] : Array.from(column.getFacetedUniqueValues().keys()).sort()),
    [column.getFacetedUniqueValues()],
  )

  return typeof firstValue === 'number' ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={(value) => column.setFilterValue((old: [number, number]) => [value, old?.[1]])}
          placeholder={`Min ${column.getFacetedMinMaxValues()?.[0] ? `(${column.getFacetedMinMaxValues()?.[0]})` : ''}`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={(value) => column.setFilterValue((old: [number, number]) => [old?.[0], value])}
          placeholder={`Max ${column.getFacetedMinMaxValues()?.[1] ? `(${column.getFacetedMinMaxValues()?.[1]})` : ''}`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  )
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}
