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
echo Committing...
git commit -m "Deploy to Github Pages"
echo Changes have been commited.
git status

echo Pushing to gh-pages...
git push --force "https://799432ade3f4259d2e527ba39485f72001170ad8@github.com/magiccube/x-challenge-club.git" gh-pages
echo All assets have been updated to date in gh-pages.
