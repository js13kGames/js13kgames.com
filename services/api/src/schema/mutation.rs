use crate::{
    context::context::{ Context },
};

pub struct Mutation { }

graphql_object!(Mutation: Context |&self| {
    field exampleMutation(&executor, foo: i32) -> i32 {
        foo
    }
});
