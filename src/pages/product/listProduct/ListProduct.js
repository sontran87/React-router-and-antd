import React, { Component } from 'react'
import history from "../../../utils/history";

class ListProduct extends Component {
    onClick=()=>{
        history.push('/damnx')
    }

    render() {
        return (
            <div>
              <button onClick={this.onClick}>
                  2
              </button>
            </div>
        )
    }
}

export default ListProduct
