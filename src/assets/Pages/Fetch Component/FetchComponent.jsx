import React from "react";
import useFetch from "../Fetch/Fetch";
import './FetchComponent.css'

const FetchComponent = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?" // no delay
  );

  return (
    <div style={{ padding: "20px" }}>
        <div className="loading">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}</div>
      {!loading && data && (
        <>
        <h1 style={{justifyContent: "center", display: "flex"}}>Photos</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {data.slice(0, 200).map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default FetchComponent;
