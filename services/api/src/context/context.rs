use rocket::request::{self, FromRequest};
use rocket::Outcome;
use rocket::http::Status;
use rocket::{Request};

pub struct Context { }

impl juniper::Context for Context {}

#[derive(Debug)]
pub enum ContextError {
    Example
}

impl<'a, 'r> FromRequest<'a, 'r> for Context {
    type Error = ContextError;

    fn from_request(request: &'a Request<'r>) -> request::Outcome<Self, Self::Error> {
        Outcome::Success(Context { })
    }
}
