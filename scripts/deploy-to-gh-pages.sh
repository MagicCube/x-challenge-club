#!/bin/bash

function make
{
    gulp
    rm -rf build
    mkdir build
    cp index.html build
    cp -r assets build
    cp -r data build
    cp -r images build
}

# config
git config --global user.email "henry1943@163.com"
git config --global user.name "Travis CI"

# build (CHANGE THIS)
make

# deploy
echo Deploying...
cd build
git init
git add .
git commit -m "Deploy to Github Pages"

echo Pushing to gh-pages...
git push --force --quiet "https://$GH_TOKEN@github.com/magiccube/x-challenge-club.git" master:gh-pages > /dev/null 2>&1
echo All assets have been updated to date in gh-pages.
