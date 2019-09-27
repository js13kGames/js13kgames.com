use crate::{
    context::context::{ Context },
};

pub struct Query { }

graphql_object!(Query: Context |&self| {
    description: "The root query object of the schema"

    field apiVersion() -> &str {
        "0.1"
    }
}
