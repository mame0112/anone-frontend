#!/bin/sh

echo "Build start"
ng build --prod --output-path=./dist/
echo "Build end. Copy start"
cp -r ./dist/ /Users/kosukeEndo/Documents/workspace2/Anone/src/main/webapp/dist/
echo "Copy finished"