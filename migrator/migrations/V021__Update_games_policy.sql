GRANT INSERT (
        name,
        github_link,
        description,
        photo,
        edition_id
    ) ON public.games TO js13k_user;
GRANT UPDATE (
        name,
        github_link,
        description,
        photo,
        edition_id
    ) ON public.games TO js13k_user;
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
CREATE POLICY update_game ON public.games FOR
UPDATE TO js13k_user USING (author_id = app_hidden.current_user_id());
CREATE POLICY insert_game ON public.games FOR
INSERT TO js13k_user WITH CHECK (author_id = app_hidden.current_user_id());
CREATE POLICY select_game ON public.games FOR
SELECT TO PUBLIC USING (true);
