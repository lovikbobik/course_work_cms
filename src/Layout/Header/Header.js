import './Header.css';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logo from './logo.jpeg';
import {NavLink} from "react-router-dom";
import React from "react";

function Header() {
    return (
        <div className={'header__container'}>
            <div className={'header__title'}>
                <h2>WWW.DVFU.RU</h2>
            </div>

            <div className={'header__menu'}>
                <div className={'header__logo-fefu'}>
                    <img src={logo} alt="logo" width="100" height="80"/>
                </div>
                <div className={'header__info'}>
                    <p className={'blue__text'}>Контакты</p>
                    <p className={'blue__text'}>Помощь</p>
                    <NavLink to={'/info'} className={'blue__text'}>
                        <p>Наш адрес</p>
                    </NavLink>
                    <p className={'blue__text'}>Качество</p>

                </div>
                <div className={'header__profile'}>
                    <NavLink to={'/basket'} className={'sidebar__text-decoration'}>
                        <LocalGroceryStoreOutlinedIcon className={'header__profile-data'}/>
                    </NavLink>
                    <p className={'header__profile-data'}>User</p>
                    <SettingsOutlinedIcon className={'header__profile-data'}/>
                </div>
            </div>
        </div>

    )
        ;
}

export default Header;