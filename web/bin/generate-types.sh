#!/bin/bash

set -Eeuo pipefail

echo "Generating Typescript interfaces for PG Tables"

export PGHOST='db'
export PGUSER='postgres'
export PGPASSWORD='postgres'
export PGDATABASE='postgres'
npx schemats generate -c "${DATABASE_URL}" -o src/types/index.ts --noHeader
node --harmony node_modules/pogi/lib/bin/generateInterface >> server/types/index.ts
