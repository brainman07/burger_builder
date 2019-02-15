import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngred = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient
                    key={ingKey + i}
                    type={ingKey}
                />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    if (transformedIngred.length === 0) {
        transformedIngred = <p>Please start adding ingredients:</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngred}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;