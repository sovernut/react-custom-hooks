value=$(cat ./src/name)
echo "$value"
mv ./src ./src_"$value"
mv ./src_basicHook ./src

