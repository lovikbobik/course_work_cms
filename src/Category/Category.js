import React from "react";
import './Category.css'
import CategoryBox from "./CategoryBox";
import {NavLink} from "react-router-dom";
function Category() {
    return (
        <div className={'category'}>

            <div className={'category-row'}>
                <NavLink to={'product'} className={'sidebar__text-decoration'}>
                    <CategoryBox image={'https://s82079.cdn.ngenix.net/330x0/srrljqwe3621gturux3vfaraibcy'} category={'Холодные'}/>
                </NavLink>
                <CategoryBox image={'https://s82079.cdn.ngenix.net/330x0/baFNcGZXBkJDuuVv77zwpQWg.png'} category={'Кофе и чай'}/>
                <CategoryBox image={'https://s82079.cdn.ngenix.net/330x0/UYGZQWQHiqf75JWdDBZn68Bq.png'} category={'Милкшейки'}/>
            </div>
        </div>
    );
}

export default Category;