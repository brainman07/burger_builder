import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = ({ ingredients }) => {
    let transformedIngred = Object.keys(ingredients)
        .map(ingKey => {
            // Array(x) => un array cu x elemente
            return [...Array(ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient
                    key={ingKey + i}
                    type={ingKey}
                />
            });
        })
        // => [[<BurgerIngredient key="salad0"/>], [<BurgerIngredient key="bacon0"/>], [...]]
        // array of arrays => concat all sub-arrays:
        .reduce((arr, el) => {
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