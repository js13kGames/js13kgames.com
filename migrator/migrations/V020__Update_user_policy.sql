ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY update_users ON public.users FOR
UPDATE TO js13k_user USING (id = app_hidden.current_user_id());
CREATE POLICY select_users ON public.users FOR
SELECT TO PUBLIC USING (true);
