import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 1,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    addIngredientsHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients[type] +1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        if (this.state.ingredients[type] === 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients[type] -1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (ingredients) => {
        const sum1 = Object.keys(ingredients)
                    .map((igKey) => {
                        return ingredients[igKey]
                    })
                    .reduce((sum, el) => {
                        return sum + el;
                    }, 0);
        this.setState({purchasable: sum1 > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        console.log("continue purchase");
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // disabledInfo = {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal
                    modalClosed={this.purchaseCancelHandler}
                    show={this.state.purchasing}>
                    <OrderSummary
                        purchaseContinue={this.purchaseContinueHandler}
                        totalPrice={this.state.totalPrice}
                        purchaseCancel={this.purchaseCancelHandler}
                        ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={ this.state.ingredients }></Burger>
                <BuildControls
                totalPrice={this.state.totalPrice}
                disabled={disabledInfo}
                removeIngredient={this.removeIngredientsHandler}
                purchasable={this.state.purchasable}
                purchasing={this.purchaseHandler}
                addIngredient={this.addIngredientsHandler}></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;