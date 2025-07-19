# Currency Converter with CI/CD Automated Deployment on Azure

## Project Overview

This project demonstrates the application of Continuous Integration and Continuous Deployment (CI/CD) using a simple currency converter web application built with ReactJS (frontend) and Node.js with Express (backend). The CI/CD pipeline automates testing, building, and deployment to an Azure Web App using GitHub Actions.
---

## Technologies Used

- ReactJS (Frontend)
- Node.js with Express (Backend)
- GitHub & GitHub Actions (Source control and CI/CD)
- Microsoft Azure Web App (Cloud hosting)
- YAML (Workflow configuration)

---

## Features

- Real-time currency conversion from USD to multiple currencies via API
- Automated build and deployment pipeline using GitHub Actions
- Secure handling of API keys and Azure publish profiles using GitHub Secrets
- Deployment on Azure Web App with Node.js runtime environment

---

## CI/CD Pipeline Steps

1. **Development and Push:**  
   Local development with ReactJS and Node.js, then code pushed to GitHub.

2. **GitHub Actions Template:**  
   Use of pre-configured GitHub Actions workflow to deploy Node.js app to Azure.

3. **Azure Web App Setup:**  
   Azure Web App created with basic authentication enabled for publishing and linked to GitHub repo.

4. **Workflow Customization:**  
   YAML workflow customized to upload necessary build artifacts and inject secrets securely.

5. **Secrets Management:**  
   Sensitive information such as API keys and Azure publish profiles stored as GitHub secrets.

6. **Automated Deployment:**  
   On push, the pipeline builds the React frontend, runs tests, and deploys the app automatically to Azure.

---

## Environment Variables

This project requires an API key from [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch currency rates.

### Running Locally

1. Create a `.env` file in the project root directory.
2. Add the following line, replacing `your_actual_api_key_here` with your API key:

REACT_APP_API_KEY=your_actual_api_key_here


3. Then, run the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/sanjeebnepal/react-app-usd-converter-with-workflows.git
cd react-app-usd-converter-with-workflows

# Install project dependencies
npm install

# Build the React frontend
npm run build

# Start the Node.js server which serves the React app
npm start
