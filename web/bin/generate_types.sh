#!/bin/bash

set -Eeuo pipefail

echo "Generating Typescript interfaces for PG Tables"

export PGHOST='db'
export PGUSER='postgres'
export PGPASSWORD='postgres'
export PGDATABASE='postgres'
npx schemats generate -c "${DATABASE_URL}" -o /web/server/types/index.ts --noHeader
node --harmony web/node_modules/pogi/lib/bin/generateInterface >> /web/server/types/index.ts
