from fabric.api import *

env.hosts = ['aws']
env.use_ssh_config = True

def exists(path):
    with settings(warn_only=True):
        return run('test -e %s' % path)

def deploy():
    code_dir = "$GOPATH/src/github.com/nnti3n/voz-archive-client"
    with settings(warn_only=True):
        if exists(code_dir).failed:
            run("go get github.com/nnti3n/voz-archive-client")
    with cd(code_dir):
        run("git pull")
        run("yarn install")
        run("yarn build")
        run("sudo systemctl restart voz-client")

