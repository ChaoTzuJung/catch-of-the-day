import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component {

    goToStore(event) {
        // Stop form from sumbitting
        event.preventDefault();
        // Get the text from input
        console.log(this) // undefined 
        // Change the page to /store/whatever-they-enter
        this.componentDidMount() {
            console.log(this) // StorePicker這個component
        }
    }
    render() {
        return (
            <React.Fragment>
                <form className="store-selector" onSubnit={this.goToStore}>
                    <h2>Please Enter a Store</h2>
                    <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                    <button type="submit" >Visit Store</button>
                </form>
            </React.Fragment>
        )
    };
};

export default StorePicker;