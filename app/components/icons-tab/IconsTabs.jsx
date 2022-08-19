import BIG_ICON from '../../../public/icons/bigcommerce-icon.svg';
import NICE_ICON from '../../../public/icons/NICE_Icon-Color.svg';
import GORGIAS_ICON from '../../../public/icons/gorgias_logo_white.png';
import ENQ_LOGO from '../../../public/icons/enquirelabs_logo_green.svg';
import ATRIVIZT_ICON from '../../../public/icons/Artivizt.svg';
// import PLOBAL_ICON from '../../../public/icons/Plobal.svg';
import RECHARGE_ICON from '../../../public/icons/Recharge.svg';
import { FaAlgolia, FaShopify } from 'react-icons/fa';

export const IconsTabOne = () => {
  return (
    <React.Fragment>
      <FaShopify />
      <img src={BIG_ICON} alt={BIG_ICON} className="filter" />
      <FaAlgolia />
      <img src={NICE_ICON} alt={NICE_ICON} className="filter" />
    </React.Fragment>
  );
};

export const IconsTabTwo = () => {
  return (
    <React.Fragment>
      <img src={GORGIAS_ICON} id="gorgias-icon" alt={GORGIAS_ICON} />
      <img src={ATRIVIZT_ICON} alt={ATRIVIZT_ICON} id="icon-xl" />
      <img src={ENQ_LOGO} alt={ENQ_LOGO} className="filter" />
      <img
        src={RECHARGE_ICON}
        alt={RECHARGE_ICON}
        className="filter"
        id="icon-xl"
      />
    </React.Fragment>
  );
};

// export const IconsTabThree = () => {
//   return (
//     <React.Fragment>
//       <img src={PLOBAL_ICON} alt={PLOBAL_ICON} id="icon-xl" />
//     </React.Fragment>
//   );
// };
