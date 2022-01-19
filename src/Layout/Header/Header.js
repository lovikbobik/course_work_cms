import './Header.css';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Header() {
    return (
        <div className={'header__container'}>
            <div className={'header__title'}>
                <h2>WWW.DVFU.RU</h2>
            </div>

            <div className={'header__menu'}>
                <div className={'header__logo-fefu'}>
                    <p>logo</p>
                </div>
                <div className={'header__info'}>
                    <p>Работаем 9:00-22:00</p>
                    <p>Контакты</p>
                    <p>Помощь</p>
                    <p>Наш адресс</p>

                </div>
                <div className={'header__profile'}>
                    <p><LocalGroceryStoreOutlinedIcon/></p>
                    <p>User</p>
                    <p><SettingsOutlinedIcon/></p>
                </div>
            </div>


        </div>


    )
        ;
}

export default Header;