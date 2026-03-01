#!/usr/bin/env bash
set -euo pipefail

BUCKET="andymendez.dev"
PROFILE="personal"

echo "==> Building site..."
npm run build

echo "==> Syncing assets to S3..."
aws s3 sync dist/ "s3://$BUCKET" \
  --profile "$PROFILE" \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html"

echo "==> Uploading index.html (short cache)..."
aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --profile "$PROFILE" \
  --cache-control "public, max-age=60"

echo "==> Deployed to https://andymendez.dev"
