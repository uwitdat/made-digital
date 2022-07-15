import React from 'react'
import BIG_ICON from '../../../public/icons/bigcommerce-icon.svg'
import NICE_ICON from '../../../public/icons/NICE_Icon-Color.svg'
import GORGIAS_ICON from '../../../public/icons/gorgias_logo_white.png';
import ENQ_LOGO from '../../../public/icons/enquirelabs_logo_green.svg';
import { FaAlgolia, FaShopify, FaAngellist } from 'react-icons/fa';

export const IconsTabOne = () => {
  return (
    <React.Fragment>
      <img src={BIG_ICON} />
      <img src={NICE_ICON} />
      <img src={GORGIAS_ICON} style={{ height: '2rem' }} />
      <FaAlgolia />
    </React.Fragment>
  )
}

export const IconsTabTwo = () => {
  return (
    <React.Fragment>
      <FaShopify />

      <FaAngellist />
      <img src={NICE_ICON} />
      <img src={ENQ_LOGO} />
    </React.Fragment>
  )
}
