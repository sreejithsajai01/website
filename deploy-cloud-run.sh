#!/bin/bash

# Build and push web1
docker build -t asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web1:latest ./web1
docker push asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web1:latest
gcloud run deploy web1 \
  --image=asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web1:latest \
  --platform=managed \
  --region=asia-south1 \
  --port=5173 \
  --allow-unauthenticated

# Build and push web2
docker build -t asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest ./web2
docker push asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest
gcloud run deploy web2 \
  --image=asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web2:latest \
  --platform=managed \
  --region=asia-south1 \
  --port=5000 \
  --allow-unauthenticated

# Build and push web3
docker build -f ./web3/Dockerfile.frontend -t asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web3:latest ./web3
docker push asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web3:latest
gcloud run deploy web3 \
  --image=asia-south1-docker.pkg.dev/yahweh-488009/cortex-erp/web3:latest \
  --platform=managed \
  --region=asia-south1 \
  --port=5173 \
  --allow-unauthenticated
