#!/usr/bin/env bash
set -e

# Usage
# Go to the project you want to improve via this template
# cd ~/git/my-project
# Run this script from the working directory of that project
# ~/git/typescript-node-module-boilerplate/copy-template-into-existing-project.sh

pwd=$(pwd)
name=$(basename "$pwd")

cd "$(dirname "$0")"

cp -rv \
    {package.json,tsconfig.json,.npmignore,.npmrc,.gitignore,.github} \
    "$pwd"

echo "everything copied"

cd -

# Replace template name with folder name
# macOS: add '' after -i like this: sed -i '' "s/…
sed -i "s/typescript-node-module-boilerplate/$name/g" package.json .github/**/*.yml

git --no-pager diff --stat
