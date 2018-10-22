import React from 'react';
import AddFishform from './AddFinishForm';
class Inventory extends React.Component {
    render(){
        return (
            <div className="inventory">
                <h2>Inventory!</h2>
                <AddFishform addFish={this.props.addFish}/>
            </div>
        )
    };
};

export default Inventory;