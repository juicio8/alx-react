#!/usr/bin/bash
dest="$2/dashboard"
if [ -d "$2/dashboard"]
 then
 echo "copying..."
else
 echo "creating and copying..."
 mkdir -p "$dest/"
fi

if [ -e "$1/scripts.sh"]
 then
 cp -r "$1/scripts.sh" $dest
else
 echo "skipped script.sh cuz it wasn't present"
fi

cp -r "$1/__mocks__" $dest
cp -r "$1/assets" $dest
cp -r "$1/config" $dest
cp -r "$1/dist" $dest
cp -r "$1/src" $dest
cp "$1/.babelrc" $dest
cp "$1/jest.config.js" $dest
cp "$1/package.json" $dest
