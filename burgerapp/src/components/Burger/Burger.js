import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngrediets';
const burger = (props) => {
    let transformedIngredients=Object.keys(props.ingredients)
    .map(igKey=>{
        return[...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length===0)
    {
        transformedIngredients=<div>Please add</div>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>);
};
export default burger;