import './Header.css';
import floweradm from '../../assets/floweradm.png';
import flower from '../../assets/flower-rosa.png';
import listadmin from "../../assets/listadm.png";
import list from "../../assets/list.png";
import useradmin from "../../assets/useradm.png";
import user from "../../assets/user.png";
import { useMemo } from 'react';
const Header = ({isAdm}) => {
    const icons = useMemo( () => (isAdm ?{
        flower: floweradm,
        list: listadmin,
        user: useradmin,
    } : {
        flower, list, user
    }), [isAdm])
    return (
    <div className="topnavbar">
        <div className="topnavbar-left">
          <img src={icons.flower} alt="logo" />
        </div>
        <div className="topnavbar-right">
          <img className="useradm" src={icons.user} alt="useradm" />
          <img className="listadm" src={icons.list} alt="listadm" />
        </div>
      </div>
    )
};

export default Header;