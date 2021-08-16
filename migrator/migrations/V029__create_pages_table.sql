CREATE TABLE PUBLIC.pages (
    id UUID DEFAULT Gen_random_uuid() PRIMARY KEY,
    key CITEXT NOT NULL,
    title CITEXT NOT NULL,
    content TEXT NOT NULL,
    edition_id UUID DEFAULT public.current_edition() NOT NULL REFERENCES public.editions (id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT Now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT Now() NOT NULL,
    constraint uq_edition_key unique (edition_id, key)
);
CREATE TRIGGER set_updated_at_timestamp before
UPDATE ON PUBLIC.pages FOR each row EXECUTE PROCEDURE PUBLIC.tg_set_updated_at_timestamp();
