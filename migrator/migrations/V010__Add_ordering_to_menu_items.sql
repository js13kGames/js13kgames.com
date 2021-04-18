DROP TABLE IF EXISTS PUBLIC.menu_items;

CREATE TABLE PUBLIC.menu_items
(
    id UUID DEFAULT Gen_random_uuid() PRIMARY KEY,
    title CITEXT NOT NULL,
    url CITEXT NOT NULL,
    active boolean DEFAULT false NOT NULL,
    order_number smallint,
    created_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL,
    updated_at TIMESTAMP WITH time zone DEFAULT Now() NOT NULL
);

CREATE TRIGGER set_updated_at_timestamp before
UPDATE
ON PUBLIC.menu_items FOR each row
EXECUTE PROCEDURE
  PUBLIC.tg_set_updated_at_timestamp();

INSERT INTO
    "public"."menu_items" ("title", "url", "order_number", "active")
VALUES
    ('Winners', '/winners', 1,  'true'),
    ('Games', '/entries', 0, 'true'),
    ('Partnership', '/partners', 5, 'true'),
    ('Experts', '/experts', 3, 'true'),
    ('Prizes', '/prizes', 4, 'true'),
    ('Rules', '/rules', 2, 'true');
