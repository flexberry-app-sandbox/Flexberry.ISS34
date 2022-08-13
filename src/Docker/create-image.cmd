docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss34/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss34/app ../..
