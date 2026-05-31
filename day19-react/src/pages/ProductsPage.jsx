import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function ProductsPage() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Failed to load. Try again.")
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading products...</h2>
  }

  if (error) {
    return <h2 style={{ padding: "20px", color: "red" }}>{error}</h2>
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {products.map((product) => (
          <div
            key={product.id} //the id is id not _id thats why we use .id here
            onClick={() => navigate("/products/" + product.id)}
            style={{ border: "1px solid gray", padding: "15px", cursor: "pointer", width: "200px" }}
          >
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage