import React, { useState, useCallback } from 'react'
import CustomModal from '../../components/Modal'
import Button from '../../components/Button'

const ModalContainer = () => {
  const [visible, setVisible] = useState(false)
  const onVisible = useCallback(
    () => {
      setVisible(!visible)
    }, [] 
  )
  return (
    <div>
      <Button onClick={onVisible}>open modal</Button>
      <CustomModal 
      visible={visible} 
      onClose={() => {setVisible(false)}} 
      onOk={() => console.log('ㅇㅋ')}
      title={'모달 타이틀'}
      >
        내용입니다.
      </CustomModal>
    </div>
  )
}

export default ModalContainer
