import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish'
import sampleFishes from "../sample-fishes";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        // 1. 不能直接assign state，所以要先複製一份存在的state
        const fishes = {...this.state.fishes}
        // 2. Add new fish to that fishes variable -> this.state.fishes.push(fish) 錯誤方法
        fishes[`fish${Date.now()}`] = fish;
        // 3. 把fishes物件加到state
        this.setState({ fishes })
    }

    addToOrder = key => {
        // 1. take a copy of state
        const order = {...this.state.order}
        // 2. either add to order, or update the number to order (key是物件的key值：fish1,fish2..)
            //order.fish1 = order.fish1 + 1 || 1;
            order[key] = order[key] + 1 || 1;
        // 3. call setState to update our state object
        this.setState({ order })
    }

    loadSampleFish = fish => {
        this.setState({ fishes: sampleFishes });
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        )}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
            </div>
        )
    };
};

export default App;
