# Vercel

This `api` folder is required for Vercel deployment. Vercel automatically detects and deploys serverless functions from the `api` directory, enabling backend functionality for the application.

Without this folder structure, Vercel would not be able to properly handle API routes and serverless functions during the deployment process.

For correct CI Deployment, we need to move "api" to root dir of workspace