import React, { useEffect } from 'react'
import { List, Popover } from '@material-ui/core'
import { ArrowDownward } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getCities } from '../../store/cities/selectors'
import { Cities } from '../../types/common'
import StyledButton from '../common/StyledButton'
import { removeCity, selectCity } from '../../store/cities'
import SelectCityItem from './SelectCityItem'

const SelectCity: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const availableCities: Cities = useSelector(getCities)
  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    handleClose()
  }, [availableCities])

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleSelectCity = (city: string) => {
    dispatch(selectCity(city))
  }

  const handleRemoveCity = (city: string) => {
    dispatch(removeCity(city))
  }

  return (
    <div>
      <StyledButton
        size="small"
        disabled={availableCities.length === 0}
        onClick={handleClick}
      >
        <ArrowDownward />
      </StyledButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <List component="nav">
          {availableCities.map((city) => (
            <SelectCityItem key={city} city={city} removeCallback={handleRemoveCity} selectCallback={handleSelectCity} />
          ))}
        </List>
      </Popover>
    </div>
  )
}

export default SelectCity
