import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import './Layout.css'

function Layout({children}) {
    return (
        <>
            <Header/>
            <div className={'layout'}>
                <div>
                    <Sidebar/>
                </div>
                {children}
            </div>
        </>
    );
}

export default Layout;