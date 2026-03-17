#!/bin/bash

# Build and push web4 (using web2 source)
docker build -t asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web4:latest ./web2
docker push asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web4:latest
gcloud run deploy web4 \
  --image=asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web4:latest \
  --platform=managed \
  --region=asia-south1 \
  --port=5000 \
  --allow-unauthenticated
