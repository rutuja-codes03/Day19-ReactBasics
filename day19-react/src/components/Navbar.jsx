import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;