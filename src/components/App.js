import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish'
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

    loadSampleFish = fish => {
        alert('Sample Fish')
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
            </div>
        )
    };
};

export default App;
