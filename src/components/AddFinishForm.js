import React from 'react';

class AddFishform extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        // 1. stop form from submit
        event.preventDefault();
        // 2. 抓取你輸入的值並做成一個物件
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        console.log(this.props)
        // 3. 呼叫callback addFish method，把fish物件傳到App的root component
        this.props.addFish(fish);
        // const storeName = this.myInput.current.value;
        // this.props.history.push(`/store/${storeName}`);
        console.log(event.currentTarget); // <form...>
        event.currentTarget.reset();
    }

    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name"  ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef}  type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef} >
                    <option value="avaliable">Fresh!</option>
                    <option value="unavaliable">Sold Out!</option>
                </select>
                <textarea name="desc"  ref={this.descRef} placeholder="Desc" />
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    };
};

export default AddFishform;