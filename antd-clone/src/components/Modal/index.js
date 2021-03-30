import styled, { css } from 'styled-components'
import Button from '../Button'
import { Close } from '@styled-icons/evaicons-solid/Close'


const ModalLayout = styled.div`
  display: ${(props) => (props.visible ? 'block;' : 'none;')}
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
`

const Title = styled.h1`
  margin: 0;
  color: rgba(0,0,0,.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  word-wrap: break-word;
`


const ModalMask = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1
`

const ModalContainer = styled.section`
  position: relative;
  z-index:100;
  > div {
    display:inline-block;
    width:auto;
    background-color: #fff;
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .ant-modal-header{
    padding: 16px 24px;
    color: rgba(0,0,0,.85);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    position:relative;
  }
  .modal_body{
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
    min-width:320px;
    background-color:#fff;
  }
  .ant-modal-footer{
    padding: 10px 16px;
    text-align: right;
    background: 0 0;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px;
  }
  .modal-close-btn {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 10;
    padding: 0;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    background: 0 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color .3s;
    > span {
      width:30px;
      display:inline-block;
    }
  }
`

const Modal = (props) => {
  const {children, visible, onClose, onOk, title } = props

  return (
      <ModalLayout visible={visible}>
      <ModalMask></ModalMask>
      <ModalContainer>
        <div>
          <div className="ant-modal-header">
            <Title>{title}</Title>
            <button className="modal-close-btn" onClick={onClose}>
              <span><Close></Close></span>
            </button>
          </div>
          <div className="modal_body">
            {children}
          </div>
          <div className="ant-modal-footer">
            <Button onClick={onClose}>cancel</Button>
            <Button primary onClick={onOk}>OK</Button>
          </div>
        </div>
      </ModalContainer>      
    </ModalLayout> 
  )
}

export default Modal