-- Table structure for table "roles"
CREATE TABLE IF NOT EXISTS "roles" (
  "RoleId" integer NOT NULL,
  "role" varchar(45) NOT NULL,
  PRIMARY KEY ("RoleId")
);

-- Dumping data for table "roles"
INSERT INTO "roles" VALUES (1,'admin'),(2,'student');

-- Table structure for table "users"
CREATE TABLE IF NOT EXISTS "users" (
  "UserId" serial NOT NULL,
  "Email" varchar(45) NOT NULL,
  "Password" varchar(45) NOT NULL,
  "RoleId" integer NOT NULL,
  PRIMARY KEY ("UserId"),
  CONSTRAINT "roleId" FOREIGN KEY ("RoleId") REFERENCES "roles" ("RoleId")
);

-- Dumping data for table "users"
INSERT INTO "users" ("Email", "Password", "RoleId") VALUES
  ('email1@example.com', 'password1', 1),
  ('email2@example.com', 'password2', 2);
