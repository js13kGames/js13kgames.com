#[macro_use] extern crate lazy_static;

mod config;

use crate::config::CONFIG;

fn main() {
    println!("API server will run on {}", CONFIG.app.host.clone());
}
