use rocket::request::{self, FromRequest};
use rocket::Outcome;
use rocket::http::Status;
use rocket::{Request};

pub struct Context { }

impl juniper::Context for Context {}
