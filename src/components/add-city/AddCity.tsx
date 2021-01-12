import React, {ChangeEvent, useState} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add'
import {addCity} from "../../store/cities";
import {useModal} from "../../hooks/useModal";
import {useDispatch} from "react-redux";
import StyledButton from "../common/StyledButton";

const AddCity: React.FC = () => {
  const { isOpen, closeModal, openModal } = useModal()
  const [cityName, setCityName] = useState('')
  const dispatch = useDispatch()

  const handleCityNameUpdate = (event: ChangeEvent) => setCityName((event.target as HTMLInputElement).value)
  const saveCity = () => {
    dispatch(addCity(cityName))
    setCityName('')
    closeModal()
  }



  return (
      <div>
        <StyledButton size="small" onClick={openModal}>
          <AddIcon />
        </StyledButton>
        <Dialog open={isOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
          <DialogContent>
            <DialogContentText>
              Enter city name to get weather information
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                onChange={handleCityNameUpdate}
                id="name"
                label="City name"
                fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={saveCity} color="primary">
              Get Weather
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default AddCity