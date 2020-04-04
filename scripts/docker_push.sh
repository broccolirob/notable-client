#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker image build -t $DOCKER_HUB_REPO ../
docker image push $DOCKER_HUB_REPO
docker logout
