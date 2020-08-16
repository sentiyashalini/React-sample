import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const ProductList = () => {
  const [data, setProduct] = useState({ products: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          'https://products.free.beeceptor.com/my/api/path'
        );
        setProduct(result.data);
      }
      catch (e) {
        console.log("error", e);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Product List</h2>
      {data && data.products.length > 0 ?
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>inStock</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((list, idx) => (
              <tr key={idx}>
                <td>{list.productID}</td>
                <td>{list.productName}</td>
                <td>{list.productPrice}</td>
                <td>{list.inStock ? 'Available' : 'Not Available'}</td>
              </tr>
            ))}
          </tbody>
        </Table> : <p>Product List is not Found</p>
      }
    </div>
  )
}
export default ProductList;