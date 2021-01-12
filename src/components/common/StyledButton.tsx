import React, {ReactNode} from "react";
import styled from "styled-components";
import {Fab, Size} from "@material-ui/core";

const ButtonWrapper = styled(Fab)`
  background-image: linear-gradient(240deg, rgba(0, 0, 200, 0.2), rgba(0, 0, 200, 0));
  color: white !important;
    
  :hover {
      background-image: linear-gradient(240deg, rgba(0, 0, 200, 0.3), rgba(0, 0, 200, 0.1));
      background-color: transparent;
  }
`

type StyledButtonProps = {
  children: ReactNode,
  size: Size,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, size, onClick }) => {
  return <ButtonWrapper size={size} onClick={onClick}>
    { children }
  </ButtonWrapper>
}

export default StyledButton