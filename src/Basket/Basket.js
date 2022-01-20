import React from "react";
import './Basket.css'
import {Button} from "@mui/material";
import BasketItem from "./BasketItem";

function Basket({products}) {
    return (
        <div className={'basket'}>
            <div>
                <div className={'basket__header'}>
                    <h1>У вас отличный вкус!</h1>
                </div>

                <div className={'basket__body'}>
                    <BasketItem/>
                    <BasketItem/>
                    <BasketItem/>
                </div>

                <div className={'basket__footer'}>
                    <Button className={'basket__button-buy'}>Заказать</Button>
                </div>
            </div>

        </div>
    );
}

export default Basket;