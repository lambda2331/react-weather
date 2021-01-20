import React from 'react'
import styled from 'styled-components'

const NameWrapper = styled.p`
  margin: 0;
  font-size: 5rem;
  font-weight: 600;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  margin-bottom: 20px;
`

type CityNameProps = {
  name: string
}

const CityName: React.FC<CityNameProps> = ({ name }: CityNameProps) => (<NameWrapper>{name}</NameWrapper>)

export default CityName
