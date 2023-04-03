cd ../frontend/
pnpm build

cd ../code-splitter/
rm -rf ./dist/*
node ./index.js