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
        const localStorageRef = localStorage.getItem(params.storeid);
        if(localStorageRef) {
            console.log('Restore it !!');
            console.log(JSON.parse(localStorageRef));
            this.setState({ order: JSON.parse(localStorageRef) })
        }
        this.ref = base.syncState(`${params.storeid}/fishes`, {
            context: this,
            state: "fishes",
        });
    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeid,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
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
                <Order {...this.state} />
                <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
            </div>
        )
    };
};

export default App;
