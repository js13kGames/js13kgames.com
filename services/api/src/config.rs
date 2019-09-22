lazy_static! {
    pub static ref CONFIG: Config = Config::new();
}

pub struct Config {
    pub db: DbConfig,
    pub app: App,
}

pub struct DbConfig {
    pub host: &'static str,
    pub password: &'static str,
    pub user: &'static str,
    pub name: &'static str,
}

pub struct App {
    pub host: &'static str,
}

impl Config {
    pub fn new() -> Config {
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
