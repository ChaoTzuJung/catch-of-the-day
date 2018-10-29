import React from 'react';
import { formatPrice } from '../helpers';
class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key]; // 清單內有哪幾種魚
        const count = this.props.order[key]; // 清單每種魚的數量
        const isAvailable = fish && fish.status === 'available'; //當你用alan登入menu時，可以以存資料在firebase跟localStorage，但再次登入，出現status不存在，所以要確保fish的key存在
        if(!fish) return null; // 多做這行確認是因為，當order沒fish要先給一個空的畫面，確認fish load玩才繼續顯示，若不給這行，會列出每個order都是sorry no fish，當firebase loading完fish，要會再度re-render畫面
        if(!isAvailable) {
            return (
                <li key={key}>
                    Sorry {fish ? fish.name : 'fish'} is no longer available
                </li>
            );
        }
        return (
            <li key={key}>
                {count} 條 {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        );
    }

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
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
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