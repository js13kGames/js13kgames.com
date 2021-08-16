DELETE FROM menu_items
WHERE url = '/rules';
INSERT INTO "public"."menu_items" ("title", "url", "active", "order_number")
VALUES ('Rules', '/page/rules', 'true', 2);
