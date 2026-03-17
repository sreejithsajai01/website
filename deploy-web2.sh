#!/bin/bash

# Build and push web2
docker build -t asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest ./web2
docker push asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest
gcloud run deploy web2 \
  --image=asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest \
  --platform=managed \
  --region=asia-south1 \
  --port=5000 \
  --allow-unauthenticated
