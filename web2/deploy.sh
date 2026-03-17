#!/bin/bash

# St. Mary's School 2 - Build, Push, and Deploy Script
# This script builds the Docker image, pushes it to Google Container Registry, and deploys to Cloud Run

set -e  # Exit on any error

# Configuration
PROJECT_ID="yahweh-488009"
SERVICE_NAME="st-marys-2"
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"
REGION="asia-south1"

echo "🏗️  Starting deployment process for St. Mary's School 2..."
echo "Project ID: ${PROJECT_ID}"
echo "Service Name: ${SERVICE_NAME}"
echo "Region: ${REGION}"
echo ""

# Step 1: Build Docker image
echo "📦 Step 1: Building Docker image..."
docker build -t ${SERVICE_NAME} .
echo "✅ Docker image built successfully!"
echo ""

# Step 2: Tag image for Google Container Registry
echo "🏷️  Step 2: Tagging image for Google Container Registry..."
docker tag ${SERVICE_NAME} ${IMAGE_NAME}
echo "✅ Image tagged successfully!"
echo ""

# Step 3: Push image to Google Container Registry
echo "📤 Step 3: Pushing image to Google Container Registry..."
docker push ${IMAGE_NAME}
echo "✅ Image pushed successfully!"
echo ""

# Step 4: Deploy to Google Cloud Run
echo "🚀 Step 4: Deploying to Google Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated \
  --port 5000
echo "✅ Deployment completed successfully!"
echo ""

# Get the service URL
SERVICE_URL=$(gcloud run services describe ${SERVICE_NAME} --region=${REGION} --format="value(status.url)")
echo "🎉 Deployment Complete!"
echo "Service URL: ${SERVICE_URL}"
echo ""
echo "📝 Next steps:"
echo "1. Visit ${SERVICE_URL} to test your application"
echo "2. Clear social media cache using:"
echo "   - Facebook: https://developers.facebook.com/tools/debug/"
echo "   - Twitter: https://cards-dev.twitter.com/validator"
echo "   - LinkedIn: https://www.linkedin.com/post-inspector/"
echo ""
echo "✨ Your St. Mary's School 2 is now live without Replit branding!"