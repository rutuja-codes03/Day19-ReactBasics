function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        width: "250px",
        margin: "10px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;