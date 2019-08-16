#!/bin/bash

# force update of rust image
docker pull rustlang/rust:nightly

# build `rust-builder`
docker build --no-cache ./rust-builder/ -t rust:builder
docker tag rust:builder gitgx.jelocartel.com:5000/rust-builder
docker push gitgx.jelocartel.com:5000/rust-builder

# buld `rust-watcher`
docker build --no-cache ./rust-watcher/ -t rust:watcher
docker tag rust:watcher gitgx.jelocartel.com:5000/rust-watcher
docker push gitgx.jelocartel.com:5000/rust-watcher

#build `rust-base`
docker build --no-cache ./rust-base/ -t rust:base
docker tag rust:base gitgx.jelocartel.com:5000/rust-base
docker push gitgx.jelocartel.com:5000/rust-base
