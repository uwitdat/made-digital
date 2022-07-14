import React from 'react'
import BIG_ICON from '../../../public/icons/bigcommerce-icon.svg'
import NICE_ICON from '../../../public/icons/NICE_Icon-Color.svg'
import { FaAlgolia, FaShopify, FaAws, FaAngellist } from 'react-icons/fa';

export const IconsTabOne = () => {
  return (
    <React.Fragment>
      <img src={BIG_ICON} />
      <img src={NICE_ICON} />
      <FaAlgolia />
      <FaAws />
    </React.Fragment>
  )
}

export const IconsTabTwo = () => {
  return (
    <React.Fragment>
      <FaShopify />
      <FaAws />
      <FaAngellist />
      <img src={NICE_ICON} />
    </React.Fragment>
  )
}
