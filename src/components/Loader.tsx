import React from 'react'
import { Spin } from 'antd'
import { LoaderContainer } from 'styles/components/Loader'

const Loader = () => (
  <LoaderContainer>
    <Spin tip="Loading" size="large" />
  </LoaderContainer>
)

export default Loader
