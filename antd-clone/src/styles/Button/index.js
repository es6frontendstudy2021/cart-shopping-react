import styled, { css } from 'styled-components'

const CustomButton = styled.button`
  margin: 10px;
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`

// export const Button = ({ children, ...props }) => {
//   return (
//     <CustomButton {...props}>{children}</CustomButton>
//   )
// }