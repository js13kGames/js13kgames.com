use rocket::{
    Response,
    Request,
    fairing::{Fairing, Info, Kind},
};
use crate::config::CONFIG;

pub struct Cors { }

impl Fairing for Cors {
    fn info(&self) -> Info {
        Info {
            name: "Cors Fairing",
            kind: Kind::Response,
        }
    }

    fn on_response(&self, _: &Request, response: &mut Response) {
        response.set_raw_header("Access-Control-Allow-Origin", CONFIG.app.host.clone());
    }
}
