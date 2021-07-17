create type user_type_t as enum (
    'regular',
    'admin',
    'expert',
    'team'
    );

CREATE TABLE PUBLIC.users
(
    id UUID DEFAULT Gen_random_uuid() PRIMARY KEY,
    name CITEXT NOT NULL,
    email CITEXT NOT NULL,
    user_name CITEXT NOT NULL,
    description CITEXT NOT NULL,
    avatar CITEXT NOT NULL,
    kind user_type_t DEFAULT 'regular' NOT NULL,
    active boolean DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL,
    updated_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL
);

CREATE TRIGGER set_updated_at_timestamp before
UPDATE
ON PUBLIC.users FOR each row
EXECUTE PROCEDURE
  PUBLIC.tg_set_updated_at_timestamp();

CREATE TABLE PUBLIC.games
(
    id UUID DEFAULT Gen_random_uuid() PRIMARY KEY,
    name CITEXT NOT NULL,
    github_link CITEXT NOT NULL,
    description CITEXT NOT NULL,
    photo CITEXT NOT NULL,
    created_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL,
    updated_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL
);

CREATE TRIGGER set_updated_at_timestamp before
UPDATE
ON PUBLIC.games FOR each row
EXECUTE PROCEDURE
  PUBLIC.tg_set_updated_at_timestamp();
