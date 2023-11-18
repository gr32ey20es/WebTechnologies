-- Adminer 4.8.1 PostgreSQL 16.1 (Debian 16.1-1.pgdg120+1) dump

DROP TABLE IF EXISTS "exams";
DROP SEQUENCE IF EXISTS exams_id_seq;
CREATE SEQUENCE exams_id_seq INCREMENT 1 MINVALUE 2 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."exams" (
    "id" integer DEFAULT nextval('exams_id_seq') NOT NULL,
    "title" character(39) NOT NULL,
    "questions" json NOT NULL,
    "answers" json NOT NULL,
    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

TRUNCATE "exams";
INSERT INTO "exams" ("id", "title", "questions", "answers") VALUES
(1,	'Bai kiem tra',	'{"timeLimit":0,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}');

SELECT setval('exams_id_seq', (SELECT MAX(id) FROM exams));

-- 2023-11-18 02:05:04.475095+00