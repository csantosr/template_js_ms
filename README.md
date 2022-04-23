# Template Javascript Microsevice

This projects works as a template for creating a REST API using Express and MySQL.

## Usage
1. Install docker. [Link](https://docs.docker.com/get-docker/)
1. Clone the repo  
  ```git clone git@github.com:csantosr/template_mysql_db.git```
1. Change environmental variables that won't change across environments (dev, stage, producton)
   1. Go to `.eg.env`
   2. Edit the variables you consider won't change. e.g. `CONTAINER_PREFIX`