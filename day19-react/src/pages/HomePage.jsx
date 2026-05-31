import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My Shop</h1>
      <p>Click below to see all products</p>
      <Link to="/products">Go to Products</Link>
    </div>
  )
}

export default HomePage