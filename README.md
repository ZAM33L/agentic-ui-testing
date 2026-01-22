# Agentic UI Testing

This project demonstrates a **black-box UI testing approach** using **Playwright** and **DOM scanning** to handle **UI variations between two sites**, without relying on application source code.

The focus is on **baseline vs. variant testing**, where UI changes can break selectors, and tests need intelligent analysis rather than blind fixes.

---

## 🔍 Problem Statement

In real-world UI testing scenarios:

- UI changes frequently break selectors.
- Test failures often don’t clearly explain *why* they failed.
- Source code of the application is often unavailable.
- Manual debugging of selector issues is slow and error-prone.

---

## 💡 Solution Approach

This project:

- Treats the UI as a **black box**.
- Uses a **DOM scanner** to capture structure and screenshots.
- Compares **Site A (baseline)** with **Site B (variant)**.
- Helps analyze selector failures using stored DOM data.
- Prepares structured inputs that can later be used by AI tools (e.g., Claude).

---

## 🛠️ Tech Stack

This project leverages the following technologies:

- **Node.js** – JavaScript runtime for running scripts.
- **Playwright** – End-to-end testing framework for automating browser interactions.
- **DOM Scanner** – Custom logic for scanning and capturing the DOM structure.
- **JavaScript** – Core scripting languages used in the project.
- **Git** – Version control for managing project code.
- **Claude Desktop** – for agentic AI process.

---

## 📁 Project Structure

agentic-ui-testing/
├── ScanDOM/ # DOM scanning logic and scripts
├── Site-A/ # Baseline site assets / samples
├── Site-B/ # Variant site assets / samples
├── Site-Tests/ # UI tests comparing Site-A vs Site-B
├── documentations/ # Docs, guides, and reference material
├── .gitignore # Files & folders to ignore in Git
├── .hintrc # Linter / HTML hint config
├── README.md # Project documentation
└── (other config or support files)


### 📌 Directory Purpose

- **ScanDOM/** – Contains the DOM scanner tooling that captures UI structure and screenshots from target sites.  
- **Site-A/** – Baseline website version used as the reference for comparison.  
- **Site-B/** – Variant website version where UI differences are tested against the baseline.  
- **Site-Tests/** – Playwright (or similar) test cases that exercise UI flows and compare results between Site‑A and Site‑B.  
- **documentations/** – Project documentation, guides, or example outputs.  
- **.gitignore / .hintrc** – Configuration for Git ignore rules and HTML/linter settings.  

---

## 🧠 How the System Works

### 1️⃣ Scan the Baseline (Site A)
- Capture DOM structure
- Extract element attributes and hierarchy
- Take a screenshot
- Store results as JSON + PNG

### 2️⃣ Scan the Variant (Site B)
- Capture updated DOM
- Take screenshot
- Store separately for comparison

### 3️⃣ Run Playwright Tests
- Tests are written using selectors based on Site A
- Tests fail on Site B if selectors no longer match

### 4️⃣ Analyze Selector Failures
- Compare `siteA.json` vs `siteB.json`
- Identify attribute or structure changes
- Update or generalize selectors accordingly

---

## 🧪 Running the DOM Scanner

node runScan.js

## 🧪 Running the Sites (sites must be active)

node server1.js
node server2.js

## 🧪 Running the Playwright Tests

npx playwright test

## 🧪 Viewing the Playwright Report

npx playwright show-report


## 🤖 Role of AI (Claude)
Priorly the AI system must be congigured with Playwright protocol and Filesystem protocol , to understand the testing process and to access the files
The generated DOM snapshots and screenshots can be provided to an AI system (e.g., Claude) to:
- Explain why selectors failed
- Suggest alternative selectors
- Propose backward-compatible locator strategies
- Assist in intelligent test maintenance

apart from scanning , the AI system can also be involved to access the playwright reports to understand the error or read the errors in the terminal(by paasing it thru prompt)
  
**(Kindly Refer the documentations folder for Agentic AI procedures)**

---

This project is initially commited in base level and currently under development to enhance the functionality and overcome the drawbacks and limitations , by involving automation methods
Consider "Initial commit: blackbox UI testing with baseline vs variant" as the base savepoint

**Author**
Jameel Asfer

---
