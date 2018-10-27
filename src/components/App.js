import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish'
import sampleFishes from "../sample-fishes";
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {
        const { params } = this.props.match;
        // ref 是 firebase 的 api
        // sync name of store
        this.ref = base.syncState(`${params.storeid}/fishes`, {
            context: this,
            state: "fishes",
        });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const fishes = {...this.state.fishes}
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes })
    }

    addToOrder = key => {
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1;
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
                { /* <Order fishes={this.state.fishes} order={this.state.order} /> */ }
                <Order {...this.state} />
                <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
            </div>
        )
    };
};

export default App;
