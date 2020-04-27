import React, { Component } from "react";
import {  Row, Col, Button } from "antd";
import NumberFormat from 'react-number-format';
import history from "../utils/history";
import ProductInput from "./components/ProductInput";

// const localProduct = window.localStorage.getItem('product');

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      id: "",
      name: "",
      quantity: null,
      price: null,
      saleOff: null,
      description: "",
    };
  }
  async componentDidMount() {
    const key = this.props.match.params.id;
    if (key) {
      let editItem = JSON.parse(window.localStorage.getItem("product"))[key];
      let { id, name, quantity, price, saleOff, description } = this.state;
      id = editItem.id;
      name = editItem.name;
      quantity = editItem.quantity;
      price = editItem.price;
      saleOff = editItem.saleOff;
      description = editItem.description;
      this.setState({
        ...this.state,
        id,
        name,
        quantity,
        price,
        saleOff,
        description,
      });
    }

    const localProduct = await window.localStorage.getItem("product");
    let data = {};
    if (localProduct) {
      data = JSON.parse(localProduct);
    } else {
      await window.localStorage.setItem("product", "{}");
    }
    this.setState({
      ...this.state,
      product: data,
    });
  }
  handleOnChange = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleOnClick = () => {
    const {
      product,
      name,
      price,
      quantity,
      saleOff,
      description,
      id,
    } = this.state;
    const editKey = this.props.match.params.id;
    if (editKey) {
      product[editKey] = {
        id,
        name,
        price,
        quantity,
        saleOff,
        description,
      };
      this.setState(
        {
          product,
          name: "",
          price: 0,
          quantity: 0,
          saleOff: "",
          description: "",
          id: "",
        },
        async () => {
          await window.localStorage.setItem(
            "product",
            JSON.stringify(this.state.product)
          );
          await JSON.parse(window.localStorage.getItem("product"));
          //  console.log(data)
          history.push("/");
        }
      );
    } else {
      const key = Date.now();
      product[key] = {
        id,
        name,
        price,
        quantity,
        saleOff,
        description,
      };
      this.setState(
        {
          product,
          name: "",
          price: 0,
          quantity: 0,
          saleOff: "",
          description: "",
          id: "",
        },
        async () => {
          await window.localStorage.setItem(
            "product",
            JSON.stringify(this.state.product)
          );
          await JSON.parse(window.localStorage.getItem("product"));
          //  console.log(data)
          history.push("/");
        }
      );
    }
  };

  render() {
    const { id, name, price, saleOff, description } = this.state;
    return (
      <div className="container">
        <div className="mt-3"></div>
        <div>
          <Row>
              <ProductInput
                placeholder="Mã sản phẩm"
                title="Mã sản phẩm"
                name="id"
                value={id}
                handleOnChange={this.handleOnChange}
              />
              <Col span={2}></Col>
              <ProductInput
                placeholder="Tên sản phẩm"
                title="Tên sản phẩm"
                name="name"
                value={name}
                handleOnChange={this.handleOnChange}
              />
          </Row>
        </div>
        <div className="mt-3"></div>
        <div>
          <Row>
          <ProductInput
                placeholder="Mô tả"
                title="Mô tả"
                name="description"
                value={description}
                handleOnChange={this.handleOnChange}
              />
            <Col span="2"></Col>
            <ProductInput
                placeholder="Giá bán"
                title="Giá bán"
                name="price"
                value={price}
                handleOnChange={this.handleOnChange}
              />
          </Row>
        </div>
        <div className="mt-3"></div>
        <div>
          <Row>
          <ProductInput
                placeholder="Giá khuyến mại"
                title="Giá khuyến mại"
                name="saleOff"
                value={saleOff}
                handleOnChange={this.handleOnChange}
              />
          <Col span={2}></Col>
          <Col span={11}>
            <div>Test Number format</div>
          <NumberFormat thousandSeparator={true} prefix={''} style={{width: '100%', border: "1px solid #d9d9d9", lineHeight: "1.5715", padding: "4px 11px"}}/>
          </Col>
          </Row>
        </div>
        <div className="mt-3"></div>
        <div>
          <Button
            type="primary"
            className="btn btn-block"
            onClick={this.handleOnClick}
          >
            Xong
          </Button>
        </div>
      </div>
    );
  }
}

export default AddProduct;
