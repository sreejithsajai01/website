@echo off
REM Build and push web2 to st-marys-school service

echo Building Docker image...
docker build -t asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest ./web2
if errorlevel 1 (
    echo Docker build failed!
    exit /b 1
)

echo Pushing Docker image...
docker push asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest
if errorlevel 1 (
    echo Docker push failed!
    exit /b 1
)

echo Deploying to Google Cloud Run...
gcloud run deploy st-marys-school ^
  --image=asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest ^
  --platform=managed ^
  --region=us-central1 ^
  --port=5000 ^
  --min-instances=0 ^
  --max-instances=5 ^
  --allow-unauthenticated ^
  --project=yahweh-488009

if errorlevel 1 (
    echo Deployment failed!
    exit /b 1
)

echo Deployment completed successfully!
