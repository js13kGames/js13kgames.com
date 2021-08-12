ALTER TABLE PUBLIC.games
-- User-editable: draft vs. public.
ADD is_published BOOLEAN NOT NULL DEFAULT FALSE,
-- Admin-editable, overrides is_published.
ADD is_hidden BOOLEAN NOT NULL DEFAULT FALSE;

GRANT INSERT (
        is_published
    ) ON public.games TO js13k_user;

GRANT UPDATE (
        is_published
    ) ON public.games TO js13k_user;
