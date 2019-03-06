import React, {Component} from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const totals = this.props.totals;
        totals.splice(this.props.index, 1);
        this.props.updateTotals(totals);
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