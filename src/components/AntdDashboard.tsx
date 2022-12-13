import React, { useContext, useEffect, useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import type { InputRef } from 'antd'
import { Button, Input, Space, Table } from 'antd'
import type { ColumnsType, ColumnType } from 'antd/es/table'
import type { FilterConfirmProps } from 'antd/es/table/interface'
import Highlighter from 'react-highlight-words'
import useGet from 'hooks/useGet'
import { LoaderContext } from 'context/loader'
import usePost from 'hooks/usePost'
import {
  ReattemptButton,
  ReattemptButtonContainer,
  ViewPhotoBtn,
  DownloadContainer,
  DownloadButton,
} from 'styles/components/Dashboard'
import Modal from 'react-modal'
import { ModalTitle } from 'styles/components/ErrorModal'
import instance from 'services/axiosInstance'
import { notification } from 'antd'

interface DataType {
  key: string
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

type DataIndex = keyof DataType

const AntdDashboard = () => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef<InputRef>(null)
  const [data, setData] = React.useState<DataType[]>([])
  const [api, contextHolder] = notification.useNotification()
  const { refetch, data: studentData } = useGet('fetchStudents', 'admin/fetchStudents', true)

  useEffect(() => {
    refetch()
  }, [])

  const openNotification = () => {
    api.info({
      message: `Notification`,
      description: <p>Student Deleted Successfully</p>,
      placement: 'topRight',
    })
  }

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

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false })
              setSearchText((selectedKeys as string[])[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close()
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const [modal, setModal] = useState(false)
  const { setLoader } = useContext(LoaderContext)
  const [img, setImg] = useState()

  const { mutateAsync } = usePost()

  const ViewPhoto = async (id: any) => {
    setLoader(true)
    try {
      const response = await mutateAsync({
        url: 'admin/viewPhoto',
        payload: { userId: id },
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

  const RemoveStudent = async (id: any) => {
    setLoader(true)
    try {
      const response = await mutateAsync({
        url: 'admin/removeStudent',
        payload: { userId: id },
        token: true,
      })
      if (response) {
        setLoader(false)
        openNotification()
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
    } catch (error: any) {
      setLoader(false)
      return { error: error?.response?.data?.errorMessage }
    }
  }

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

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      ...getColumnSearchProps('phone'),
    },
    {
      title: 'University',
      dataIndex: 'university',
      key: 'university',
      ...getColumnSearchProps('university'),
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
      ...getColumnSearchProps('course'),
    },
    {
      title: 'Interest',
      dataIndex: 'interest',
      key: 'interest',
      ...getColumnSearchProps('interest'),
    },
    {
      title: 'Marks',
      dataIndex: 'marks',
      key: 'marks',
      ...getColumnSearchProps('marks'),
    },
    {
      title: 'Result',
      dataIndex: 'pass',
      key: 'pass',
      ...getColumnSearchProps('pass'),
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (id: any) => {
        return (
          <ReattemptButtonContainer>
            <ReattemptButton
              onClick={() => {
                RemoveStudent(id)
              }}
            >
              Remove Student
            </ReattemptButton>
          </ReattemptButtonContainer>
        )
      },
    },
    {
      title: 'Photo',
      dataIndex: 'id',
      key: 'photo',
      render: (id: any) => {
        return (
          <>
            <ReattemptButtonContainer>
              <ViewPhotoBtn
                onClick={() => {
                  ViewPhoto(id)
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
          </>
        )
      },
    },
  ]

  return (
    <>
      {contextHolder}
      <DownloadContainer>
        <DownloadButton onClick={downloadExcelFile}>Download Excel Sheet</DownloadButton>
      </DownloadContainer>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default AntdDashboard
