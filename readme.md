# Mokapi CI Example: Testing a Node.js Backend with a Mocked API

This repository demonstrates how to use Mokapi in GitHub Actions to test a Node.js backend that interacts with a mocked API. The setup allows backend testing without requiring a live API, making CI/CD pipelines more reliable.

## 🚀 Run Locally

### 1. Make sure you have Node.js installed. Then, run:

```bash
npm install
```

### 2. Install Mokapi

Follow the installation guide at https://mokapi.io/docs/guides/get-started/installation

### 3. Run Mokapi

Option 1: Run Mokapi Directly
```bash
mokapi --providers-file-directory mocks
```

Option 2: Run Mokapi with Docker
```bash
docker run -d --rm --name mokapi -p 80:80 -p 8080:8080 -v $(pwd)/mocks:/etc/mokapi/configs --env MOKAPI_PROVIDERS_FILE_DIRECTORY=/etc/mokapi/configs mokapi/mokapi:latest
```

### 4. Run Tests
Once Mokapi is running, execute the tests:
```bash
npm test
```

## 🛠 GitHub Actions CI Setup

This repository includes a GitHub Actions workflow (.github/workflows/ci.yml) to:

1. Checkout the code

2. Start Mokapi in Docker

3. Set up Node.js

4. Run Jest tests

5. Stop Mokapi after testing