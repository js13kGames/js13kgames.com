use std::fs::read_to_string;

lazy_static! {
    pub static ref CONFIG: Config + 'static = Config::new();
}

pub struct Config<'a> {
    pub db: DbConfig<'a>,
    pub app: App<'a>,
}

pub struct DbConfig<'a> {
    pub host: &'a str,
    pub password: &'a str,
    pub user: &'a str,
    pub name: &'a String,
}

pub struct App<'a> {
    pub host: &'a str,
}

impl<'a> Config<'a> {
    pub fn new() -> Config<'a> {
        Config {
            app: App {
                host: env!("APP_HOST"),
            },
            db: DbConfig {
                host: env!("DB_HOST"),
                password: env!("DB_ROOT_PASSWORD"),
                user: env!("DB_USER"),
                name: env!("DB_DATABASE"),
            },
        }
    }
}
