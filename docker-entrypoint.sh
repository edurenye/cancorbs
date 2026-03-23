#!/bin/sh
set -e

mkdir -p /data

exec ./node_modules/.bin/next start -H 0.0.0.0 -p "${PORT:-3000}"
