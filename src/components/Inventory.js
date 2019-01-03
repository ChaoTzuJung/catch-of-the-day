import React from 'react';
import PropsType from 'prop-types';
import AddFishform from './AddFinishForm';
import EditFishForm from './EditFishForm';
class Inventory extends React.Component {
    static propsType = {
        fishes: PropsType.object,
        updateFish: PropsType.func,
        addFish: PropsType.func,
        loadSampleFish: PropsType.func
    }
    render(){
        return (
            <div className="inventory">
                <h2>Inventory!</h2>
                {/* fishes 是物件不能直接map */}
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishForm 
                        key={key}
                        index={key}
                        fish={this.props.fishes[key]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                ))}
                <AddFishform addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFish}>
                    Load Sample Fishes
                </button>
            </div>
        )
    };
};

export default Inventory;