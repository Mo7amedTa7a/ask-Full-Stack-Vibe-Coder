import { useState } from "react";

const API_URL = "http://localhost:5000/api/improve";

function Hero() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!idea.trim()) return;

    setLoading(true);
    setResult("");
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idea })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setResult(data.improvedIdea);
      }
    } catch (err) {
      setError("Failed to connect"+ err.message);
    }

    setLoading(false);
  };

  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Turn rough website ideas into clear build ready prompts
        </h1>

        <p style={styles.subtitle}>
          Describe your website idea in one sentence We Will help you clarify it
        </p>

        <textarea
          style={styles.textarea}
          placeholder="portfolio website for a designer"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <button
          style={{
            ...styles.button,
            opacity: loading || !idea.trim() ? 0.6 : 1
          }}
          onClick={handleSubmit}
          disabled={loading || !idea.trim()}
        >
          {loading ? "Improving..." : "Improve my idea"}
        </button>

        <p style={styles.example}>
          Try: <span onClick={() => setIdea("portfolio website for a designer")}>
            portfolio website for a designer
          </span>
        </p>

        {error && <p style={styles.error}>{error}</p>}

        {result && (
          <div style={styles.resultBox}>
            <h3>Improved Version</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    maxWidth: "700px",
    width: "100%",
    padding: "40px",
    textAlign: "center"
  },
  title: {
    fontSize: "36px",
    marginBottom: "16px"
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
    marginBottom: "24px"
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "16px"
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#38bdf8",
    color: "#020617"
  },
  example: {
    marginTop: "12px",
    fontSize: "14px",
    opacity: 0.8
  },
  error: {
    marginTop: "16px",
    color: "#f87171"
  },
  resultBox: {
    marginTop: "24px",
    padding: "20px",
    background: "#020617",
    borderRadius: "8px",
    textAlign: "left"
  }
};

export default Hero;
