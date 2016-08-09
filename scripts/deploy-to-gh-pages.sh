#!/bin/bash

function make
{
    gulp
    rm -rf build
    mkdir build
    cp index.html build
    cp -avr assets build
    cp -avr data build
    cp -avr images build
}

set -o errexit

# config
git config --global user.email "henry1943@163.com"
git config --global user.name "Travis CI"

# build (CHANGE THIS)
make

# deploy
cd build
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force "https://799432ade3f4259d2e527ba39485f72001170ad8@github.com/magiccube/x-challenge-club.git" master:gh-pages > /dev/null 2>&1
