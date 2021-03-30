import styled, { css } from 'styled-components'

const type = {
  'primary': 'primary',
  'dashed': 'dashed',
  'text': 'text',
  'link': 'link',
}
// console.log(type['primary'])

const CustomButton = styled.button`
  margin: 10px;
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background: none;
  border-width: 1px;
  border-color: #d9d9d9;
  border-style: solid;
  ${(props) => {
    if(props.shape === 'circle') {
      return css`border-radius: 100%;`
    }
    if(props.shape === 'round') {
      return css`border-radius: 100px;`
    }
  }}

  /*${(props) => {
    props.shape === 'circle' ? css`border-radius: 100%;` :
      props.shape === 'round' ? css`border-radius: 100px;` : css`border-radius: 0;`
         
  }}*/
  
  ${(props) => {
    if(props.size === 'large') {
      return css`
        font-size: 1.2em;
      `
    }
    if(props.size === 'small') {
      return css`
        font-size: 0.6em;
      `
    }
  }}
  ${(props) => {
    if (props.type === 'dashed') {
      return css`border-style: dashed;`
    }
    if (props.type === 'text') {
      return css`
        border-style: none;
        background: none;
      `
    }
    if (props.type === 'link') {
      return css`
        color: #1890ff;
        border: none;
      `
    }
  }}
  ${(props) => {
    console.log(props)
    if (props.primary) {
      return css`
        color: #fff;
        background: #1890ff;
        border-color: #1890ff;
      `
    }
    if (props.danger) {
      return css`
        color: #ff4d4f;
        border-color: #ff4d4f;
      `
    }
  }
  }
`

export const Button = ({ children,  ...props}) => {
  
  return (
    <CustomButton {...props}>
      <span>{children}</span>
    </CustomButton>
  )
}

export default Button