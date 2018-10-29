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
        const localStorageRef = localStorage.getItem(params.storeid);
        // localStorage是立即性的
        if(localStorageRef) {
            //  當JSON是{ "fish1": 7 } ， key是字串
            console.log('Restore it !!');
            console.log(JSON.parse(localStorageRef));
            this.setState({ order: JSON.parse(localStorageRef) })
        }
        // syncState需要時間，所以當order要render秀出來時，你的fish state還是空的，還沒從firebase傳過來，所以解決辦法是在order.js的第五行做檢查，fish是否存在
        this.ref = base.syncState(`${params.storeid}/fishes`, {
            context: this,
            state: "fishes",
        });
    }

    // 當改變order時，要把資料存在localStorage，並顯示在畫面世上
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
                { /* <Order fishes={this.state.fishes} order={this.state.order} /> */ }
                <Order {...this.state} />
                <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
            </div>
        )
    };
};

export default App;
