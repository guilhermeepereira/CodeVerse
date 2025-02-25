#!/bin/bash

# Function to stop the containers when exiting
cleanup() {
    docker compose -f infra/compose.yaml down
    exit 0
}

# Capture only SIGINT (Ctrl+C) and SIGTERM, but NOT EXIT
trap cleanup INT TERM

# Run Next.js in the background
npx next dev &

# Wait for the process to complete
wait