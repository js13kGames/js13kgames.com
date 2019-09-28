#![feature(decl_macro, proc_macro_hygiene)]

#[macro_use] extern crate juniper;
#[macro_use] extern crate lazy_static;
#[macro_use] extern crate rocket;
#[macro_use] extern crate serde_derive;
#[macro_use] extern crate rocket_contrib;

use juniper::{RootNode, };
use rocket_contrib::json::{Json, JsonValue};

use rocket::{Response, Request};
use rocket::response::content;
use rocket::State;

mod juniper_rocket;
mod juniper_playground;
mod config;
mod context;
mod schema;

use crate::{
    context::context::Context,
    schema::{
        query::Query,
        mutation::Mutation,
    },
    config::{
        CONFIG,
    },
};

#[catch(500)]
fn error_500(_req: &Request) -> Json<JsonValue> {
    Json(json!({
        "status": 500,
        "error": "Internal Server Error".to_string()
    }))
}

#[catch(404)]
fn error_404(_req: &Request) -> Json<JsonValue> {
    Json(json!({
        "status": 404,
        "error": "Resource not found".to_string()
    }))
}

type Schema = RootNode<'static, Query, Mutation>;

#[options("/graphql")]
fn options_handler<'a>() -> Response<'a> {
    Response::build()
        .raw_header("Access-Control-Allow-Origin", CONFIG.app.host)
        .raw_header("Access-Control-Allow-Methods", "OPTIONS, POST, GET")
        .raw_header("Access-Control-Allow-Headers", "Content-Type")
        .finalize()
}

#[post("/graphql", data = "<request>")]
fn post_graphql_handler(
    context: Context,
    request: juniper_rocket::GraphQLRequest,
    schema: State<Schema>,
) -> juniper_rocket::GraphQLResponse {
    request.execute(&schema, &context)
}

fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .register(catchers![
            error_500,
            error_404,
        ])
        .manage(Schema::new(
            Query {},
            Mutation {},
        ))
        .mount("/", routes![
            post_graphql_handler,
            options_handler,
        ])
}

fn main() {
    println!("API server run on {}", CONFIG.app.host);
    rocket().launch();
}
