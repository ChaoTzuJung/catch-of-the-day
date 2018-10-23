import React from 'react';
import { formatPrice } from '../helpers';
class Order extends React.Component {
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key]; // 清單內有哪幾種魚
            const count = this.props.order[key]; // 清單每種魚的數量
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                // 每次都累加價格
                return prevTotal + (count * fish.price)
            }
            return prevTotal
        }, 0)
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul>
                    {orderIds.map(key => <li>{key}</li>)}
                </ul>
                
                <div className="total">
                    Total: 
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    };
};

export default Order;