import { useEffect, useState } from "react"

export default function FetchAPI(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <h2>Loading posts...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🧾 All Post Titles</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
    )
}