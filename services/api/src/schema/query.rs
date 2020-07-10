use crate::{
    context::context::{ Context },
    resolvers::{ user_resolver::user_resolver },
};

pub struct Query { }

graphql_object!(Query: Context |&self| {
    description: "The root query object of the schema"

    field apiVersion() -> &str {
        "0.1"
    }

    field user() -> String {
        user_resolver()
    }
});
