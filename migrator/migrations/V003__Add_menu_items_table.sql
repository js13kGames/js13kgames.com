CREATE TABLE PUBLIC.menu_items
(
    id UUID DEFAULT Gen_random_uuid() PRIMARY KEY,
    title CITEXT NOT NULL,
    url CITEXT NOT NULL,
    active boolean DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL,
    updated_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL
);

CREATE TRIGGER set_updated_at_timestamp before
UPDATE
ON PUBLIC.menu_items FOR each row
EXECUTE PROCEDURE
  PUBLIC.tg_set_updated_at_timestamp();
