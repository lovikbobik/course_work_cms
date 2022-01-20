import React from "react";
import './Main.css'
import {Button} from "@mui/material";
import ProductBox from "../Product/ProductBox";


function Tab({name}) {
    return (
        <div className={'tab'}>
            <Button>{name}</Button>
        </div>

    );
}

export default Tab;