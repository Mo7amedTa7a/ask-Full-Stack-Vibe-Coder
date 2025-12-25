const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/**
 * Improves a rough website idea by expanding it
 * into a clearer, more actionable website brief.
 */
function improveIdea(idea) {
  const cleanedIdea = idea.trim();
  const isShort = cleanedIdea.length < 40;

  const intro = isShort
    ? "The initial idea was brief, so it was expanded for clarity."
    : "The initial idea was refined to improve structure and clarity.";

  return `${intro}

Create a clear and professional website based on the following idea:
"${cleanedIdea}"

The website should:
- Clearly communicate its purpose
- Target the appropriate audience
- Highlight the main value proposition

Key sections to include:
- A strong homepage with a clear headline
- An about section explaining the purpose
- Key features or services
- A clear call-to-action guiding users on what to do next

The design should be modern, clean, and fully responsive across devices.`;
}

app.post("/api/improve", (req, res) => {
  const { idea } = req.body;

  if (!idea || idea.trim() === "") {
    return res.status(400).json({
      error: "Please provide a website idea"
    });
  }

  const improvedIdea = improveIdea(idea);

  res.json({
    improvedIdea
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
