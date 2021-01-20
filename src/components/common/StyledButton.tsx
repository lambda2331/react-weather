import React from 'react'
import styled from 'styled-components'
import { Fab, Size } from '@material-ui/core'

const ButtonWrapper = styled(Fab)`
  background-image: linear-gradient(240deg, rgba(0, 0, 200, 0.2), rgba(0, 0, 200, 0));
  color: white !important;
    
  :hover {
      background-image: linear-gradient(240deg, rgba(0, 0, 200, 0.3), rgba(0, 0, 200, 0.1));
      background-color: transparent;
  }
`

type StyledButtonProps = {
  children: React.ReactChild,
  size: Size,
  disabled: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children, size, disabled = false, onClick
}: StyledButtonProps) => (
  <ButtonWrapper size={size} onClick={onClick} disabled={disabled}>
    { children }
  </ButtonWrapper>
)

export default StyledButton
