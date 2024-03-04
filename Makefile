SSH_SERVER = $(shell cat server.txt)
REMOTE_DIR = /var/www/lintian

all: build

build:
	jekyll build

start:
	jekyll serve -w

deploy:
	rsync -rlptv -e ssh --delete --exclude files --exclude img _site/ $(SSH_SERVER):$(REMOTE_DIR)
