import React, {Component} from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={this.props.value}>
                R {this.props.value}
            </div>
         );
    }
}
 
export default Item;