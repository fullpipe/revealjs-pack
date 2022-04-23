#!make
.DEFAULT_GOAL := push

build:
	docker build -t fullpipe/revealjs-pack .

push: build
	docker push fullpipe/revealjs-pack
