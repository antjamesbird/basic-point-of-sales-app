import React, {Component} from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const findTotal = this.props.totals[this.props.index];
        console.log(findTotal);
    }

    render() { 
        return ( 
            <div>
                R {this.props.value}
                <span onClick={this.handleClick} className="removeItem">X</span>
            </div>
         );
    }
}
 
export default Item;