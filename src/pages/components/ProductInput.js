import React, { Component } from 'react'
import {Col, Input} from 'antd'


export class ProductInput extends Component {
    render() {
        const {name, value, handleOnChange, placeholder, title} = this.props;
        return (
            <Col span="11" style={{witdth:'100%'}}>
                <div>{title}</div>
              <Input
                name={name}
                value={value}
                onChange={(e) =>
                  handleOnChange(e.target.name, e.target.value)
                }
                placeholder={placeholder}
              />

            </Col>
        )
    }
}

export default ProductInput
