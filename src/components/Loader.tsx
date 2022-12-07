import React from 'react'
import { Spin } from 'antd'
import { LoaderContainer } from 'styles/components/Loader'

const Loader = () => {
  return (
    <LoaderContainer>
      <Spin />
    </LoaderContainer>
  )
}

export default Loader
