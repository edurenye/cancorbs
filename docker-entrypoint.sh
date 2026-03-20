#!/bin/sh
set -e

# Persist SQLite on the mounted volume (see compose.yaml)
export DATABASE_URL="${DATABASE_URL:-file:/data/dev.db}"
mkdir -p /data

# Create / migrate schema if the DB is new or empty
npx prisma db push

exec ./node_modules/.bin/next start -H 0.0.0.0 -p "${PORT:-3000}"
