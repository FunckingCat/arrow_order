--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO arrowbaseadmin;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO arrowbaseadmin;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO arrowbaseadmin;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO arrowbaseadmin;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO arrowbaseadmin;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO arrowbaseadmin;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO arrowbaseadmin;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO arrowbaseadmin;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO arrowbaseadmin;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO arrowbaseadmin;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO arrowbaseadmin;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO arrowbaseadmin;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO arrowbaseadmin;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO arrowbaseadmin;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO arrowbaseadmin;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO arrowbaseadmin;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO arrowbaseadmin;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO arrowbaseadmin;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO arrowbaseadmin;

--
-- Name: menu_burgermenuitems; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.menu_burgermenuitems (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    href character varying(100) NOT NULL
);


ALTER TABLE public.menu_burgermenuitems OWNER TO arrowbaseadmin;

--
-- Name: menu_burgermenuitems_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.menu_burgermenuitems_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_burgermenuitems_id_seq OWNER TO arrowbaseadmin;

--
-- Name: menu_burgermenuitems_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.menu_burgermenuitems_id_seq OWNED BY public.menu_burgermenuitems.id;


--
-- Name: menu_mainpagecontent; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.menu_mainpagecontent (
    id integer NOT NULL,
    title character varying(200) NOT NULL,
    text text NOT NULL,
    image character varying(500) NOT NULL
);


ALTER TABLE public.menu_mainpagecontent OWNER TO arrowbaseadmin;

--
-- Name: menu_mainpagecontent_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.menu_mainpagecontent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_mainpagecontent_id_seq OWNER TO arrowbaseadmin;

--
-- Name: menu_mainpagecontent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.menu_mainpagecontent_id_seq OWNED BY public.menu_mainpagecontent.id;


--
-- Name: wiki_wikicategores; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.wiki_wikicategores (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    image character varying(80) NOT NULL,
    href character varying(120) NOT NULL,
    slogan text NOT NULL
);


ALTER TABLE public.wiki_wikicategores OWNER TO arrowbaseadmin;

--
-- Name: wiki_wikicategores_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.wiki_wikicategores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wiki_wikicategores_id_seq OWNER TO arrowbaseadmin;

--
-- Name: wiki_wikicategores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.wiki_wikicategores_id_seq OWNED BY public.wiki_wikicategores.id;


--
-- Name: wiki_wikiobject; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.wiki_wikiobject (
    id integer NOT NULL,
    title character varying(60) NOT NULL,
    text text NOT NULL,
    image character varying(80) NOT NULL,
    hashtag character varying(50) NOT NULL
);


ALTER TABLE public.wiki_wikiobject OWNER TO arrowbaseadmin;

--
-- Name: wiki_wikiobject_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.wiki_wikiobject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wiki_wikiobject_id_seq OWNER TO arrowbaseadmin;

--
-- Name: wiki_wikiobject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.wiki_wikiobject_id_seq OWNED BY public.wiki_wikiobject.id;


--
-- Name: wiki_wikisubcategores; Type: TABLE; Schema: public; Owner: arrowbaseadmin
--

CREATE TABLE public.wiki_wikisubcategores (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    image character varying(80) NOT NULL,
    href character varying(120) NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.wiki_wikisubcategores OWNER TO arrowbaseadmin;

--
-- Name: wiki_wikisubcategores_id_seq; Type: SEQUENCE; Schema: public; Owner: arrowbaseadmin
--

CREATE SEQUENCE public.wiki_wikisubcategores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wiki_wikisubcategores_id_seq OWNER TO arrowbaseadmin;

--
-- Name: wiki_wikisubcategores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrowbaseadmin
--

ALTER SEQUENCE public.wiki_wikisubcategores_id_seq OWNED BY public.wiki_wikisubcategores.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: menu_burgermenuitems id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.menu_burgermenuitems ALTER COLUMN id SET DEFAULT nextval('public.menu_burgermenuitems_id_seq'::regclass);


--
-- Name: menu_mainpagecontent id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.menu_mainpagecontent ALTER COLUMN id SET DEFAULT nextval('public.menu_mainpagecontent_id_seq'::regclass);


--
-- Name: wiki_wikicategores id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.wiki_wikicategores ALTER COLUMN id SET DEFAULT nextval('public.wiki_wikicategores_id_seq'::regclass);


--
-- Name: wiki_wikiobject id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.wiki_wikiobject ALTER COLUMN id SET DEFAULT nextval('public.wiki_wikiobject_id_seq'::regclass);


--
-- Name: wiki_wikisubcategores id; Type: DEFAULT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.wiki_wikisubcategores ALTER COLUMN id SET DEFAULT nextval('public.wiki_wikisubcategores_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add main page content	7	add_mainpagecontent
26	Can change main page content	7	change_mainpagecontent
27	Can delete main page content	7	delete_mainpagecontent
28	Can view main page content	7	view_mainpagecontent
29	Can add burger menu items	8	add_burgermenuitems
30	Can change burger menu items	8	change_burgermenuitems
31	Can delete burger menu items	8	delete_burgermenuitems
32	Can view burger menu items	8	view_burgermenuitems
33	Can add wiki object	9	add_wikiobject
34	Can change wiki object	9	change_wikiobject
35	Can delete wiki object	9	delete_wikiobject
36	Can view wiki object	9	view_wikiobject
37	Can add wiki categores	10	add_wikicategores
38	Can change wiki categores	10	change_wikicategores
39	Can delete wiki categores	10	delete_wikicategores
40	Can view wiki categores	10	view_wikicategores
41	Can add wiki sub categores	11	add_wikisubcategores
42	Can change wiki sub categores	11	change_wikisubcategores
43	Can delete wiki sub categores	11	delete_wikisubcategores
44	Can view wiki sub categores	11	view_wikisubcategores
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$180000$z5XPXZR5Sv4j$zA/Se/05J0onYlbHmGmaNamnGjKB/irSTgIuE6xIWNw=	2019-12-17 07:22:12.73324+03	t	ArrowAdmin			david99111@mail.ru	t	t	2019-12-17 07:21:40.183101+03
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2019-12-17 09:26:33.375809+03	1	Arrow Order\nГоспода, семантический разбор внешних противодействий предоставляет широкие возм...\n/static/MainPageImages/bg (0).png\n	1	[{"added": {}}]	7	1
2	2019-12-17 09:27:16.50168+03	2	\nЯсность нашей позиции очевидна: экономическая повестка сегодняшнего дня, а также...\n/static/MainPageImages/bg (1).png\n	1	[{"added": {}}]	7	1
3	2019-12-17 09:28:16.870146+03	3	Продукция\nУчитывая ключевые сценарии поведения, существующая теория играет определяющее зн...\n/static/MainPageImages/bg (2).png\n	1	[{"added": {}}]	7	1
4	2019-12-17 09:29:11.089305+03	4	\nКак принято считать, реплицированные с зарубежных источников, современные исслед...\n/static/MainPageImages/bg (3).png\n	1	[{"added": {}}]	7	1
5	2019-12-17 09:31:16.939055+03	2	Главная\n/MainPage\n	1	[{"added": {}}]	8	1
6	2019-12-17 09:33:32.137693+03	3	Вики\n/Wiki\n	1	[{"added": {}}]	8	1
7	2019-12-17 09:34:27.814539+03	4	Свободные даты\n/FreeDates\n	1	[{"added": {}}]	8	1
8	2019-12-17 09:35:07.95919+03	5	Изменить контактные данные\n/\n	1	[{"added": {}}]	8	1
9	2019-12-17 09:35:36.475771+03	6	Контакты\n/Contacts\n	1	[{"added": {}}]	8	1
10	2019-12-17 09:36:00.067863+03	7	Сотрудничество\n/WorkWithUs\n	1	[{"added": {}}]	8	1
11	2019-12-17 16:22:20.986374+03	1	Виды тортов	1	[{"added": {}}]	10	1
12	2019-12-17 16:23:42.869866+03	2	Начинки	1	[{"added": {}}]	10	1
13	2019-12-17 16:24:44.490855+03	3	Кремы	1	[{"added": {}}]	10	1
14	2019-12-17 16:26:21.821438+03	4	Бисквиты	1	[{"added": {}}]	10	1
15	2019-12-17 16:30:10.213395+03	1	Бисквитный	1	[{"added": {}}]	11	1
16	2019-12-17 16:35:05.083506+03	2	Чизкейк	1	[{"added": {}}]	11	1
17	2019-12-17 16:35:56.354772+03	3	Медовик	1	[{"added": {}}]	11	1
18	2019-12-17 16:37:05.849865+03	4	Торт-цифра	1	[{"added": {}}]	11	1
19	2019-12-17 16:39:41.001185+03	5	Ягодная	1	[{"added": {}}]	11	1
20	2019-12-17 16:41:58.419717+03	6	Шоколадная	1	[{"added": {}}]	11	1
21	2019-12-17 16:42:40.42974+03	7	Кокосовая	1	[{"added": {}}]	11	1
22	2019-12-17 16:43:23.124508+03	8	Карамельная	1	[{"added": {}}]	11	1
23	2019-12-17 16:43:42.150236+03	7	Кокосовая	2	[{"changed": {"fields": ["Image"]}}]	11	1
24	2019-12-17 16:44:54.3437+03	9	Ванильный	1	[{"added": {}}]	11	1
25	2019-12-17 16:45:28.294849+03	10	Ягодный	1	[{"added": {}}]	11	1
26	2019-12-17 16:47:10.374282+03	11	Шоколадный	1	[{"added": {}}]	11	1
27	2019-12-17 16:49:24.566317+03	12	Сметанно - сливочный	1	[{"added": {}}]	11	1
28	2019-12-17 16:51:03.825759+03	13	Сливочный	1	[{"added": {}}]	11	1
29	2019-12-17 16:52:13.939363+03	14	Шоколадный	1	[{"added": {}}]	11	1
30	2019-12-17 16:54:07.103737+03	15	Ванильный	1	[{"added": {}}]	11	1
31	2019-12-17 16:55:05.770872+03	16	Кокосовый	1	[{"added": {}}]	11	1
32	2019-12-17 16:58:34.604221+03	17	Банановый	1	[{"added": {}}]	11	1
33	2019-12-18 07:32:17.083419+03	1	Ванильный бисквит	1	[{"added": {}}]	9	1
34	2019-12-19 19:38:41.120258+03	8	Карамельная --- Начинки	2	[{"changed": {"fields": ["Href"]}}]	11	1
35	2019-12-19 19:38:59.052343+03	8	Карамельная --- Начинки	2	[]	11	1
36	2019-12-19 19:40:07.869249+03	6	Шоколадная --- Начинки	2	[{"changed": {"fields": ["Href"]}}]	11	1
37	2019-12-19 19:40:28.381985+03	16	Кокосовый --- Бисквиты	2	[{"changed": {"fields": ["Href"]}}]	11	1
38	2019-12-19 19:40:43.364354+03	11	Шоколадный --- Кремы	2	[{"changed": {"fields": ["Href"]}}]	11	1
39	2019-12-19 19:41:02.307686+03	7	Кокосовая --- Начинки	2	[{"changed": {"fields": ["Href"]}}]	11	1
40	2019-12-19 19:41:14.000164+03	5	Ягодная --- Начинки	2	[{"changed": {"fields": ["Href"]}}]	11	1
41	2019-12-19 19:41:27.427135+03	1	Бисквитный --- Виды тортов	2	[{"changed": {"fields": ["Href"]}}]	11	1
42	2019-12-19 20:06:17.159021+03	1	Ванильный бисквит	2	[]	9	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	menu	mainpagecontent
8	menu	burgermenuitems
9	wiki	wikiobject
10	wiki	wikicategores
11	wiki	wikisubcategores
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2019-12-16 08:08:39.316054+03
2	auth	0001_initial	2019-12-16 08:08:39.402107+03
3	admin	0001_initial	2019-12-16 08:08:39.482481+03
4	admin	0002_logentry_remove_auto_add	2019-12-16 08:08:39.514914+03
5	admin	0003_logentry_add_action_flag_choices	2019-12-16 08:08:39.532683+03
6	contenttypes	0002_remove_content_type_name	2019-12-16 08:08:39.552502+03
7	auth	0002_alter_permission_name_max_length	2019-12-16 08:08:39.558272+03
8	auth	0003_alter_user_email_max_length	2019-12-16 08:08:39.56754+03
9	auth	0004_alter_user_username_opts	2019-12-16 08:08:39.577672+03
10	auth	0005_alter_user_last_login_null	2019-12-16 08:08:39.587032+03
11	auth	0006_require_contenttypes_0002	2019-12-16 08:08:39.58993+03
12	auth	0007_alter_validators_add_error_messages	2019-12-16 08:08:39.598497+03
13	auth	0008_alter_user_username_max_length	2019-12-16 08:08:39.611563+03
14	auth	0009_alter_user_last_name_max_length	2019-12-16 08:08:39.629547+03
15	auth	0010_alter_group_name_max_length	2019-12-16 08:08:39.640407+03
16	auth	0011_update_proxy_permissions	2019-12-16 08:08:39.649204+03
17	sessions	0001_initial	2019-12-16 08:08:39.662038+03
18	menu	0001_initial	2019-12-17 07:20:04.421969+03
19	menu	0002_burgermenuitems	2019-12-17 07:34:52.127537+03
20	wiki	0001_initial	2019-12-17 11:11:42.189106+03
21	wiki	0002_wikicategores	2019-12-17 11:32:05.772154+03
22	wiki	0003_wikisubcategores	2019-12-17 12:45:09.182196+03
23	wiki	0004_auto_20191217_1404	2019-12-17 17:05:11.448676+03
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
oji0745hsktujcxu27oq1zw2iw5kz5d2	NWVhYjAyMWE4MjFhNmU2N2JmYzBiMzZiYWEwODA0MGRjNjJiMzVmYjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkMTMyMzMxYmU0ZDBhZGFkYmY2ZWVjYmQ2NTM5ZDlmNDdhYjBlMGFiIn0=	2019-12-31 07:22:12.737849+03
\.


--
-- Data for Name: menu_burgermenuitems; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.menu_burgermenuitems (id, title, href) FROM stdin;
2	Главная	/MainPage
3	Вики	/Wiki
4	Свободные даты	/FreeDates
5	Изменить контактные данные	/
6	Контакты	/Contacts
7	Сотрудничество	/WorkWithUs
\.


--
-- Data for Name: menu_mainpagecontent; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.menu_mainpagecontent (id, title, text, image) FROM stdin;
1	Arrow Order	Господа, семантический разбор внешних противодействий предоставляет широкие возможности для анализа существующих паттернов поведения. Также как синтетическое тестирование способствует повышению качества системы массового участия.	/static/MainPageImages/bg (0).png
2		Ясность нашей позиции очевидна: экономическая повестка сегодняшнего дня, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы! В своём стремлении повысить качество жизни, они забывают, что дальнейшее развитие различных форм деятельности говорит о возможностях форм воздействия.	/static/MainPageImages/bg (1).png
3	Продукция	Учитывая ключевые сценарии поведения, существующая теория играет определяющее значение для поставленных обществом задач. А ещё реплицированные с зарубежных источников, современные исследования призывают нас к новым свершениям, которые, в свою очередь, должны быть ассоциативно распределены по отраслям.	/static/MainPageImages/bg (2).png
4		Как принято считать, реплицированные с зарубежных источников, современные исследования, вне зависимости от их уровня, должны быть заблокированы в рамках своих собственных рациональных ограничений. Вот вам яркий пример современных тенденций - сплочённость команды профессионалов предоставляет широкие возможности для анализа существующих паттернов поведения.	/static/MainPageImages/bg (3).png
\.


--
-- Data for Name: wiki_wikicategores; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.wiki_wikicategores (id, title, image, href, slogan) FROM stdin;
1	Виды тортов	/static/WikiImages/honeycake.png	/Wiki/CakeTypes/	
2	Начинки	/static/WikiImages/caramel.png	/Wiki/Fillers/	
3	Кремы	/static/WikiImages/cupcake.png	/Wiki/Creams/	
4	Бисквиты	/static/WikiImages/cheesecake.png	/Wiki/Biscuits/	- кондитерское тесто и кондитерский «хлеб», приготовленный из муки, сахара и яиц, причем яиц по весу (или объему) намного больше, чем муки
\.


--
-- Data for Name: wiki_wikiobject; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.wiki_wikiobject (id, title, text, image, hashtag) FROM stdin;
1	Ванильный бисквит	Hashtag должен сооствтсвовать последнему сегменту URL страницы, что бы был возможен поиск по карточкам. URL карточки из вики раздела должен имет вид "/Wiki/Card/<hashtag>/. Таким образом необходимо проследить за равенством hashtag в таблицах wiki_subcategores и самом элементе Вики."	/static/WikiImages/cheesecake.png	VanillaBiscuit
\.


--
-- Data for Name: wiki_wikisubcategores; Type: TABLE DATA; Schema: public; Owner: arrowbaseadmin
--

COPY public.wiki_wikisubcategores (id, title, image, href, category_id) FROM stdin;
2	Чизкейк	/static/WikiImages/cheesecake.png	/Wiki/Card/CheeseCake/	1
3	Медовик	/static/WikiImages/honeycake.png	/Wiki/Card/HoneyCake/	1
4	Торт-цифра	/static/WikiImages/caramel.png	/Wiki/Card/DigitCake/	1
9	Ванильный	/static/WikiImages/cheesecake.png	/Wiki/Card/VanillaCream/	3
10	Ягодный	/static/WikiImages/cupcake.png	/Wiki/Card/BerryCream/	3
12	Сметанно - сливочный	/static/WikiImages/popcorn.png	/Wiki/Card/SourCream/	3
13	Сливочный	/static/WikiImages/honeycake.png	/Wiki/Card/ButterCream/	3
14	Шоколадный	/static/WikiImages/cupcake.png	/Wiki/Card/ChocolateBiscuit/	4
15	Ванильный	/static/WikiImages/cupcake.png	/Wiki/Card/VanillaBiscuit/	4
17	Банановый	/static/WikiImages/caramel.png	/Wiki/Card/BananaBiscuit/	4
8	Карамельная	/static/WikiImages/caramel.png	/Wiki/Card/CaramelFilling/	2
6	Шоколадная	/static/WikiImages/cheesecake.png	/Wiki/Card/ChocolateFilling/	2
16	Кокосовый	/static/WikiImages/caramel.png	/Wiki/Card/CoconutBiscuit/	4
11	Шоколадный	/static/WikiImages/honeycake.png	/Wiki/Card/ChocolateCream/	3
7	Кокосовая	/static/WikiImages/popcorn.png	/Wiki/Card/CoconutFilling/	2
5	Ягодная	/static/WikiImages/cupcake.png	/Wiki/Card/BerryFilling/	2
1	Бисквитный	/static/WikiImages/caramel.png	/Wiki/Card/BiscuitCake/	1
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 44, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 42, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 11, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 23, true);


--
-- Name: menu_burgermenuitems_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.menu_burgermenuitems_id_seq', 7, true);


--
-- Name: menu_mainpagecontent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.menu_mainpagecontent_id_seq', 4, true);


--
-- Name: wiki_wikicategores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.wiki_wikicategores_id_seq', 4, true);


--
-- Name: wiki_wikiobject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.wiki_wikiobject_id_seq', 1, true);


--
-- Name: wiki_wikisubcategores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrowbaseadmin
--

SELECT pg_catalog.setval('public.wiki_wikisubcategores_id_seq', 17, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: menu_burgermenuitems menu_burgermenuitems_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.menu_burgermenuitems
    ADD CONSTRAINT menu_burgermenuitems_pkey PRIMARY KEY (id);


--
-- Name: menu_mainpagecontent menu_mainpagecontent_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.menu_mainpagecontent
    ADD CONSTRAINT menu_mainpagecontent_pkey PRIMARY KEY (id);


--
-- Name: wiki_wikicategores wiki_wikicategores_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.wiki_wikicategores
    ADD CONSTRAINT wiki_wikicategores_pkey PRIMARY KEY (id);


--
-- Name: wiki_wikiobject wiki_wikiobject_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.wiki_wikiobject
    ADD CONSTRAINT wiki_wikiobject_pkey PRIMARY KEY (id);


--
-- Name: wiki_wikisubcategores wiki_wikisubcategores_pkey; Type: CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.wiki_wikisubcategores
    ADD CONSTRAINT wiki_wikisubcategores_pkey PRIMARY KEY (id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: wiki_wikisubcategores_category_id_7d2f19ff; Type: INDEX; Schema: public; Owner: arrowbaseadmin
--

CREATE INDEX wiki_wikisubcategores_category_id_7d2f19ff ON public.wiki_wikisubcategores USING btree (category_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: wiki_wikisubcategores wiki_wikisubcategore_category_id_7d2f19ff_fk_wiki_wiki; Type: FK CONSTRAINT; Schema: public; Owner: arrowbaseadmin
--

ALTER TABLE ONLY public.wiki_wikisubcategores
    ADD CONSTRAINT wiki_wikisubcategore_category_id_7d2f19ff_fk_wiki_wiki FOREIGN KEY (category_id) REFERENCES public.wiki_wikicategores(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

