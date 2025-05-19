--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.4 (Debian 17.4-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: PropertyType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."PropertyType" AS ENUM (
    'viviendaDeInteresSocial',
    'viviendaDeInteresPrioritario'
);


ALTER TYPE public."PropertyType" OWNER TO postgres;

--
-- Name: Role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Role" AS ENUM (
    'admin',
    'user'
);


ALTER TYPE public."Role" OWNER TO postgres;

--
-- Name: TransactionStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."TransactionStatus" AS ENUM (
    'PENDING',
    'APPROVED',
    'REJECTED',
    'CANCELLED'
);


ALTER TYPE public."TransactionStatus" OWNER TO postgres;

--
-- Name: TransactionType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."TransactionType" AS ENUM (
    'RECHARGE',
    'SPEND',
    'WITHDRAWAL'
);


ALTER TYPE public."TransactionType" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Investement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Investement" (
    amount bigint NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "investmentId" integer NOT NULL,
    "userId" text NOT NULL,
    "projectId" integer NOT NULL
);


ALTER TABLE public."Investement" OWNER TO postgres;

--
-- Name: Investement_investmentId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Investement_investmentId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Investement_investmentId_seq" OWNER TO postgres;

--
-- Name: Investement_investmentId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Investement_investmentId_seq" OWNED BY public."Investement"."investmentId";


--
-- Name: Project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Project" (
    title text NOT NULL,
    address text NOT NULL,
    description text,
    "projectValueTotal" bigint,
    "projectValueActual" bigint,
    media text[],
    documents text[],
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "accountServicesCost" bigint,
    "basicEquipmentAndTestingCost" bigint,
    bathrooms integer NOT NULL,
    bedrooms integer NOT NULL,
    builder text,
    "cetificatesSNandRCost" bigint,
    city text NOT NULL,
    "commonAreas" text[],
    "companiesIncorporationCost" bigint,
    "contigenciesFee" bigint,
    country text NOT NULL,
    department text NOT NULL,
    "endIncomeDate" timestamp(3) without time zone,
    "finishingCost" bigint,
    "incomeFromValuationAnnualCash" double precision,
    "legalCost" bigint,
    "projectLinks" text,
    "propertyAppraisal" bigint,
    "propertyType" public."PropertyType" NOT NULL,
    "rentalYieldsAnnualCash" double precision,
    "searchAndAdvertisingFee" bigint,
    "squareMeters" integer NOT NULL,
    "startIncomeDate" timestamp(3) without time zone,
    "studyTitleCost" bigint,
    "totalPropertyCost" bigint,
    "transactionCost" bigint,
    status text DEFAULT 'inactivo'::text NOT NULL,
    "projectId" integer NOT NULL,
    "minInvestmentAmount" integer NOT NULL
);


ALTER TABLE public."Project" OWNER TO postgres;

--
-- Name: Project_projectId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Project_projectId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Project_projectId_seq" OWNER TO postgres;

--
-- Name: Project_projectId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Project_projectId_seq" OWNED BY public."Project"."projectId";


--
-- Name: Transaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Transaction" (
    amount bigint NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "transactionId" integer NOT NULL,
    type public."TransactionType" NOT NULL,
    "walletId" integer NOT NULL,
    "investmentId" integer,
    status public."TransactionStatus" DEFAULT 'PENDING'::public."TransactionStatus" NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Transaction" OWNER TO postgres;

--
-- Name: Transaction_transactionId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Transaction_transactionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Transaction_transactionId_seq" OWNER TO postgres;

--
-- Name: Transaction_transactionId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Transaction_transactionId_seq" OWNED BY public."Transaction"."transactionId";


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    name text NOT NULL,
    email text NOT NULL,
    "isVerified" boolean DEFAULT false NOT NULL,
    "identificationImgLink" text,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    role public."Role" DEFAULT 'user'::public."Role" NOT NULL,
    "idNumber" text,
    "idType" text DEFAULT 'cedula'::text NOT NULL,
    "phoneNumber" text,
    "userId" text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: Wallet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Wallet" (
    "walletId" integer NOT NULL,
    "userId" text NOT NULL,
    balance bigint DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Wallet" OWNER TO postgres;

--
-- Name: Wallet_walletId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Wallet_walletId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Wallet_walletId_seq" OWNER TO postgres;

--
-- Name: Wallet_walletId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Wallet_walletId_seq" OWNED BY public."Wallet"."walletId";


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Investement investmentId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Investement" ALTER COLUMN "investmentId" SET DEFAULT nextval('public."Investement_investmentId_seq"'::regclass);


--
-- Name: Project projectId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Project" ALTER COLUMN "projectId" SET DEFAULT nextval('public."Project_projectId_seq"'::regclass);


--
-- Name: Transaction transactionId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transaction" ALTER COLUMN "transactionId" SET DEFAULT nextval('public."Transaction_transactionId_seq"'::regclass);


--
-- Name: Wallet walletId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wallet" ALTER COLUMN "walletId" SET DEFAULT nextval('public."Wallet_walletId_seq"'::regclass);


--
-- Data for Name: Investement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Investement" (amount, "createdAt", "investmentId", "userId", "projectId") FROM stdin;
207288470	2025-05-02 22:50:06.136	1	user_2mihXnuTOfRj8ZcnWjupGV9yE01	2
128518520	2025-05-02 23:28:48.607	2	user_2mihXnuTOfRj8ZcnWjupGV9yE01	5
155322740	2025-05-02 23:32:40.747	3	user_2mihXnuTOfRj8ZcnWjupGV9yE01	5
121087810	2025-05-02 23:34:06.139	4	user_2mihXnuTOfRj8ZcnWjupGV9yE01	2
25854230	2025-05-03 00:58:38.12	5	user_2mihXnuTOfRj8ZcnWjupGV9yE01	9
56010240	2025-05-03 00:59:12.979	6	user_2mihXnuTOfRj8ZcnWjupGV9yE01	9
\.


--
-- Data for Name: Project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Project" (title, address, description, "projectValueTotal", "projectValueActual", media, documents, "createdAt", "updatedAt", "accountServicesCost", "basicEquipmentAndTestingCost", bathrooms, bedrooms, builder, "cetificatesSNandRCost", city, "commonAreas", "companiesIncorporationCost", "contigenciesFee", country, department, "endIncomeDate", "finishingCost", "incomeFromValuationAnnualCash", "legalCost", "projectLinks", "propertyAppraisal", "propertyType", "rentalYieldsAnnualCash", "searchAndAdvertisingFee", "squareMeters", "startIncomeDate", "studyTitleCost", "totalPropertyCost", "transactionCost", status, "projectId", "minInvestmentAmount") FROM stdin;
New Project	Calle 34 #50 -35	Description del proyecto	1000000	\N	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{"{\\"name\\":\\"filename\\",\\"url\\":\\"https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-ade5c3c4-08a8-4b14-96a0-b15ea0214d98\\"}"}	2025-04-18 23:49:34.375	2025-04-30 22:39:48.696	50000	100000	2	2	Contructora	50000	Medellín	{piscina,turco}	50000	50000	Colombia	Antioquia	2026-07-22 00:00:00	200000	100000	100000		50000	viviendaDeInteresSocial	100000	50000	50	2025-07-24 00:00:00	50000	500000	50000	inactivo	1	100000
Parque Residencial El Bosque	Carrera 12, Armenia	Un proyecto rodeado de naturaleza.	1400000000	1100000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{licencia.pdf}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	2500000	3500000	3	4	Bosque Constructores	800000	Armenia	{"Senderos ecológicos","Zona de camping"}	400000	200000	Colombia	Quindío	2026-03-15 00:00:00	15000000	6.8	350000	https://parqueelbosque.com	1100000000	viviendaDeInteresPrioritario	6.2	250000	180	2024-12-01 00:00:00	300000	1300000000	350000	activo	11	2500000
EcoVillas del Valle	Carrera 20, Cali	Viviendas sostenibles con energía solar y diseño ecológico.	1800000000	1400000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{manual.pdf}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	3000000	4000000	4	5	Valle Verde	900000	Cali	{"Huerta comunitaria","Paneles solares"}	500000	300000	Colombia	Valle del Cauca	2027-12-31 00:00:00	18000000	7.5	450000	https://ecovillas.com	1400000000	viviendaDeInteresSocial	6.8	350000	220	2025-06-01 00:00:00	400000	1600000000	450000	activo	6	3000000
Residencias El Nogal	Calle 50, Bucaramanga	Un proyecto exclusivo en una de las mejores zonas de la ciudad.	2500000000	2000000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{presupuesto.pdf}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	4000000	5000000	5	6	Nogal Constructores	1100000	Bucaramanga	{Piscina,"Zona BBQ"}	600000	400000	Colombia	Santander	2028-06-30 00:00:00	25000000	8	550000	https://residenciaselnogal.com	2000000000	viviendaDeInteresPrioritario	7.5	450000	300	2026-01-01 00:00:00	500000	2300000000	550000	activo	7	3500000
Urbanización La Esperanza	Carrera 7, Villavicencio	Casas familiares con amplias zonas verdes.	1000000000	800000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{contrato.pdf}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	1500000	2500000	3	4	Llanos Constructores	600000	Villavicencio	{"Parque infantil","Zona de picnic"}	300000	200000	Colombia	Meta	2025-12-31 00:00:00	10000000	6	300000	https://urbanizacionlaesperanza.com	800000000	viviendaDeInteresSocial	5	200000	150	2024-06-01 00:00:00	250000	950000000	300000	activo	8	2000000
Mirador del Lago	Km 2 Vía Guatapé	Un proyecto exclusivo con vistas al embalse.	3000000000	2500000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{brochure.pdf}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	3500000	4500000	4	5	Lago Constructores	1000000	Guatapé	{"Piscina infinita","Club náutico"}	600000	400000	Colombia	Antioquia	2028-09-01 00:00:00	20000000	8	500000	https://miradordellago.com	2500000000	viviendaDeInteresSocial	7	400000	250	2026-09-01 00:00:00	450000	2800000000	500000	activo	10	4000000
Torre Horizonte	Calle 10, Bogotá	Un edificio moderno con vistas panorámicas de la ciudad.	2000000000	1500000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{planos.pdf}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	2500000	3500000	2	3	Urbania Proyectos	800000	Bogotá	{Gimnasio,"Salón social"}	500000	300000	Colombia	Cundinamarca	2027-06-30 00:00:00	15000000	7	400000	https://torrehorizonte.com	1500000000	viviendaDeInteresPrioritario	6	300000	200	2025-03-01 00:00:00	350000	1800000000	400000	activo	3	3000000
Condominio Brisas del Mar	Km 5 Vía Cartagena-Barranquilla	Viviendas frente al mar con diseño exclusivo.	3000000000	2500000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{contrato.pdf}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	3500000	4500000	4	5	Constructora Caribe	1000000	Cartagena	{"Piscina infinita","Club de playa"}	600000	400000	Colombia	Bolívar	2028-09-01 00:00:00	20000000	8	500000	https://brisasdelmar.com	2500000000	viviendaDeInteresSocial	7	400000	250	2026-09-01 00:00:00	450000	2800000000	500000	activo	4	4000000
Residencial Las Palmas	Av. Principal 45, Medellín	Un proyecto exclusivo rodeado de naturaleza y tranquilidad.	1200000000	1128376280	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{brochure.pdf}	2025-04-30 22:57:08.962	2025-05-02 23:34:06.15	1500000	2500000	3	4	Constructora Andes	600000	Medellín	{Piscina,"Zona BBQ","Parque infantil"}	400000	200000	Colombia	Antioquia	2026-12-31 00:00:00	10000000	6.5	300000	https://laspalmas.com	1000000000	viviendaDeInteresSocial	5.5	200000	150	2024-06-01 00:00:00	250000	1100000000	300000	activo	2	2000000
Altos de la Sierra	Carrera 15, Manizales	Un proyecto en las montañas con vistas espectaculares.	1500000000	1483841260	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{licencia.pdf}	2025-04-30 22:57:08.962	2025-05-02 23:32:40.76	2000000	3000000	3	4	Sierra Constructores	700000	Manizales	{"Senderos ecológicos","Zona de camping"}	400000	200000	Colombia	Caldas	2026-03-15 00:00:00	12000000	6.8	350000	https://altosdelasierra.com	1200000000	viviendaDeInteresPrioritario	6.2	250000	180	2024-12-01 00:00:00	300000	1400000000	350000	activo	5	2500000
Conjunto Residencial Los Robles	Calle 30, Pereira	Apartamentos modernos con diseño minimalista.	1300000000	1081864470	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{planos.pdf}	2025-04-30 22:57:08.962	2025-05-03 00:59:12.99	2000000	3000000	2	3	Constructora Eje	700000	Pereira	{Gimnasio,"Salón social"}	400000	200000	Colombia	Risaralda	2026-09-01 00:00:00	12000000	6.5	350000	https://losrobles.com	1000000000	viviendaDeInteresPrioritario	6	250000	180	2025-03-01 00:00:00	300000	1200000000	350000	activo	9	2500000
\.


--
-- Data for Name: Transaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Transaction" (amount, "createdAt", "transactionId", type, "walletId", "investmentId", status, "updatedAt") FROM stdin;
207288470	2025-05-02 22:50:06.157	1	SPEND	1	1	APPROVED	2025-05-03 00:37:52.978
128518520	2025-05-02 23:28:48.619	2	SPEND	1	2	APPROVED	2025-05-03 00:37:52.978
155322740	2025-05-02 23:32:40.755	3	SPEND	1	3	APPROVED	2025-05-03 00:37:52.978
121087810	2025-05-02 23:34:06.146	4	SPEND	1	4	APPROVED	2025-05-03 00:37:52.978
25854230	2025-05-03 00:58:38.135	5	SPEND	1	5	APPROVED	2025-05-03 00:58:38.148
56010240	2025-05-03 00:59:12.984	6	SPEND	1	6	APPROVED	2025-05-03 00:59:12.993
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (name, email, "isVerified", "identificationImgLink", "isActive", "createdAt", "updatedAt", role, "idNumber", "idType", "phoneNumber", "userId") FROM stdin;
Luis Ceren	luiscerenc18@gmail.com	f	\N	t	2025-04-18 23:42:09.131	2025-04-18 23:42:09.131	admin	\N	cedula	\N	user_2nRg63XzR1fzJZFTTbY7u66TNBK
Juan Camilo Echeverri Salazar	juancamiloecheverrisalazar@gmail.com	f	\N	t	2025-04-18 23:44:15.762	2025-04-18 23:44:15.762	admin	\N	cedula	\N	user_2mihXnuTOfRj8ZcnWjupGV9yE01
\.


--
-- Data for Name: Wallet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Wallet" ("walletId", "userId", balance, "createdAt", "updatedAt") FROM stdin;
1	user_2mihXnuTOfRj8ZcnWjupGV9yE01	9305917990	2025-04-18 23:44:15.762	2025-05-03 00:59:12.988
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
12f853fd-d66d-445c-9afa-ad678597fa9c	46c246b26bb614b6c6a9e1a44fd4ac535df91e212576c6201a7745f0610372f4	2025-05-02 17:00:22.046211+00	20250418222213_create_db	\N	\N	2025-05-02 17:00:22.037397+00	1
9578f78d-86e6-4239-9cb7-798f9ed83387	772cce0ade40f2f1f43205915d83701dbe8fafb2f9869701199392acc03172e3	2025-05-02 17:00:22.44643+00	20250502170022_init	\N	\N	2025-05-02 17:00:22.443901+00	1
a602e8f3-699c-46e3-b3c6-5c0d30e4ef63	5aaa19918886a2301cf0b97135374dc5a79a98b43bd2730181e213edcc76cd15	2025-05-03 00:37:52.98132+00	20250503003655_add_updated_at_to_transaction	\N	\N	2025-05-03 00:37:52.977655+00	1
98d7ec87-19e7-4a09-b825-ad8a90a83bf8	b9d370bd31f76e93a42c198747a50a2a5ed06c15b3dddb2c277d5893700d8e52	2025-05-03 00:39:19.805116+00	20250503003919_update_at_transactions	\N	\N	2025-05-03 00:39:19.798305+00	1
\.


--
-- Name: Investement_investmentId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Investement_investmentId_seq"', 6, true);


--
-- Name: Project_projectId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Project_projectId_seq"', 1, false);


--
-- Name: Transaction_transactionId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Transaction_transactionId_seq"', 6, true);


--
-- Name: Wallet_walletId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Wallet_walletId_seq"', 1, false);


--
-- Name: Investement Investement_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Investement"
    ADD CONSTRAINT "Investement_pkey" PRIMARY KEY ("investmentId");


--
-- Name: Project Project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId");


--
-- Name: Transaction Transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionId");


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");


--
-- Name: Wallet Wallet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wallet"
    ADD CONSTRAINT "Wallet_pkey" PRIMARY KEY ("walletId");


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Project_title_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Project_title_key" ON public."Project" USING btree (title);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Wallet_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Wallet_userId_key" ON public."Wallet" USING btree ("userId");


--
-- Name: Investement Investement_projectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Investement"
    ADD CONSTRAINT "Investement_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"("projectId") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Investement Investement_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Investement"
    ADD CONSTRAINT "Investement_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"("userId") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Transaction Transaction_investmentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_investmentId_fkey" FOREIGN KEY ("investmentId") REFERENCES public."Investement"("investmentId") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Transaction Transaction_walletId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES public."Wallet"("walletId") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Wallet Wallet_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wallet"
    ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"("userId") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

