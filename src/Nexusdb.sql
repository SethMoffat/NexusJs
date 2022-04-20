CREATE TABLE "Users" (
  "user_id" SERIAL PRIMARY KEY NOT NULL,
  "user_name" VARCHAR(50),
  "password" VARCHAR(40),
  "name" VARCHAR(40),
  "developer_type" VARCHAR(25)
);

CREATE TABLE "Posts" (
  "post_id" SERIAL PRIMARY KEY NOT NULL,
  "code" VARCHAR,
  "description" TEXT,
  "date" date,
  "user_id" INT
);

CREATE TABLE "Comment" (
  "comment_id" SERIAL PRIMARY KEY NOT NULL,
  "date" date,
  "text" TEXT(250),
  "user_id" INT,
  "post_id" INT
);

ALTER TABLE "Posts" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("post_id") REFERENCES "Posts" ("post_id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id");
