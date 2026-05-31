import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function ProductDetailPage() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:5000/api/products/" + id)
      .then((res) => {
        setProduct(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Failed to load product.")
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading product...</h2>
  }

  if (error) {
    return <h2 style={{ padding: "20px", color: "red" }}>{error}</h2>
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/products")}>Back to Products</button>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>ID: {product.id}</p>
    </div>
  )
}

export default ProductDetailPage