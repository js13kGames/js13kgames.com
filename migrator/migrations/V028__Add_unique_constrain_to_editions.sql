ALTER TABLE public.editions
ADD constraint uq_name_per_edition unique (name)
