#!/bin/bash

# Build and push web2 to st-marys-school service
docker build -t asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest ./web2
docker push asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest
gcloud run deploy st-marys-school \
  --image=asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest \
  --platform=managed \
  --region=asia-south1 \
  --port=5000 \
  --min-instances=0 \
  --max-instances=5 \
  --allow-unauthenticated \
  --project=yahweh-488009
