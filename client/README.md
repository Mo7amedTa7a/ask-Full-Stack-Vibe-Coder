# Stunning – Full-Stack Vibe Coder Task

## Overview
This project is a simple full-stack feature designed to help users turn rough, unclear website ideas into clearer, more actionable website prompts.

The goal was to focus on product thinking, clarity, and execution rather than over-engineering or excessive features.

The experience is intentionally built as a realistic product hero section, not a demo or proof-of-concept.

---

## What the Feature Does
1. The user enters a rough website idea.
2. The idea is submitted to the backend.
3. The system returns an improved, clearer version of the idea that can be used as a website brief or prompt.

The improvement logic is rule-based (no AI), focusing on:
- Clarifying the purpose
- Identifying the target audience
- Suggesting key sections
- Making the idea more actionable

---

## Tech Stack
**Frontend**
- React (Vite)
- Plain CSS (inline styles for simplicity)

**Backend**
- Node.js
- Express
- CORS for cross-origin requests

---

## Project Structure
stunning-task/
├─ client/ # React frontend
├─ server/ # Express backend
└─ README.md


---

## How to Run the Project

### 1. Run the Backend

- cd server
- npm install
- node index.js

---
### 2. Run the Frontend

- cd client
- npm install
- npm run dev
