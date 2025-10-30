'use client'

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [error]);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
      padding: "16px",
      textAlign: "center",
      background: "#ffffff"
    }}>
      <div style={{ maxWidth: 560 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
          Something went wrong
        </h2>
        <p style={{ color: "#4b5563", marginBottom: 16 }}>
          An unexpected error occurred while loading this page. You can try again.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={() => reset()}
            style={{
              padding: "10px 16px",
              background: "#111827",
              color: "#ffffff",
              borderRadius: 8,
              border: 0,
              cursor: "pointer"
            }}
          >
            Try again
          </button>
          <button
            onClick={() => typeof window !== 'undefined' && window.location.reload()}
            style={{
              padding: "10px 16px",
              background: "#e5e7eb",
              color: "#111827",
              borderRadius: 8,
              border: 0,
              cursor: "pointer"
            }}
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}


