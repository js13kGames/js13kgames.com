create function public.get_or_create_user(
    name citext,
    email citext,
    user_name citext,
    identity citext,
    avatar citext
) returns public.users as $$
declare user_id uuid;
existing_user public.users;
begin
select id into user_id
from public.users
where identity_id = identity
limit 1;
if user_id is null then
insert into public.users (
        name,
        email,
        user_name,
        avatar,
        active,
        identity_id,
        description
    )
values (
        name,
        email,
        user_name,
        avatar,
        true,
        identity,
        ''
    );
end if;
select * into existing_user
from public.users
where identity_id = identity;
return existing_user;
end;
$$ language plpgsql volatile security definer
set search_path to pg_catalog,
    public,
    pg_temp;
