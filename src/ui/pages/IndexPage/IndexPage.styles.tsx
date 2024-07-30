import { styled } from '@linaria/react'
import { h2 } from '@sds/tokens-typography'

import CrossImg from './assets/red-cross.png'

export const Header = styled.h2`
  ${h2}
`

const getLocalImageBackgroundImage = () => `url(${CrossImg.src})`

export const LocalImage = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  background-image: ${getLocalImageBackgroundImage};
  background-size: contain;
`

export const GlobalImage = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  background-image: url('/red-cross.png');
  background-size: contain;
`
