CREATE OR REPLACE FUNCTION public.current_edition() RETURNS UUID AS $$
SELECT id
from editions
order by ends_at DESC;
$$ LANGUAGE sql STABLE;
ALTER TABLE PUBLIC.hero_data
ADD edition_id UUID DEFAULT public.current_edition() NOT NULL REFERENCES public.editions (id) ON DELETE CASCADE;
ALTER TABLE PUBLIC.menu_items
ADD edition_id UUID DEFAULT public.current_edition() NOT NULL REFERENCES public.editions (id) ON DELETE CASCADE;
