lazy_static! {
    pub static ref CONFIG: Config = Config::new();
}

pub struct Config {
    pub db: DbConfig,
    pub app: App,
}

pub struct DbConfig {
    pub host: String,
    pub password: String,
    pub user: String,
    pub name: String,
}

pub struct App {
    pub host: String,
}

impl Config {
    pub fn new() -> Config {
        Config {
            app: App {
                host: env!("APP_HOST").to_string(),
            },
            db: DbConfig {
                host: env!("DB_HOST").to_string(),
                password: env!("DB_ROOT_PASSWORD").to_string(),
                user: env!("DB_USER").to_string(),
                name: env!("DB_DATABASE").to_string(),
            },
        }
    }
}
