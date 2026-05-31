import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div style={{ background: "blue", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>
      <Link to="/products" style={{ color: "white" }}>Products</Link>
    </div>
  )
}

export default Navbar