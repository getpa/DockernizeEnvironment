FROM doratex/texlive2019ja-haranoaji

RUN apt update && \
    apt upgrade -y && \
    apt install -y \
    # install git
    git && \
    # Clean caches
    apt autoremove -y && \
    apt clean && \
    rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*