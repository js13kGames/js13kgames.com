#!/bin/bash
DIRECTORY=$(cd `dirname $0` && pwd)
cd $DIRECTORY/../

echo "Workin in: `pwd`"
VERSION_TAG=$(git rev-parse --short HEAD)
echo "Current checkout tag is: $VERSION_TAG"

for var in "$@"
do
    echo "Building: services/$var"
    docker build services/$var -t gitgx.jelocartel.com:5000/quake-stats/$var:$VERSION_TAG
    docker push gitgx.jelocartel.com:5000/quake-stats/$var:$VERSION_TAG
done
