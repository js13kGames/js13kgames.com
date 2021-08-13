ALTER TABLE PUBLIC.games
ADD editable_until TIMESTAMP WITH TIME ZONE NOT NULL;

CREATE OR REPLACE FUNCTION tg_set_editable_until()
RETURNS TRIGGER AS $$
    BEGIN
        SELECT ends_at INTO NEW.editable_until FROM editions WHERE id = NEW.edition_id;
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION tg_set_editable_until IS
    'Updates editable_until with the deadline of the edition.';

CREATE TRIGGER set_editable_until BEFORE INSERT ON PUBLIC.games
    FOR EACH ROW EXECUTE PROCEDURE tg_set_editable_until();

CREATE OR REPLACE FUNCTION tg_validate_editable_until()
RETURNS TRIGGER AS $$
    BEGIN
        IF NEW.editable_until <> OLD.editable_until THEN
            -- editable_until can only be changed by the admin; always allow
            -- such changes to make it possible to change editable_until itself.
            RETURN NEW;
        END IF;

        -- NEW.updated_at is the time the current update operation, set by the
        -- tg_set_updated_at_timestamp trigger. It's guaranteed to run first
        -- because triggers run in the alphabetical order by trigger name.
        IF NEW.updated_at > OLD.editable_until THEN
            RAISE EXCEPTION 'The deadline for editing this game has passed.';
        END IF;

        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION tg_validate_editable_until IS
    'Validate that the game is being edited before the deadline.';

CREATE TRIGGER validate_editable_until BEFORE UPDATE ON PUBLIC.games
    FOR EACH ROW EXECUTE PROCEDURE tg_validate_editable_until();
