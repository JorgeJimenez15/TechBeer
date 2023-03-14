@echo off

cd ../frontend/
pnpm build

cd ../code-splitter/

cd dist
del *.* /s /q

cd ..
node ./index.js