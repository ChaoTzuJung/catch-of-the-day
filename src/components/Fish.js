import React from 'react';
import { formatPrice } from '../helpers';
import PropsType from 'prop-types';
class Fish extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }

    static propsType = {
        //details: PropsType.object,
        details: PropsType.shape({
            image: PropsType.string,
            name: PropsType.string,
            price: PropsType.number,
            desc: PropsType.string,
            status: PropsType.string,
            
        }),
        addToOrder: PropsType.func,
    };

    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available'
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add To Order' : 'Sold Out'}
                </button>
            </li>
        )
    };
};

export default Fish;