FROM node:20.11.0
WORKDIR /usr/src/app
RUN apt-get update -qq && \
    apt-get install -y vim && \
    rm -rf /var/lib/apt/lists/* && \
    echo "PS1='\${debian_chroot:+(\$debian_chroot)}\[\033[01;32m\]\u@\H\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\] $ '" >> /root/.bashrc && \
    echo "export PATH=\$PATH:\`yarn bin -g\`" >> /root/.bashrc
