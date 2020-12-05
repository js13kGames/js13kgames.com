CREATE TABLE PUBLIC.hero_data
(
    id UUID DEFAULT Gen_random_uuid() PRIMARY KEY,
    primary_text CITEXT NOT NULL,
    secondary_text CITEXT NOT NULL,
    countdown_date TIMESTAMP WITH time zone,
    call_to_action_text CITEXT NOT NULL,
    call_to_action_url CITEXT NOT NULL,
    background_image CITEXT NOT NULL,
    active boolean DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL,
    updated_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL
);

CREATE TRIGGER set_updated_at_timestamp before
UPDATE
ON PUBLIC.hero_data FOR each row
EXECUTE PROCEDURE
  PUBLIC.tg_set_updated_at_timestamp();
