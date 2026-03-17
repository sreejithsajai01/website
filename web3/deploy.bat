@echo off
REM St. Mary's School Web3 - Build, Push, and Deploy Script (Windows)
REM This script builds the Docker image, pushes it to Google Container Registry, and deploys to Cloud Run

setlocal enabledelayedexpansion

REM Configuration
set PROJECT_ID=yahweh-488009
set SERVICE_NAME=st-marys-school-web3
set IMAGE_NAME=gcr.io/%PROJECT_ID%/%SERVICE_NAME%
set REGION=asia-south1

echo 🏗️  Starting deployment process for St. Mary's School Web3...
echo Project ID: %PROJECT_ID%
echo Service Name: %SERVICE_NAME%
echo Region: %REGION%
echo.

REM Step 1: Build Docker image
echo 📦 Step 1: Building Docker image...
docker build -f Dockerfile.frontend -t %SERVICE_NAME% .
if %errorlevel% neq 0 (
    echo ❌ Docker build failed!
    exit /b 1
)
echo ✅ Docker image built successfully!
echo.

REM Step 2: Tag image for Google Container Registry
echo 🏷️  Step 2: Tagging image for Google Container Registry...
docker tag %SERVICE_NAME% %IMAGE_NAME%
if %errorlevel% neq 0 (
    echo ❌ Docker tag failed!
    exit /b 1
)
echo ✅ Image tagged successfully!
echo.

REM Step 3: Push image to Google Container Registry
echo 📤 Step 3: Pushing image to Google Container Registry...
docker push %IMAGE_NAME%
if %errorlevel% neq 0 (
    echo ❌ Docker push failed!
    exit /b 1
)
echo ✅ Image pushed successfully!
echo.

REM Step 4: Deploy to Google Cloud Run
echo 🚀 Step 4: Deploying to Google Cloud Run...
gcloud run deploy %SERVICE_NAME% --image %IMAGE_NAME% --platform managed --region %REGION% --allow-unauthenticated --port 5000
if %errorlevel% neq 0 (
    echo ❌ Deployment failed!
    exit /b 1
)
echo ✅ Deployment completed successfully!
echo.

REM Get the service URL
for /f "tokens=*" %%i in ('gcloud run services describe %SERVICE_NAME% --region=%REGION% --format="value(status.url)"') do set SERVICE_URL=%%i

echo 🎉 Deployment Complete!
echo Service URL: %SERVICE_URL%
echo.
echo 📝 Next steps:
echo 1. Visit %SERVICE_URL% to test your application
echo 2. Clear social media cache using:
echo    - Facebook: https://developers.facebook.com/tools/debug/
echo    - Twitter: https://cards-dev.twitter.com/validator
echo    - LinkedIn: https://www.linkedin.com/post-inspector/
echo.
echo ✨ Your St. Mary's School Web3 is now live without Replit branding!

pause