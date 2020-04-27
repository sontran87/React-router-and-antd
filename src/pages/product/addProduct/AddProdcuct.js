import React, { Component } from 'react'
import history from "../../../utils/history";

class AddProdcuct extends Component {
    onClick=()=>{
        history.push('/')
    }

    render() {
        return (
            <div>
              <button onClick={this.onClick}>
                  add
              </button>
            </div>
        )
    }
}

export default AddProdcuct
