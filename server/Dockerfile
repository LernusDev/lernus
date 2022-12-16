FROM node

COPY . /code
WORKDIR /code
RUN yarn
RUN yarn db:setup

ENTRYPOINT yarn dev