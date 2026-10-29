# PromptLab — Interactive Prompt Engineering Learning Platform

An interactive, responsive educational web application built for the **Interactive Prompt Engineering (IPE)** college project. 

PromptLab provides students, researchers, and engineers with a hands-on laboratory to master prompt design patterns, understand prompt anatomy, compare before-and-after transformations, diagnose and score prompts using a heuristic rubric engine, and test knowledge through an interactive quiz with a verifiable project completion certificate.

---

## 🌟 Key Features

1. **Interactive Dashboard**:
   - Live metrics tracking (Modules Completed, Quiz Best Score, Saved Prompts, IPE Mastery Rank).
   - "Anatomy of a High-Impact Prompt" interactive formula breakdown (Persona, Task, Context, Constraints, Format).
   - Daily Prompt Engineering Principle rotator.
   - Quick curriculum roadmap jump links.

2. **6 Comprehensive Learning Modules**:
   - **Module 1**: Foundations of Prompting & Prompt Anatomy (5 structural pillars).
   - **Module 2**: Zero-Shot vs. Few-Shot Conditioning & In-Context Exemplars.
   - **Module 3**: Chain-of-Thought (CoT) & Multi-Step Reasoning (Kojima zero-shot CoT).
   - **Module 4**: Output Constraints, Delimiters (XML tags), & Deterministic JSON Schemas.
   - **Module 5**: Industrial Prompt Frameworks (CREATE, RTF, CLEAR).
   - **Module 6**: Hallucination Mitigation & Defensive Prompt Security (Anti-Jailbreak).
   - Each module includes practical rules, code blocks, interactive micro-check exercises, and persistent completion tracking.

3. **Before & After Comparative Showcase**:
   - 5 domain transformations: Python Web Scraper, Academic Literature Synthesis, E-Commerce Churn Root-Cause Analysis, Executive Scope Renegotiation, and PostgreSQL Query Optimization.
   - Dual inspection modes: **Side-by-Side** and **Tabbed View**.
   - Defect analysis, key wins, and quantitative reasoning improvements.
   - One-click copy and "Test in Doctor" actions.

4. **Prompt Doctor & Rubric Analyzer (Interactive Lab)**:
   - Evaluates any user prompt or 5 preloaded student presets.
   - 5-point heuristic rubric analysis: Role & Persona, Task Specificity, Context & Audience, Constraints & Boundaries, and Output Formatting.
   - Real-time 0–100 Rubric Score with color-coded gauge and diagnostic checklist.
   - Automatically generates an optimized, structured prompt prescription.
   - Simulated side-by-side model outputs demonstrating the impact of prompt engineering.

5. **Curated Prompt Library**:
   - 8 production-grade prompt templates across Academic, Software, Data Science, Business, and System Prompts.
   - Live search filter and category pills.
   - One-click copy, bookmarking to personal Notebook, and direct transfer to Prompt Doctor.

6. **Interactive Quiz & Certification Engine**:
   - 10 randomized exam questions covering prompt engineering principles, few-shot conditioning, CoT, and safety.
   - Instant visual feedback, streak counter, score pills, and in-depth explanations.
   - Final assessment score percentage and performance grade.
   - Full question review breakdown.
   - **Customizable Project Certificate**: Generates a verified IPE Completion Certificate with student name, date, grade, and verification ID, printable and exportable to PDF.

7. **Prompt Notebook & Favourites**:
   - Star any curated prompt.
   - Add custom student prompts with personal study notes.
   - One-click export of the entire notebook to formatted Markdown (`.md`) for college submissions.

8. **Theme & Responsiveness**:
   - Sleek dark and light mode toggle.
   - Fully responsive design optimized for mobile, tablet, and desktop screens with collapsible drawer navigation.
   - Zero external runtime npm packages or build dependencies required.

---

## 📁 Project Structure

```
├── index.html        # Complete semantic HTML5 structure and accessible layout
├── style.css         # Modern, responsive CSS with theming and design tokens
├── script.js         # Modular ES6+ vanilla JavaScript application logic
├── test/             # Automated test suite (node:test)
│   └── prompt-evaluator.test.ts
└── README.md         # Documentation and deployment manual
```

---

## 🚀 How to Deploy on Vercel

Because PromptLab is built using **pure HTML, CSS, and vanilla JavaScript**, it functions as a static website without needing npm install, Node.js runtimes, or build steps.

### Method A: Deploy via GitHub (Recommended for College Submissions)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of PromptLab IPE project"
   git branch -M main
   git remote add origin https://github.com/<your-username>/promptlab.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **"Add New..."** → **"Project"**.
   - Select your `promptlab` GitHub repository and click **"Import"**.

3. **Configure Project Settings**:
   - **Framework Preset**: Select **`Other`** (or leave as Default).
   - **Root Directory**: `./` (default).
   - **Build Command**: Leave **EMPTY** (do not enter any build command).
   - **Output Directory**: Leave **EMPTY** or `./` (Vercel will serve files directly from the root).
   - **Install Command**: Leave **EMPTY**.

4. **Deploy**:
   - Click **"Deploy"**.
   - Vercel will deploy the site in 5–10 seconds and generate a live URL (e.g., `https://promptlab-ipe.vercel.app`).

---

### Method B: Deploy using Vercel CLI

If you prefer deploying directly from your terminal:

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy directly from the project directory**:
   ```bash
   vercel
   ```

3. **Answer the interactive prompts**:
   - Set up and deploy? **`Y`**
   - Which scope? Select your personal account.
   - Link to existing project? **`N`**
   - What's your project's name? **`promptlab`**
   - In which directory is your code located? **`./`**
   - Want to modify settings? **`N`**

4. **For production release**:
   ```bash
   vercel --prod
   ```

---

## 💻 Running Locally

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it directly in Chrome, Firefox, Safari, or Edge.

### Option 2: Using Any Lightweight Static Server
```bash
# Python 3
python -m http.server 3000

# or npx serve
npx serve .
```
Navigate to `http://localhost:3000`.

---

## 🧪 Automated Testing

Unit tests for the Prompt Doctor rubric scoring, quiz calculation, and curriculum data integrity can be executed via Node.js built-in test runner:

```bash
npx --yes tsx --test test/prompt-evaluator.test.ts
```

All 7 test suites validate:
- Dataset integrity across modules, comparisons, and quiz questions.
- Accurate structural feature detection (Persona, Context, Constraints, Format).
- Edge-case handling for empty or malformed prompt inputs.
- Quiz grading and percentage rank derivations.

---

## 🎓 Academic Coursework Information

- **Course**: Interactive Prompt Engineering (IPE)
- **Course Level**: Undergraduate / Graduate Computer Science & AI
- **Deliverable**: Interactive Learning Platform & Diagnostic Tool
- **Offline Integrity**: All heuristic evaluation models and simulated outcomes run directly on the client side with zero external API dependencies, ensuring consistent grading during presentations.
