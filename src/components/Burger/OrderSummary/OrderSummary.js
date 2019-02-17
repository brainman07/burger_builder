import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredKey => {
            return (
                <li key={ingredKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingredKey}</span>: {props.ingredients[ingredKey]}
                </li>);
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>

            <Button btnType="Danger" clicked={props.purchaseCanceled}>
                CANCEL
            </Button>

            <Button btnType="Success" clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Auxiliary>
    );
};

export default orderSummary;