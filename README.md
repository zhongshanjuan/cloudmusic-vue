npm config set registry https://registry.npm.taobao.org

npm install -g @vue/cli --registry=https://registry.npm.taobao.org



### neteasecloudmusicapi Docker镜像
    docker pull gnehs/neteasecloudmusicapi-docker

    $ docker images
    REPOSITORY                          TAG                 IMAGE ID            CREATED             SIZE
    gnehs/neteasecloudmusicapi-docker   latest              2069931de8ac        4 weeks ago         130MB


    $ docker run -p 3000:3000 -d gnehs/neteasecloudmusicapi-docker
    58f7fe69db51731c72e691af2d6ac3038b79aa451d1b41f3864940a239366808
