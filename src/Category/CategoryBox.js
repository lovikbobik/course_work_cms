import React from "react";
import './CategoryBox.css'
function CategoryBox({image, category}) {
    return (

        <div className={'categoryBox_content'}>
            <div className={'categoryBox__image'}>
                <img className={'categoryBox__img-size'} src={image} alt={'image not found'}/>
            </div>

            <div className={'categoryBox__name'}>
                <p>{category}</p>
            </div>
        </div>

    );
}

export default CategoryBox;