import React from 'react'
import BIG_ICON from '../../../public/icons/bigcommerce-icon.svg'
import NICE_ICON from '../../../public/icons/NICE_Icon-Color.svg'
import GORGIAS_ICON from '../../../public/icons/gorgias_logo_white.png';
import ENQ_LOGO from '../../../public/icons/enquirelabs_logo_green.svg';
import AIRCALL_ICON from '../../../public/icons/Aircall.svg';
import ATRIVIZT_ICON from '../../../public/icons/Artivizt.svg';
import PLOBAL_ICON from '../../../public/icons/Plobal.svg';
import REBUY_ICON from '../../../public/icons/Rebuy.svg';
import RECHARGE_ICON from '../../../public/icons/Recharge.svg';
import { FaAlgolia, FaShopify, FaAngellist } from 'react-icons/fa';

export const IconsTabOne = () => {
  return (
    <React.Fragment>
      <img src={BIG_ICON} alt={BIG_ICON} className='filter' />
      <img src={NICE_ICON} alt={NICE_ICON} className='filter' />
      <img src={GORGIAS_ICON} id='gorgias-icon' alt={GORGIAS_ICON} />
      <FaAlgolia />
    </React.Fragment>
  )
}

export const IconsTabTwo = () => {
  return (
    <React.Fragment>
      <FaShopify />

      <FaAngellist />

      <img src={ENQ_LOGO} alt={ENQ_LOGO} className='filter' />
    </React.Fragment>
  )
}

export const IconsTabThree = () => {
  return (
    <React.Fragment>

      <img src={ATRIVIZT_ICON} alt={ATRIVIZT_ICON} id='icon-xl' />
      <img src={PLOBAL_ICON} alt={PLOBAL_ICON} id='icon-xl' />
      <img src={RECHARGE_ICON} alt={RECHARGE_ICON} className='filter' id='icon-xl' />
    </React.Fragment>
  )
}
