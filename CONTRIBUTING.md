# 🤝 Contributing to the Agent Marketplace

Thank you for your interest in the Agent Marketplace! We are building the future of decentralized AI access, and we welcome contributions of all kinds—from code to documentation, testing, and feedback.

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

1.  [How to Contribute](#how-to-contribute)
2.  [Getting Started](#getting-started)
3.  [Reporting Bugs](#reporting-bugs)
4.  [Suggesting Enhancements and Agents](#suggesting-enhancements-and-agents)
5.  [Code Contribution Guidelines](#code-contribution-guidelines)
6.  [AI Agent Development](#ai-agent-development)
7.  [Legal Notice](#legal-notice)

---

## 1. How to Contribute

We value every type of contribution! Here are the primary ways you can help:

* **Code:** Fix bugs, implement new features, or contribute to the core Coral Protocol integration layer.
* **AI Agents:** Develop and test new specialized AI agents utilizing technologies like Mistral AI, Eleven Labs, or Lovable AI.
* **Documentation:** Improve our guides, API documentation, and tutorials for developers and end-users.
* **Feedback & Testing:** Report bugs, suggest new features, or help test pre-release versions.

## 2. Getting Started

### 🖥️ Development Setup

To begin development, you will need to:

1.  **Fork the Repository:** Create your own fork of the official repository.
2.  **Clone the Fork:** `git clone [YOUR-FORK-URL]`
3.  **Install Dependencies:** Follow the steps in the **[INSTALL.md](INSTALL.md)** file to set up the required blockchain node (Coral Protocol client), front-end services, and development environment.
4.  **Run Tests:** Ensure your local environment is working by running the full test suite (`npm test` or similar command specified in `INSTALL.md`).

## 3. Reporting Bugs

If you find a bug, please help us by filing an issue in our repository.

* Use the **Bug Report** template provided in the Issues section.
* Provide a clear, descriptive title.
* Explain the issue and the observed behavior versus the expected behavior.
* Include **reproduction steps** (the exact actions needed to trigger the bug).
* Specify your environment: OS, browser, Coral Protocol client version, and any relevant agent version.

## 4. Suggesting Enhancements and Agents

We love new ideas! If you have a suggestion for a feature or a completely new type of AI Agent, please open an Issue.

* Use the **Feature Request / New Agent Suggestion** template.
* Use a clear and descriptive title (e.g., "Feature: Decentralized Wallet Integration" or "New Agent: Automated Financial Analyst").
* Describe the use case, the business value, and how it aligns with the decentralized nature of the marketplace.
* If suggesting a new agent, specify which underlying AI technology (Mistral, Eleven Labs, etc.) would be most appropriate.

## 5. Code Contribution Guidelines

### Branching and Commits

* All contributions should be made via Pull Requests (PRs) from a feature branch based on our `main` branch.
* **Commit Messages:** Please adhere to Conventional Commits (e.g., `feat: add micropayment logging via Coral`).

### Pull Request (PR) Submission

1.  Ensure all new code is covered by appropriate unit and integration tests.
2.  Ensure the full test suite passes locally.
3.  Fill out the PR template completely, linking to the relevant Issue (e.g., `Closes #123`).
4.  Keep PRs focused; address only one issue or feature per request.

## 6. AI Agent Development

The core of our platform is the Agents themselves. If you are developing a new agent for the marketplace:

* **Protocol Compliance:** Your agent must comply with the **Coral Agent Specification**. This ensures it can interface correctly with the Coral Protocol for secure execution and metering.
* **Verification:** Agents must include mechanisms for verification and proof of work/inference to ensure trustless operations.
* **Model Integration:** Clearly document which external AI models (Mistral, Eleven Labs, Lovable) are being used and why they were chosen for the agent's task.

## 7. Legal Notice

By submitting a Pull Request, you assert that you are the original author of the code or have the right to contribute the code under the project’s [LICENSE.md](LICENSE.md). All contributions will be licensed under the project's chosen license.
