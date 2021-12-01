# blue-green-app
one container returns a blue page, another a green page

# Topology

```
                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                   x                                x
                   x       ********************     x
                   x       *                  *     x
HTTP -> (rand-port) -> 3000  NodeJS / Express *     x
                   x       *                  *     x
                   x       ********************     x
                   x Host                           x
                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

# How to use this repository
Get [Docker](https://docs.docker.com/get-docker/)

Clone the repo and cd into it
```
git clone https://github.com/ion-training/blue-green-app.git && cd blue-green-app
```

Build image
```
docker build -t blue-app ./blue-app/
```
```
docker build -t green-app ./green-app/
```

Image verify
```
docker image ls
```

RUN container
_-P - rand port map to EXPOSED port in dockerfile_
```
docker container run -d -P blue-app
```
```
docker container run -d -P green-app
```

Exposed ports
```
docker container ls
```

# upload image to hub.docker.com (optional)
Create an account on [hub.docker.com](https://hub.docker.com/)
Following steps are based on a new created user on hub.docker.com named `user1234`

Re-tag the image with so that username is pre-pended to the name
```
docker tag blue-app user1234/blue-app
```
```
docker tag blue-app user1234/green-app
```

Login to hub.docker.com on the CLI
```
docker login
```

Upload image to hub.docker.com
```
docker push user1234/blue-app
```
```
docker push user1234/green-app
```

# Sample output
```
$ docker build -t blue-app ./blue-app/
[+] Building 21.5s (12/12) FINISHED                                                                        
 => [internal] load build definition from Dockerfile                                                  0.0s
 => => transferring dockerfile: 188B                                                                  0.0s
 => [internal] load .dockerignore                                                                     0.0s
 => => transferring context: 67B                                                                      0.0s
 => [internal] load metadata for docker.io/library/node:16                                            1.0s
 => [internal] load build context                                                                     0.0s
 => => transferring context: 39.64kB                                                                  0.0s
 => [1/7] FROM docker.io/library/node:16@sha256:580a0850049c59a48f06090edd48c9f966c5e6572bbbabc369b  18.5s
 => => resolve docker.io/library/node:16@sha256:580a0850049c59a48f06090edd48c9f966c5e6572bbbabc369ba  0.0s
 => => sha256:fc9d89b3ca185a65d0e3bef332a173799088338dfd79c77b2440c7cb387ad2e9 2.21kB / 2.21kB        0.0s
 => => sha256:5964aa70c11da0bba5f22dc7f57fb0e85980ce794405c1f0f209817cbf947bcc 7.61kB / 7.61kB        0.0s
 => => sha256:580a0850049c59a48f06090edd48c9f966c5e6572bbbabc369ba3ecbc4855dba 1.21kB / 1.21kB        0.0s
 => => sha256:d17d0de332ca1b34d53ca41c2b39ea52ce72f8c1e81c5200e27a8bade3e6ecbb 7.83MB / 7.83MB        0.7s
 => => sha256:7474d56348f5333567750c1e5f06f899477fd437330627341eafa71bfa1a36ab 10.00MB / 10.00MB      1.5s
 => => sha256:1230f17f526cb07307d41462355b10488b994e8bdafe0d8f275a405fa3b33831 50.44MB / 50.44MB      1.5s
 => => sha256:211c565de40518c5dac4498ccebbf3833fcfaa5db17d4bf94e6bef466136278b 51.84MB / 51.84MB      4.5s
 => => sha256:71337a3dfc6f79fe42b06f2f3872667ca6d9ebac8029afcf6df3b0ee321f509f 192.43MB / 192.43MB    8.8s
 => => sha256:21a74e6891c8aa4324e1d217e8d05e6958c7817cbf1054d46733b6c09bf0b2b1 4.20kB / 4.20kB        1.7s
 => => extracting sha256:1230f17f526cb07307d41462355b10488b994e8bdafe0d8f275a405fa3b33831             3.0s
 => => sha256:41ad039b69fa17005782ec0697e6446b3bedce84995b64ce4e63f77bd80243e6 33.35MB / 33.35MB      4.6s
 => => sha256:9a62e27eca591315f0cdd8e8058e61e47dbd5b4985c3ecaa7dc0d4bdb5afddf8 2.27MB / 2.27MB        4.8s
 => => sha256:1dbf89daa7caf3580874e80db06d1e59e265ad887c70fdd831579f241d2cf18e 453B / 453B            4.7s
 => => extracting sha256:d17d0de332ca1b34d53ca41c2b39ea52ce72f8c1e81c5200e27a8bade3e6ecbb             0.3s
 => => extracting sha256:7474d56348f5333567750c1e5f06f899477fd437330627341eafa71bfa1a36ab             0.3s
 => => extracting sha256:211c565de40518c5dac4498ccebbf3833fcfaa5db17d4bf94e6bef466136278b             2.8s
 => => extracting sha256:71337a3dfc6f79fe42b06f2f3872667ca6d9ebac8029afcf6df3b0ee321f509f             7.5s
 => => extracting sha256:21a74e6891c8aa4324e1d217e8d05e6958c7817cbf1054d46733b6c09bf0b2b1             0.0s
 => => extracting sha256:41ad039b69fa17005782ec0697e6446b3bedce84995b64ce4e63f77bd80243e6             1.4s
 => => extracting sha256:9a62e27eca591315f0cdd8e8058e61e47dbd5b4985c3ecaa7dc0d4bdb5afddf8             0.1s
 => => extracting sha256:1dbf89daa7caf3580874e80db06d1e59e265ad887c70fdd831579f241d2cf18e             0.0s
 => [2/7] WORKDIR /usr/src/app                                                                        0.1s
 => [3/7] COPY package*.json ./                                                                       0.0s
 => [4/7] ADD ./public ./                                                                             0.0s
 => [5/7] ADD ./src ./                                                                                0.0s
 => [6/7] RUN npm install                                                                             1.6s
 => [7/7] COPY . .                                                                                    0.0s
 => exporting to image                                                                                0.1s
 => => exporting layers                                                                               0.1s
 => => writing image sha256:155acbec345e2a2ea3496855a479e78994edb27b1ef2c84aa19dd1f3b6679860          0.0s
 => => naming to docker.io/library/blue-app   
```

```
$ docker build -t green-app ./green-app/
[+] Building 2.4s (12/12) FINISHED                                                                         
 => [internal] load build definition from Dockerfile                                                  0.0s
 => => transferring dockerfile: 191B                                                                  0.0s
 => [internal] load .dockerignore                                                                     0.0s
 => => transferring context: 67B                                                                      0.0s
 => [internal] load metadata for docker.io/library/node:lts                                           0.6s
 => [internal] load build context                                                                     0.0s
 => => transferring context: 39.45kB                                                                  0.0s
 => [1/7] FROM docker.io/library/node:lts@sha256:580a0850049c59a48f06090edd48c9f966c5e6572bbbabc369b  0.0s
 => CACHED [2/7] WORKDIR /usr/src/app                                                                 0.0s
 => CACHED [3/7] COPY package*.json ./                                                                0.0s
 => [4/7] RUN npm install                                                                             1.6s
 => [5/7] ADD ./public ./                                                                             0.0s
 => [6/7] ADD ./src ./                                                                                0.0s
 => [7/7] COPY . .                                                                                    0.0s
 => exporting to image                                                                                0.1s
 => => exporting layers                                                                               0.1s
 => => writing image sha256:3552d8b82510c72f1984a238d40bd121cf7f7828bf2b4fdf4797669df2d57e1c          0.0s
 => => naming to docker.io/library/green-app                                                          0.0s
```

```
$ docker container run -d -P blue-app
b31d4c5d93541d6a99f4be166b8259598bb0f612cfd8e1bbe0bf93f6fe7c0918
```

```
$ docker container run -d -P green-app
f7473e8fb9ae7df7c9c4b2c792f33fa71d7f9b54ac171339593d572a356c8bfd
```

```
docker container ls
CONTAINER ID   IMAGE       COMMAND                  CREATED              STATUS              PORTS                     NAMES
f7473e8fb9ae   green-app   "docker-entrypoint.s…"   33 seconds ago       Up 32 seconds       0.0.0.0:55006->3000/tcp   peaceful_murdock
b31d4c5d9354   blue-app    "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:55005->3000/tcp   xenodochial_knuth
```

```
$ docker container stop peaceful_murdock
peaceful_murdock
```

```
$ docker container stop xenodochial_knuth
xenodochial_knuth
```