CREATE TABLE PUBLIC.editions
(
    id UUID DEFAULT Gen_random_uuid() PRIMARY KEY,
    name CITEXT NOT NULL,
    theme CITEXT NOT NULL,
    starts_at TIMESTAMP WITH TIME ZONE NOT NULL,
    ends_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT Now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT Now() NOT NULL
);

CREATE TRIGGER set_updated_at_timestamp before
UPDATE
ON PUBLIC.editions FOR each row
EXECUTE PROCEDURE
  PUBLIC.tg_set_updated_at_timestamp();
