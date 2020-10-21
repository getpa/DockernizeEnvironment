FROM openjdk:8-alpine

# Build-time metadata as defined at http://label-schema.org
ARG BUILD_DATE
ARG VCS_REF
ARG VERSION
ARG REPO_NAME
LABEL org.label-schema.vendor="tmknom" \
      org.label-schema.name=$REPO_NAME \
      org.label-schema.description="A proofreading tool." \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.version=$VERSION \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vcs-url="https://github.com/$REPO_NAME" \
      org.label-schema.usage="https://github.com/$REPO_NAME/blob/master/README.md#usage" \
      org.label-schema.docker.cmd="docker run --rm -v \$PWD:/work $REPO_NAME --format markdown --lang ja ./*.md" \
      org.label-schema.schema-version="1.0"

ARG MODULE_VERSION=1.10.4

WORKDIR /usr/local
SHELL ["/bin/ash", "-o", "pipefail", "-c"]
RUN set -x && \
    wget -q https://github.com/redpen-cc/redpen/releases/download/redpen-${MODULE_VERSION}/redpen-${MODULE_VERSION}.tar.gz -O - | tar xz && \
    cp -av redpen-distribution-${MODULE_VERSION}/* /usr/local && \
    rm -rf redpen-distribution-${MODULE_VERSION} && \
    rm -rf bin/redpen-* sample-doc/

COPY logback.xml /usr/local/conf/logback.xml

WORKDIR /work
ENTRYPOINT ["/usr/local/bin/redpen"]
CMD ["--help"]
