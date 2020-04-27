import React, { Component } from "react";
import { Button } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

class Tables extends Component {
  render() {
    const { product } = this.props;
    const items = [];
    for (let item in product) {
      items.push(
        <React.Fragment key={item}>
          <tr>
            <td>{product[item].id}</td>
            <td>{product[item].name}</td>
            <td>{product[item].price}</td>
            <td>
              <Link to={"/add-product/" + item}>
                <EditTwoTone style={{ fontSize: "20px" }} />
              </Link>

              {/* <Button
                style={{ border: "none" }}
                onClick={() => this.props.handleEdit(item)}
              >
                <EditTwoTone style={{ fontSize: "20px" }} />
              </Button> */}
              <Button
                style={{ border: "none" }}
                onClick={() => this.props.handleDelete(item)}
              >
                <DeleteTwoTone style={{ fontSize: "20px" }} />
              </Button>
            </td>
          </tr>
        </React.Fragment>
      );
    }
    return items;
  }
}

export default Tables;
