import { ListItem } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Delete } from '@material-ui/icons'

type SelectCityItemProps = {
  city: string,
  removeCallback: (city: string) => void,
  selectCallback: (city: string) => void
}

const ItemWrapper = styled(ListItem)`
  min-width: 150px;
  justify-content: space-between !important;
`

const SelectCityItem: React.FC<SelectCityItemProps> = ({ city, removeCallback, selectCallback }: SelectCityItemProps) => {
  const handleRemoveCallback = (event: unknown) => {
    (event as Event).stopPropagation()
    removeCallback(city)
  }

  return (
    <ItemWrapper button key={city} onClick={() => selectCallback(city)}>
      {city}
      <Delete onClick={handleRemoveCallback} color="secondary" />
    </ItemWrapper>
  )
}

export default SelectCityItem
