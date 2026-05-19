import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        cconsole.log("Products received:", products);
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((p) => (
        <Link
          key={p.id}
          to={`/product/${p.id}`}
          style={{
            display: "block",
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            textDecoration: "none"
          }}
        >
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductsPage;