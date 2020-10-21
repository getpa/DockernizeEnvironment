# redpen

[![CircleCI](https://circleci.com/gh/tmknom/redpen.svg?style=svg)](https://circleci.com/gh/tmknom/redpen)
[![Docker Build Status](https://img.shields.io/docker/cloud/build/tmknom/redpen.svg)](https://hub.docker.com/r/tmknom/redpen/builds/)
[![Docker Automated build](https://img.shields.io/docker/cloud/automated/tmknom/redpen.svg)](https://hub.docker.com/r/tmknom/redpen/)
[![MicroBadger Size](https://img.shields.io/microbadger/image-size/tmknom/redpen.svg)](https://microbadger.com/images/tmknom/redpen)
[![MicroBadger Layers](https://img.shields.io/microbadger/layers/tmknom/redpen.svg)](https://microbadger.com/images/tmknom/redpen)
[![License](https://img.shields.io/github/license/tmknom/redpen.svg)](https://opensource.org/licenses/Apache-2.0)

A proofreading tool.

This is [RedPen](https://github.com/redpen-cc/redpen) wrapper.

## Requirements

- [Docker](https://www.docker.com/)

## Usage

### Proofread markdown

 ```sh
docker run --rm -v $PWD:/work tmknom/redpen --format markdown --lang en **/*.md
```

### Proofread review

 ```sh
docker run --rm -v $PWD:/work tmknom/redpen --format review --lang ja **/*.re
```

### Help

```sh
docker run --rm tmknom/redpen --help
```

## Makefile targets

```text
build                          Build docker image
format                         Format code
help                           Show help
install                        Install requirements
lint                           Lint code
```

## Development

### Installation

```shell
git clone git@github.com:tmknom/redpen.git
cd redpen
make install
```

### Deployment

Automatically deployed by "[DockerHub Automated Build](https://docs.docker.com/docker-hub/builds/)" after merge.

### Deployment Pipeline

1. GitHub - Version Control System
   - <https://github.com/tmknom/redpen>
2. CircleCI - Continuous Integration
   - <https://circleci.com/gh/tmknom/redpen>
3. Docker Hub - Docker Registry
   - <https://hub.docker.com/r/tmknom/redpen>
4. MicroBadger - Docker Inspection
   - <https://microbadger.com/images/tmknom/redpen>

## License

Apache 2 Licensed. See LICENSE for full details.
