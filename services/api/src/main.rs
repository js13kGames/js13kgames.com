#![feature(decl_macro, proc_macro_hygiene)]

#[macro_use] extern crate juniper;
#[macro_use] extern crate lazy_static;

mod config;
mod context;
mod schema;

use crate::config::CONFIG;

fn main() {
    println!("API server will run on {}", CONFIG.app.host);
}
