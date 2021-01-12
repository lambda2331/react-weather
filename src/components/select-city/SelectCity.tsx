import React from "react";
import {List, ListItem, Popover} from "@material-ui/core";
import {ArrowDownward} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {getCities} from "../../store/cities/selectors";
import {Cities} from "../../types/common";
import StyledButton from "../common/StyledButton";

const SelectCity: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const availableCities: Cities = useSelector(getCities)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const handleSelectCity = (city: string) => {
    console.log(city)
    handleClose()
  }

  return <div>
    <StyledButton
        size='small'
        onClick={handleClick}
    >
      <ArrowDownward />
    </StyledButton>
    <Popover id={id}
             open={open}
             anchorEl={anchorEl}
             onClose={handleClose}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center',
             }}
             transformOrigin={{
               vertical: 'top',
               horizontal: 'center',
             }}>
      <List component="nav">
        { availableCities.map(city =>
            <ListItem button key={city} onClick={() => handleSelectCity(city)}>{city}</ListItem>
        ) }
      </List>
    </Popover>
  </div>
}

export default SelectCity