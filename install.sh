#!/bin/zsh

if [[ ! -n "${DOCKERNIZE_ENV}" ]]; then
  echo "export DOCKERNIZE_ENV=${PWD}" >> ~/.zshrc
  echo "export PATH=${DOCKERNIZE_ENV}/bin:\$PATH" >> ~/.zshrc
  
  #build redpen image
  cd ./Containers/redpen
  make build

  #build texlive image
  cd ../tex
  ./build.sh
fi