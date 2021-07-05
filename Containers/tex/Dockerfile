FROM doratex/texlive2019ja-haranoaji

RUN sed -i -e 's|eoan|focal|g' /etc/apt/sources.list

RUN rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/* && \
    apt update && \
    apt upgrade -y && \
    apt install -y \
    # install git and python
    git \
    python3-pip && \
    # Clean caches
    apt autoremove -y && \
    apt clean

RUN pip3 install Pygments

RUN cpan -fi \
  Log::Log4perl \
  Log::Dispatch::File \
  YAML::Tiny \
  File::HomeDir \
  Unicode::GCString