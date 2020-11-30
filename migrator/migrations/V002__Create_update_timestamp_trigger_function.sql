create or replace function tg_set_updated_at_timestamp()
    returns trigger as
$$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

comment on function tg_set_updated_at_timestamp
    is 'Updates "updated_at" column with current timestamp';
