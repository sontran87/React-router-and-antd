import React, { Component } from "react";
import { Typography, Button, Row, Col } from "antd";
import Tables from "./components/Tables";
import history from "../utils/history";

const { Title } = Typography;

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      edit: "",
    };
  }

  componentDidMount= async()=>{
    let product =await window.localStorage.getItem("product");
    let localProduct = {};
     if (!product) {
      await window.localStorage.setItem("product", "{}");
    }else{
      localProduct = JSON.parse(product)
    }

    this.setState({
      product: localProduct,
      edit: "",
    });
  }
  
  handleOnClick = () => {
    history.push("/add-product");
  };
  handleDelete = (key) => {
    let { product } = this.state;
    delete product[key];
    console.log(product);
    this.setState(
      {
        product: product,
      },
      () => {
        window.localStorage.setItem(
          "product",
          JSON.stringify(this.state.product)
        );
      }
    );
  };
  handleEdit = (key) => {
    console.log(key)
    window.localStorage.setItem("edit", key);
    history.push("/add-product");
  };
  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <div className="mt-3"></div>
        <div>
          <Row>
            <Col span={20}>
              <Title level={3}>List sản phẩm</Title>
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                className="float-right"
                onClick={this.handleOnClick}
              >
                + Thêm mới
              </Button>
            </Col>
          </Row>
          <div className="mt-3"></div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã Sản phẩm</th>
              <th>Tên Sản phẩm</th>
              <th>Giá bán</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <Tables
              product={product}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
