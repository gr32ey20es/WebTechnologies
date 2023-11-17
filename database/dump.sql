PGDMP          "            
    {            postgres    14.4    14.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13754    postgres    DATABASE     h   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3323                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    35522    roles    TABLE     h   CREATE TABLE public.roles (
    "RoleId" integer NOT NULL,
    "Role" character varying(45) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    35528    users    TABLE     �   CREATE TABLE public.users (
    "UserId" integer NOT NULL,
    "Email" character varying(45) NOT NULL,
    "Password" character varying(45) NOT NULL,
    "RoleId" integer DEFAULT 2 NOT NULL,
    "UserName" character varying(45) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    35527    users_UserId_seq    SEQUENCE     �   CREATE SEQUENCE public."users_UserId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."users_UserId_seq";
       public          postgres    false    212            �           0    0    users_UserId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."users_UserId_seq" OWNED BY public.users."UserId";
          public          postgres    false    211            a           2604    35531    users UserId    DEFAULT     p   ALTER TABLE ONLY public.users ALTER COLUMN "UserId" SET DEFAULT nextval('public."users_UserId_seq"'::regclass);
 =   ALTER TABLE public.users ALTER COLUMN "UserId" DROP DEFAULT;
       public          postgres    false    212    211    212            �          0    35522    roles 
   TABLE DATA           1   COPY public.roles ("RoleId", "Role") FROM stdin;
    public          postgres    false    210   �       �          0    35528    users 
   TABLE DATA           T   COPY public.users ("UserId", "Email", "Password", "RoleId", "UserName") FROM stdin;
    public          postgres    false    212   �       �           0    0    users_UserId_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."users_UserId_seq"', 15, true);
          public          postgres    false    211            d           2606    35526    roles roles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY ("RoleId");
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    210            f           2606    35533    users users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("UserId");
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    212            g           2606    35534    users roleId    FK CONSTRAINT     t   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "roleId" FOREIGN KEY ("RoleId") REFERENCES public.roles("RoleId");
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT "roleId";
       public          postgres    false    212    3172    210            �      x�3�LL����2�,.)MI�+����� Q7B      �   _   x�3�L�M��1rH�H�-�I�K���,H,..�/J1�4�t�2�(1ƪĐӐә����).\�Ɯ>��� u`i �HrBt���+F��� ��5�     