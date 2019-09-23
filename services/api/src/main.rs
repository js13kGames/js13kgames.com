#[macro_use] extern crate lazy_static;

mod config;
mod context;

use crate::config::CONFIG;

fn main() {
    println!("API server will run on {}", CONFIG.app.host);
}
