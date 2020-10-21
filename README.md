** Why don't you dockernize? **

# Dockernize Environment
This package provides you the following commands which is run in Docker.

- TexLive
  - latexmk
  - latexdiff-vc (but some options already specified)
  - xelatex
  - synctex
  - pdfcrop
- Redpen (but some additional feature is implemented in CLI)
- ExtraEnvironments
  - dotnet
  - node (but it doesn't work well now)

# Requirements
- Docker
  - Author tests only with Docker on mac
- zsh
  - following command needs zsh feature
    - redpen

# Installation
Just run `install.sh`.

However, one who don't prefer that install script add code into `~/.zshrc` can install manually with same procedure written in `install.sh`.