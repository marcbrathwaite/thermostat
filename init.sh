#!/bin/sh
# Install server dependencies
echo '### Install server dependencies'
npm install

#Install ui dependencies
echo '### Install ui dependencies'
cd ui
yarn install

