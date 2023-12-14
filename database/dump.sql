-- Adminer 4.8.1 PostgreSQL 16.1 (Debian 16.1-1.pgdg120+1) dump

DROP TABLE IF EXISTS "courses";
CREATE TABLE "public"."courses" (
    "CourseID" character varying(45) NOT NULL,
    "CourseName" character varying(45) NOT NULL,
    "CourseDescription" text NOT NULL,
    CONSTRAINT "courses_CourseID" PRIMARY KEY ("CourseID")
) WITH (oids = false);

INSERT INTO "courses" ("CourseID", "CourseName", "CourseDescription") VALUES
('it4090',	'An ninh mạng',	'Khóa học an ninh mạng'),
('it4411',	'Cấu trúc dữ liệu và giải thuật',	'Khóa học cấu trúc dữ liệu và giải thuật'),
('it0001',	'Hệ nhúng',	'Mục tiêu:
Học phần IT4210 giới thiệu các kiến thức cơ bản liên quan tới việc thiết kế và lập trình hệ thống nhúng - một trong những loại thiết bị tính toán phổ biến nhất trong cuộc sống hiện đại.
Ngoài ra, môn học cũng trang bị các kỹ năng về sử dụng các công cụ cần thiết cho phát triển ứng dụng hệ nhúng, bao gồm công cụ thiết kế, mô phỏng, công cụ lập trình, và kỹ năng đọc tài liệu kỹ thuật.

Nội dung:
- Tổng quan về hệ thống nhúng và tổ chức của hệ thống nhúng.
- Kiến trúc và các thành phần của vi xử lý, vi điều khiển.
- Thiết kế, xây dựng phần cứng hệ nhúng cùng các mạch phụ trợ cơ bản.
- Xây dựng phần mềm cho hệ nhúng bằng hợp ngữ và ngôn ngữ lập trình bậc cao (C/C++) cho các chức năng cơ bản như giao tiếp ngoại vi LED, 7-seg LED, LED matrix, buttons/keypad, bộ định thời/đếm, xử lý ngắt, và các module truyền thông UART, SPI, I2C, USB.
- Ghép nối hệ nhúng với các tiến trình trong thế giới thực.
- Giới thiệu về hệ điều hành cho hệ thống nhúng.'),
('it0006',	'Điện toán đám mây AWS',	'Cùng với sự bùng nổ của chuyển đổi số, các giải pháp điện toán đám mây dùng Amazon Web Service (AWS) cũng trở lên HOT hơn bao giờ hết, nhu cầu tuyển dụng các vị trí Dev, DevOps, TechLeader yêu cầu hiểu biết về AWS đang ngày càng gia tăng với mức lương siêu khủng.

Sự kết hợp giữa lý thuyết và thực hành trực tiếp trên hệ thống AWS giúp sinh viên nhanh chóng tiếp cận được với các kiến thức của AWS và thành thạo các services trên hệ thống trong thời gian ngắn nhất. Khóa học được thiết kế cho người có các kiến thức cơ bản liên quan đến hệ điều hành Linux, mạng máy tính. Sau khi hoàn thành môn học, người học có đủ kiến thức cơ bản về điện toán đám mây và các dịch vụ của Amazon Web Services.

- Hiểu và xây dựng một hệ thống cơ bản bằng các dịch vụ cốt lõi của AWS thông qua thực hành
- Hiểu được một số kiến trúc phổ biến trên AWS'),
('it0003',	'Kỹ năng giao tiếp',	'Kỹ năng giao tiếp là một kỹ năng cần thiết cho sinh viên hiện nay nhưng một số sinh viên vẫn chưa thật sự quan tâm đến vấn đề này. Nhiều sinh viên vẫn không thể trình bày rõ ràng một vấn đề, quan điểm của mình trước lớp. Có những sinh viên cho rằng chỉ cần tập trung vào chuyên môn mà không cần đến kỹ năng giao tiếp. Vì vậy, bên cạnh chuyên môn cần chú trọng phát triển kỹ năng giao tiếp cho sinh viên.

Khóa học nhằm mục đích cung cấp cho học viên những kiến thức, kỹ thuật cần thiết trong xây dựng, duy trì và phát triển những mối quan hệ trong công việc và trong cuộc sống một cách hiệu quả thông qua giao tiếp.'),
('it0002',	'Kiến trúc phần mềm mạng',	'Kiến trúc mạng TCP/IP hỗ trợ tốt cho các dịch vụ (ứng dụng) mạng cơ bản như DNS, Email, Web, v.v... Sự phát triển của Internet cùng với các tình huống xác hội mới đang tạo nên các dịch vụ mới và đòi hỏi hệ thống kiến trúc TCP/IP phải có các thay đổi để đáp ứng. Môn học này tìm hiểu một số ứng dụng mới trên mạng như truyền dữ liệu đa điểm (multicast), chất lượng dịch vụ (QoS), truy nhập dịch vụ từ các trạm di động (mobility) và từ đó xem xét khả năng hỗ trợ của hệ thống TCP/IP cũng như giải pháp cải tiến TCP/IP.

Môn học được thiết kế với các bài thực hành.'),
('it0004',	'Thuật toán ứng dụng',	'Khoá học sẽ bao quát các vấn đề cơ bản và nâng cao trong phân tích thiết kế và cài đặt thuật toán, từ đó ứng dụng vào giải các bài tập trực tuyến và các bài toán ứng dụng thực tế. Các bài toán được mô tả dưới dạng ứng dụng đa ngành như: giao thông, mạng truyền thông, tin sinh học, xếp lịch, trí tuệ nhân tạo, xử lý dữ liệu, hệ thống phần mềm …. Ngoài việc làm chủ được các kỹ thuật cơ bản của thuật toán, sinh viên được học các kỹ năng cài đặt và cài đặt nhanh các loại thuật toán và cấu trúc dữ liệu cơ bản và tiên tiến khác nhau, từ đó áp dụng vào các bài tập lập trình và các bài toán thực tế có độ khó cao về thuật toán và cấu trúc dữ liệu. Học phần cũng giúp sinh viên tiếp cận với một số dạng bài toán lập trình trong phỏng vấn xin việc ở các công ty lớn, một số dạng bài toán trong các kỳ thi Olympic tin học sinh viên và lập trình sinh viên quốc tế ICPC, điều này giúp sinh viên thuận lợi khi thi tuyển vào các công ty lập trình lớn trong nước và trên thế giới. Sinh viên cũng sẽ được tiếp cận với các hệ thống giải bài và chấm điểm trực tuyến tốt nhất trên thế giới hiện nay. Các chủ đề bao gồm: Cấu trúc dữ liệu và thư viện thuật toán cơ bản, Đệ qui và nhánh cận, Thuật toán tham lam, Chia để trị, Quy hoạch động, CTDL và thuật toán trên đồ thị, Xử lý xâu, Lớp bài toán NP-đầy đủ. Các chủ đề đều được minh họa giải trên các bài toán ứng dụng thực tế.'),
('it0005',	'Introduction to css3',	'Theo thống kê của Stack Overflow 2018, HTML, CSS cùng với Javascript đang thống trị bảng xếp hạng về độ phổ biến. Học HTML và CSS giờ đây có dùng để tạo ra các ứng dụng web, mobile và cả desktop (ElectronJS framework). Vì vậy, khóa học này sẽ cung cấp nhưng kiến thức cơ bản nhất để các bạn có thể đặt nền tảng trong việc học CSS3 để tiếp tục học sâu hơn và thiết kế ra những trang web có style đẹp hơn. Định hướng nghề nghiệp: Sau khóa học CSS3 cơ bản, các bạn sẽ được trang bị kiến thức nền tảng để bắt đầu hành trình trở thành front-end developer.'),
('it0007',	'Web Mining',	'Web Mining is the process of Data Mining techniques to automatically discover and extract information from Web documents and services. The main purpose of web mining is discovering useful information from the World-Wide Web and its usage patterns.'),
('it0008',	'Ruby Language',	'Theo khảo sát về ngôn ngữ mà các doanh nghiệp tại Nhật Bản thường dùng vào năm 2019, Ruby đã trở thành quán quân - là một trong số những ngôn ngữ được doanh nghiệp IT Nhật Bản sử dụng nhiều nhất. Ngôn ngữ lập trình Ruby sử dụng ngôn từ và cú pháp đơn giản để xử lý dữ liệu và logic để giải quyết vấn đề, tăng khả năng tái sử dụng mã để giúp tăng tốc độ phát triển.

Đối với các cá nhân muốn gia nhập công ty Nhật và các doanh nghiệp muốn hòa nhập được vào luồng phát triển IT tại Nhật Bản, việc nâng cao nhận thức và trình độ chuyên môn về ngôn ngữ lập trình Ruby đã trở thành vấn đề cực kỳ thiết yếu.

Khóa “RUBY LANGUAGE (Vietnamese ver)” do nhóm sinh viên khóa 64 Viện Công nghệ Thông tin và Truyền thông, Đại học Bách khoa Hà Nội triển khai.

Khóa học cung cấp kiến thức cơ bản về ngôn ngữ lập trình Ruby, từ cú pháp, biến, toán tử, mảng, hash, đọc ghi file, ... giúp mọi người dễ dàng tiếp cận và nắm được bước đầu khi chinh phục ngôn ngữ đầy thú vị này.'),
('it0009',	'Data analytics',	'Khoá học này giúp học viên biết cách dùng công cụ R, Python trên môi trường Goolge Colab để:

Áp dụng trong việc phân tích dữ liệu, hiểu rõ các mô hình phân tích hồi quy- áp dụng kiến thức toán học, kinh tế lượng, xác suất thống kê
Phân tích dữ liệu trên công cụ R, biết cách biểu diễn dữ liệu từ những kết quả của phân tích
Làm chủ được kỹ năng xử lý dữ liệu, đặc biệt là dữ liệu có số lượng lớn thường gặp trong tài chính, ngân hàng, bảo hiểm, viễn thông, CNTT,…'),
('it0010',	'Cơ sở dữ liệu',	'Học phần này nhằm cung cấp cho sinh viên các khái niệm cơ bản về hệ cơ sở dữ liệu và những vấn đề mang tính nguyên lý của các hệ cơ sở dữ liệu; khái niệm về các mô hình dữ liệu trong đó đặc biệt nhấn mạnh vào mô hình dữ liệu quan hệ, các ngôn ngữ truy vấn CSDL; khai thác và sử dụng các hệ quản trị cơ sở dữ liệu quan hệ; các phương pháp thiết kế CSDL; một số vấn đề và kỹ thuật về quản trị hệ CSDL như tổ chức lưu trữ và chỉ mục, xử lý truy vấn, quản trị giao dịch');

DROP TABLE IF EXISTS "enrollments";
CREATE TABLE "public"."enrollments" (
    "EnrollmentID" integer NOT NULL,
    "StudentID" integer NOT NULL,
    "CourseID" character varying(45) NOT NULL,
    CONSTRAINT "enrollments_EnrollmentID" PRIMARY KEY ("EnrollmentID")
) WITH (oids = false);


DROP TABLE IF EXISTS "exams";
CREATE TABLE "public"."exams" (
    "ExamID" integer NOT NULL,
    "CourseID" character varying(45) NOT NULL,
    "ExamName" character varying,
    CONSTRAINT "exams_ExamID" PRIMARY KEY ("ExamID")
) WITH (oids = false);

INSERT INTO "exams" ("ExamID", "CourseID", "ExamName") VALUES
(1,	'it0001',	'Đề thi số 1'),
(2,	'it0001',	'Đề thi số 2'),
(3,	'it0001',	'Đề thi số 3'),
(4,	'it0002',	'Đề thi số 1'),
(5,	'it0003',	'Đề thi số 1'),
(6,	'it0004',	'Đề thi số 1'),
(7,	'it0005',	'Đề thi số 1'),
(8,	'it0006',	'Đề thi số 1'),
(9,	'it0007',	'Đề thi số 1'),
(10,	'it0008',	'Đề thi số 1'),
(11,	'it0009',	'Đề thi số 1'),
(12,	'it0010',	'Đề thi số 1');

DROP TABLE IF EXISTS "image_courses";
CREATE TABLE "public"."image_courses" (
    "ImagePath" character varying NOT NULL,
    "CourseID" character varying(45) NOT NULL,
    CONSTRAINT "image_courses_ImagePath" PRIMARY KEY ("ImagePath")
) WITH (oids = false);

INSERT INTO "image_courses" ("ImagePath", "CourseID") VALUES
('https://drive.google.com/uc?export=view&id=1MUQ13rI8w213RTlLiRYvcjf6PLIedZXy',	'it0001'),
('https://drive.google.com/uc?export=view&id=11aoEBUFPmaeOzF4NPOZfsYlEtmmFKU8Q',	'it0004'),
('https://drive.google.com/uc?export=view&id=1RfVD1QMrq-S2SFDCoJFXYCSLxvW9tHcL',	'it0005'),
('https://drive.google.com/uc?export=view&id=1hmORPfEUPJ_fcsiv-FGJpHIIwQg3YKjD',	'it0006'),
('https://drive.google.com/uc?export=view&id=1zhlT0TbKVPlqdDqhf_RhJi6Vfq0b3-4y',	'it0003'),
('https://drive.google.com/uc?export=view&id=1yWYS_hg94_3td2gicYdkLooxmFlie9tr',	'it0008'),
('https://drive.google.com/uc?export=view&id=1ImpoP5JD6gjlymMShmWgZbFerUOXp2t6',	'it0009'),
('https://drive.google.com/uc?export=view&id=1u1c66TeX5BB0qlZkEpQ1ACd-YeYjuhEk',	'it0002'),
('https://drive.google.com/uc?export=view&id=1U8puwv5MVUqGUzOpOsCHrT-Jbm_BQKpF',	'it0007'),
('https://drive.google.com/uc?export=view&id=15GEqarDx4wtzHhhWJp9FHHyRfFp0SJYG',	'it0010');

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

DROP TABLE IF EXISTS "students";
CREATE TABLE "public"."students" (
    "StudentID" integer NOT NULL,
    "UserId" integer NOT NULL,
    "StudentCode" integer NOT NULL,
    CONSTRAINT "students_StudentID" PRIMARY KEY ("StudentID")
) WITH (oids = false);

INSERT INTO "students" ("StudentID", "UserId", "StudentCode") VALUES
(1,	1,	20173224),
(2,	2,	20171234);

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS "users_UserId_seq";
CREATE SEQUENCE "users_UserId_seq" AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;;

CREATE TABLE "public"."users" (
    "UserId" integer DEFAULT nextval('"users_UserId_seq"') NOT NULL,
    "Email" character varying(45) NOT NULL,
    "Password" character varying(45) NOT NULL,
    "RoleId" integer NOT NULL,
    "UserName" character varying(45),
    CONSTRAINT "users_pkey" PRIMARY KEY ("UserId")
) WITH (oids = false);

INSERT INTO "users" ("UserId", "Email", "Password", "RoleId", "UserName") VALUES
(1,	'email1@example.com',	'password1',	1,	'Lam'),
(2,	'email2@example.com',	'password2',	2,	'Kim'),
(3,	'email3@example.com',	'password3',	3,	'Tan');

ALTER TABLE ONLY "public"."enrollments" ADD CONSTRAINT "enrollments_CourseID_fkey" FOREIGN KEY ("CourseID") REFERENCES courses("CourseID") NOT DEFERRABLE;
ALTER TABLE ONLY "public"."enrollments" ADD CONSTRAINT "enrollments_StudentID_fkey" FOREIGN KEY ("StudentID") REFERENCES students("StudentID") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."exams" ADD CONSTRAINT "exams_CourseID_fkey" FOREIGN KEY ("CourseID") REFERENCES courses("CourseID") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."image_courses" ADD CONSTRAINT "image_courses_CourseID_fkey" FOREIGN KEY ("CourseID") REFERENCES courses("CourseID") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."students" ADD CONSTRAINT "students_UserID_fkey" FOREIGN KEY ("UserId") REFERENCES users("UserId") NOT DEFERRABLE;

ALTER TABLE ONLY "public"."users" ADD CONSTRAINT "roleId" FOREIGN KEY ("RoleId") REFERENCES roles("RoleId") NOT DEFERRABLE;

-- 2023-12-13 19:40:21.007224+00
