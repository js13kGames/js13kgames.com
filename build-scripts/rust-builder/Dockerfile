#FROM ubuntu:latest
FROM rustlang/rust:nightly

ENV TARGET=x86_64-unknown-linux-musl
ENV BUILD_DIR=/src/target/x86_64-unknown-linux-musl/release/

RUN apt-get update && \
    apt-get install \
        curl \
        gcc \
        musl-tools \
        make \
        musl-dev \
        file \
        git \
        g++ \
        curl \
        pkgconf \
        ca-certificates \
        xutils-dev \
        libssl-dev \
        automake \
        autoconf \
        libtool \
        cmake \
-y
RUN rustup target add ${TARGET}

ENV SSL_VER=1.0.2n \
    CURL_VER=7.58.0 \
    ZLIB_VER=1.2.11 \
    PQ_VER=9.6.8 \
    PREFIX=/musl \
    PKG_CONFIG_PATH=/usr/local/lib/pkgconfig \
    LD_LIBRARY_PATH=$PREFIX

# Set up a prefix for musl build libraries, make the linker's job of finding them easier
# Primarily for the benefit of postgres.
# Lastly, link some linux-headers for openssl 1.1 (not used herein)
RUN mkdir $PREFIX && \
    echo "$PREFIX/lib" >> /etc/ld-musl-x86_64.path && \
    ln -s /usr/include/x86_64-linux-gnu/asm /usr/include/x86_64-linux-musl/asm && \
    ln -s /usr/include/asm-generic /usr/include/x86_64-linux-musl/asm-generic && \
    ln -s /usr/include/linux /usr/include/x86_64-linux-musl/linux

# Build zlib (used in openssl and pq)
RUN curl -sSL http://zlib.net/zlib-$ZLIB_VER.tar.gz | tar xz && \
    cd zlib-$ZLIB_VER && \
    CC="musl-gcc -fPIC -pie" LDFLAGS="-L$PREFIX/lib" CFLAGS="-I$PREFIX/include" ./configure --static --prefix=$PREFIX && \
    make -j$(nproc) && make install && \
    cd .. && rm -rf zlib-$ZLIB_VER

# Build openssl (used in curl and pq)
# Would like to use zlib here, but can't seem to get it to work properly
# TODO: fix so that it works
RUN curl -sSL http://www.openssl.org/source/openssl-$SSL_VER.tar.gz | tar xz && \
    cd openssl-$SSL_VER && \
    ./Configure no-zlib no-shared -fPIC --prefix=$PREFIX --openssldir=$PREFIX/ssl linux-x86_64 && \
    env C_INCLUDE_PATH=$PREFIX/include make depend 2> /dev/null && \
    CC=musl-gcc; make -j$(nproc) && make install && \
    cd .. && rm -rf openssl-$SSL_VER

# Build curl (needs with-zlib and all this stuff to allow https)
# curl_LDFLAGS needed on stretch to avoid fPIC errors - though not sure from what
RUN curl -sSL https://curl.haxx.se/download/curl-$CURL_VER.tar.gz | tar xz && \
    cd curl-$CURL_VER && \
    CC="musl-gcc -fPIC -pie" LDFLAGS="-L$PREFIX/lib" CFLAGS="-I$PREFIX/include" ./configure \
      --enable-shared=no --with-zlib --enable-static=ssl --enable-optimize --prefix=$PREFIX \
      --with-ca-path=/etc/ssl/certs/ --with-ca-bundle=/etc/ssl/certs/ca-certificates.crt --without-ca-fallback && \
    make -j$(nproc) curl_LDFLAGS="-all-static" && make install && \
    cd .. && rm -rf curl-$CURL_VER

ENV PATH=$PREFIX/bin:$PATH \
    PKG_CONFIG_ALLOW_CROSS=true \
    PKG_CONFIG_ALL_STATIC=true \
    PKG_CONFIG_PATH=$PREFIX/lib/pkgconfig \
    OPENSSL_STATIC=true \
    OPENSSL_DIR=$PREFIX


ONBUILD COPY . /src
ONBUILD WORKDIR /src

ONBUILD RUN PKG_CONFIG_ALLOW_CROSS=1 cargo build --release --target=${TARGET}

# Build artifacts will be available in /app.
RUN mkdir /app
# Copy the "interesting" files into /app.
ONBUILD RUN find ${BUILD_DIR} \
                -regextype egrep \
                # The interesting binaries are all directly in ${BUILD_DIR}.
                -maxdepth 1 \
                # Well, binaries are executable.
                -executable \
                # Well, binaries are files.
                -type f \
                # Filter out tests.
                ! -regex ".*\-[a-fA-F0-9]{16,16}$" \
                # Copy the matching files into /app.
                -exec cp {} /app \;

ONBUILD RUN echo "The following files will be copied to the runtime image: $(ls /app)"
