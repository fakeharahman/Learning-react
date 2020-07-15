import React from 'react'
import classes from './PizzaImage.module.css'
import PizzaImg from '../../assets/pizza.jpg'

const pizzaImage = props => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImg} className={classes.PizzaImg} />
    </div>
)

export default pizzaImage