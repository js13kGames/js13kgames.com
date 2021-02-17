#!/bin/bash

cd /web
npx graphql-codegen --config /web/graphql/config.json --project js13k
