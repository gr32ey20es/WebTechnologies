-- Adminer 4.8.1 PostgreSQL 16.1 (Debian 16.1-1.pgdg120+1) dump

------------------------------------------------------------------
DROP TABLE IF EXISTS "courses";
DROP SEQUENCE IF EXISTS courses_id_seq;

CREATE SEQUENCE courses_id_seq INCREMENT 1 MINVALUE 2 MAXVALUE 2147483647 CACHE 1;
CREATE TABLE "public"."courses" (
    "CourseID" integer DEFAULT nextval('courses_id_seq') NOT NULL,
    "CourseName" character varying(45) NOT NULL,
    "CourseDescription" text NOT NULL,
    "ImagePath" character varying NOT NULL,
    CONSTRAINT "courses_CourseID" PRIMARY KEY ("CourseID")
) WITH (oids = false);


INSERT INTO "courses" ("CourseID", "CourseName", "CourseDescription", "ImagePath") VALUES
(
    1,
    'Introduction to Programming',
    'Learn the fundamentals of programming using popular languages like Python and Java.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    2,
    'Web Development 101',
    'Dive into web development and learn HTML, CSS, and JavaScript to build interactive websites.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    3,
    'Data Science Fundamentals',
    'Explore the basics of data science, including data analysis, visualization, and machine learning.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    4,
    'Mobile App Development',
    'Build mobile applications for iOS and Android using frameworks like React Native and Flutter.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    5,
    'Database Management',
    'Learn about designing and managing databases using SQL and database management systems.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    6,
    'Artificial Intelligence',
    'Explore the field of artificial intelligence, including machine learning, neural networks, and natural language processing.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    7,
    'Cybersecurity Essentials',
    'Understand the fundamentals of cybersecurity and learn how to protect computer systems from threats.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    8,
    'Graphic Design Basics',
    'Learn the principles of graphic design and how to use popular design tools like Adobe Photoshop and Illustrator.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    9,
    'Project Management Fundamentals',
    'Develop essential project management skills and techniques to successfully lead and execute projects.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    10,
    'Digital Marketing Strategies',
    'Explore various digital marketing strategies, including SEO, social media marketing, and email marketing.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    11,
    'Business Finance Principles',
    'Learn the fundamentals of business finance, including financial statements, budgeting, and investment analysis.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
),
(
    12,
    'Human Resources Management',
    'Gain an understanding of HR management principles, including recruitment, employee training, and performance evaluation.',
    'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Listco-1024x807.jpg'
);

SELECT setval('courses_id_seq', (SELECT MAX("CourseID") FROM courses));


---------------------------------------------------------------------------------------------------------------------------
DROP TABLE IF EXISTS "exams";
DROP SEQUENCE IF EXISTS exams_id_seq;

CREATE SEQUENCE exams_id_seq INCREMENT 1 MINVALUE 2 MAXVALUE 2147483647 CACHE 1;
CREATE TABLE "public"."exams" (
    "ExamID" integer DEFAULT nextval('exams_id_seq') NOT NULL,
    "CourseID" integer NOT NULL,
    "title" character(39) NOT NULL,
    "questions" json NOT NULL,
    "answers" json NOT NULL,
    CONSTRAINT "exams_ExamID" PRIMARY KEY ("ExamID")
) WITH (oids = false);

INSERT INTO "exams" ("ExamID", "CourseID", "title", "questions", "answers") VALUES
(1,	1,	'Đề thi số 1',	'{"timeLimit":180,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(2,	2,	'Đề thi số 2',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(3,	3,	'Đề thi số 3',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(4,	1,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(5,	2,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(6,	3,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(7,	4,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(8,	1,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(9,	5,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(10, 6,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(11, 7,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}'),
(12, 8,	'Đề thi số 1',	'{"timeLimit":60,"questions":[{"type":"radio","question":"1","options":["1","1"]},{"type":"checkbox","question":"2","options":["2","2"]}]}',	'{"answers":[[0],[0,1]]}');

SELECT setval('exams_id_seq', (SELECT MAX("ExamID") FROM exams));


------------------------------------------------------------------------------------------------
DROP TABLE IF EXISTS "roles";
CREATE TABLE "public"."roles" (
    "RoleId" integer NOT NULL,
    "Role" character varying(45) NOT NULL,
    CONSTRAINT "roles_pkey" PRIMARY KEY ("RoleId")
) WITH (oids = false);

INSERT INTO "roles" ("RoleId", "Role") VALUES
(1,	'admin'),
(2,	'student'),
(3,	'teacher');


---------------------------------------------------------------------------------------
DROP TABLE IF EXISTS "students";
DROP SEQUENCE IF EXISTS "students_StudentID_seq";
CREATE SEQUENCE "students_StudentID_seq" INCREMENT 1 MINVALUE 2 MAXVALUE 2147483647 CACHE 1;
CREATE TABLE "public"."students" (
    "StudentID" integer NOT NULL,
    "UserId" integer NOT NULL,
    "StudentCode" integer,
    "BirthOfDate" date,
    "Address" character varying(255),
    "PhoneNumber" character varying(12),
    CONSTRAINT "students_StudentID" PRIMARY KEY ("StudentID")
) WITH (oids = false);

INSERT INTO "students" ("StudentID", "UserId", "StudentCode") VALUES
(1,	1,	20173224),
(2,	2,	20171234);

--------------------------------------------------------------------------------------------------------------
DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS "users_UserId_seq";
CREATE SEQUENCE "users_UserId_seq" AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE "public"."users" (
    "UserId" integer DEFAULT nextval('"users_UserId_seq"') NOT NULL,
    "Email" character varying(45) NOT NULL,
    "Password" character varying(45) NOT NULL,
    "RoleId" integer NOT NULL,
    "UserName" character varying(45),
    CONSTRAINT "users_pkey" PRIMARY KEY ("UserId")
) WITH (oids = false);

INSERT INTO "users" ("UserId", "Email", "Password", "RoleId", "UserName") VALUES
(1,	'email1@example.com',	'password1',	1,	'Admin'),
(2,	'email2@example.com',	'password2',	3,	'Thay giao 1'),
(3,	'email3@example.com',	'password3',	3,	'Thay giao 2'),
(4,	'email4@example.com',	'password4',	2,	'Hoc sinh 1'),
(5,	'email5@example.com',	'password5',	2,	'Hoc sinh 2');


--------------------------------------------------------------
DROP TABLE IF EXISTS "enrollments";
DROP SEQUENCE IF EXISTS enrollments_id_seq;

CREATE SEQUENCE enrollments_id_seq INCREMENT 1 MINVALUE 2 MAXVALUE 2147483647 CACHE 1;
CREATE TABLE "public"."enrollments" (
    "EnrollmentID" integer DEFAULT nextval('enrollments_id_seq') NOT NULL,
    "UserId" integer NOT NULL,
    "CourseID" integer NOT NULL,
    CONSTRAINT "enrollments_EnrollmentID" PRIMARY KEY ("EnrollmentID")
) WITH (oids = false);

INSERT INTO "enrollments" ("EnrollmentID", "UserId", "CourseID") VALUES
(1, 2, 1),
(2,	2, 2),
(3,	2, 3),
(4, 4, 1);

SELECT setval('enrollments_id_seq', (SELECT MAX("EnrollmentID") FROM enrollments));


--------------------------------------------------------------
DROP TABLE IF EXISTS "scores";
DROP SEQUENCE IF EXISTS scores_id_seq;

CREATE SEQUENCE scores_id_seq INCREMENT 1 MINVALUE 2 MAXVALUE 2147483647 CACHE 1;
CREATE TABLE "public"."scores" (
    "ScoreID" integer DEFAULT nextval('scores_id_seq') NOT NULL,
    "UserId" integer NOT NULL,
    "ExamID" integer NOT NULL,
    "Score" integer NOT NULL,
    CONSTRAINT "scores_ScoreID" PRIMARY KEY ("ScoreID")
) WITH (oids = false);

INSERT INTO "scores" ("ScoreID", "UserId", "ExamID", "Score") VALUES
(1, 4, 1, 1),
(2,	4, 2, 2),
(3,	5, 1, 2),
(4, 5, 2, 1);

SELECT setval('scores_id_seq', (SELECT MAX("ScoreID") FROM scores));


--------------------------------------------------------------
DROP TABLE IF EXISTS "posts";
DROP SEQUENCE IF EXISTS posts_postId_seq;
CREATE SEQUENCE posts_postId_seq INCREMENT 1 MINVALUE 2 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."posts" (
    "Id" integer DEFAULT nextval('posts_postId_seq') NOT NULL,
    "Email" character varying(45),
    "title" character varying(450),
    "desc" character varying(5000),
    "img" character varying(4500),
    "cat" character varying(450),
    "date" date,
    "uid" integer,
    CONSTRAINT "posts_Id" PRIMARY KEY ("Id")
) WITH (oids = false);
TRUNCATE "posts";
INSERT INTO "posts" ("Id", "title", "desc", "img", "cat", "date", "uid") VALUES
(1, 'How to learn Computer Science?', 'Learning computer science involves gaining knowledge and understanding of various fundamental concepts and principles related to computers, algorithms, programming, data structures, and more. Here are some steps you can follow to learn computer science:', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9j8P106aWlqwUWufOJlL5pLeSowFZCyvZHA&usqp=CAU', 'DATA', '2002-09-06', 1),
(2, 'How to get into security?', 'Acquire foundational knowledge: Start by building a solid foundation in computer science, networking, and operating systems. Familiarize yourself with programming languages such as Python, C/C++, or Java, as they are commonly used in security-related tasks.', 'https://d35y3h46sw2vsm.cloudfront.net/w/wp-content/uploads/2023/08/Cyber-Security.jpg', 'SECURITY', '2020-01-01', 1),
(3, 'Hardware and their oppotunities in the new world', 'Hardware Design and Engineering: This involves designing and developing computer hardware components, systems, and devices. Opportunities can range from designing circuit boards and processors to developing embedded systems for various applications.', 'https://www.excelsior.edu/wp-content/uploads/2023/02/Career-Spotlight_Computer_Hardware_Engineer_Blog-1000x568.jpg', 'HARDWARE', '2021-02-02', 2);

SELECT setval('posts_postId_seq', (SELECT MAX("Id") FROM posts));


--------------------------------------------------------------
ALTER TABLE ONLY "public"."enrollments" ADD CONSTRAINT "enrollments_CourseID_fkey" FOREIGN KEY ("CourseID") REFERENCES courses("CourseID") NOT DEFERRABLE;
ALTER TABLE ONLY "public"."enrollments" ADD CONSTRAINT "enrollments_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES users("UserId") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."exams" ADD CONSTRAINT "exams_CourseID_fkey" FOREIGN KEY ("CourseID") REFERENCES courses("CourseID") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."students" ADD CONSTRAINT "students_UserID_fkey" FOREIGN KEY ("UserId") REFERENCES users("UserId") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users" ADD CONSTRAINT "roleId" FOREIGN KEY ("RoleId") REFERENCES roles("RoleId") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."posts" ADD CONSTRAINT "posts_Id_fkey" FOREIGN KEY ("uid") REFERENCES users("UserId") NOT DEFERRABLE;

-- 2023-12-13 19:40:21.007224+00
