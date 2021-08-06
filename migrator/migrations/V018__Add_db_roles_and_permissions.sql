CREATE ROLE js13k_anonymous;
CREATE ROLE js13k_user;
GRANT USAGE ON SCHEMA public TO js13k_anonymous,
    js13k_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO js13k_anonymous,
    js13k_user;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO js13k_anonymous,
    js13k_user;
GRANT INSERT (
        name,
        email,
        user_name,
        description,
        avatar,
        identity_id
    ) ON public.users TO js13k_anonymous,
    js13k_user;
GRANT UPDATE (
        name,
        email,
        user_name,
        description,
        avatar,
        identity_id
    ) ON public.users TO js13k_user;
