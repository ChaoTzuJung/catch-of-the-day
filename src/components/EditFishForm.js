import React from 'react';
// get this updated fish to swim upstream
class EditFishform extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value) // input輸入的字
        console.log(event.currentTarget.name) // 在html tag裡面設定name屬性，當點到特定input可以顯示那個name屬性的字(我們可以知道什麼屬性的input有被更新)
        // 1. 複製current fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value, //ES6語法：這樣就不用宣告很多事件函數 Ex: handleNameChange、handlePriceChange、handleNameChange、handleStatusChange ...
            //name: event.currentTarget.value, //在哪框框輸入新的value就哪裡更新event.currentTarget.value
        }
        this.props.updateFish(this.props.index, updatedFish)
        // 2. 更新current name 
    }

    render(){
        return (
            <div className="fish-edit">
                <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name}/>
                <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price}/>
                <select name="status" type="text" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="avaliable">Fresh!</option>
                    <option value="unavaliable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                <input name="image" type="text" onChange={this.handleChange} value={this.props.fish.image}/>
                <button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    };
};

export default EditFishform;