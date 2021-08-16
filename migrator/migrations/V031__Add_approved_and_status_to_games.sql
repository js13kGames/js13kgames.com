ALTER TABLE PUBLIC.games -- Admin-editable, draft vs published
ADD is_approved BOOLEAN NOT NULL DEFAULT FALSE,
    ADD upload_data JSONB;
