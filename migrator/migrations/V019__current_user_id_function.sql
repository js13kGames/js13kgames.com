CREATE SCHEMA app_hidden;
GRANT USAGE ON SCHEMA app_hidden TO js13k_anonymous,
    js13k_user;
CREATE OR REPLACE FUNCTION app_hidden.current_user_id() RETURNS UUID AS $$
SELECT id
FROM users
WHERE identity_id = current_setting('user.id', true);
$$ LANGUAGE sql STABLE;
GRANT EXECUTE ON FUNCTION app_hidden.current_user_id() TO js13k_anonymous,
    js13k_user;
ALTER TABLE public.games
ALTER COLUMN author_id
SET DEFAULT app_hidden.current_user_id();
