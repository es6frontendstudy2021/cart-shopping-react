import React, { useState } from 'react'
import { Button } from '../../components/Button'

const ButtonContainer = () => {
  const [size, setSize] = useState('default')

  const onChangeSize = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.value)
    setSize(e.currentTarget.value)
  }

  return (
    <div>
      <h1>Button</h1>
      <div>
        <h2>change size</h2>
        <Button value="large" onClick={(e) => onChangeSize(e)}>large</Button>
        <Button value="default" onClick={(e) => onChangeSize(e)}>default</Button>
        <Button value="small" onClick={(e) => onChangeSize(e)}>small</Button>
      </div>
      <Button primary size={size}>primary</Button>
      <Button type='dashed' size={size}>dashed</Button>
      <Button type='text' size={size}>text</Button>
      <Button type='link' size={size}>link</Button>
      <Button danger size={size}>danger</Button>
      <Button primary shape='circle' size={size}>primary</Button>
      <Button primary shape='round' size={size}>primary</Button>
    </div>
  )
}

export default ButtonContainer
