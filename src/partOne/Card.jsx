export default function Card({ title, description, imageUrl }) {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      maxWidth: "300px",
      textAlign: "center"
    }}>
      <h2 style={{paddingBottom:"0px", marginBottom:"0px"}}>Name: {title}</h2>
      <p style={{paddingBottom:"20px", marginBottom:"0px"}}>Description: {description}</p>
      <img style={{height:"300px", width:"300px"}} src={imageUrl} alt={title} />
    </div>
  );
}
