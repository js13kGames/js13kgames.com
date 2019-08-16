FROM rustlang/rust:nightly

WORKDIR /usr/src/

RUN apt-get update && apt-get install cmake -y

RUN cargo install cargo-watch

ENV PATH /usr/src/target/.bin:$PATH

WORKDIR /usr/src/app

EXPOSE 8000

CMD ["cargo", "watch", "-x", "'run'"]
