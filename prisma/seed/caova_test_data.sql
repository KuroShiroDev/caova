--
-- Data for Name: Investment; Type: TABLE DATA; Schema: public; Owner: postgres
--

TRUNCATE TABLE "Investment", "Project", "Transaction", "User", "Wallet", _prisma_migrations RESTART IDENTITY CASCADE;

COPY public."Project" (title, address, description, "projectValueTotal", "projectValueActual", media, documents, "createdAt", "updatedAt", "accountServicesCost", "basicEquipmentAndTestingCost", bathrooms, bedrooms, builder, "cetificatesSNandRCost", city, "commonAreas", "companiesIncorporationCost", "contigenciesFee", country, department, "endIncomeDate", "finishingCost", "incomeFromValuationAnnualCash", "legalCost", "projectLinks", "propertyAppraisal", "propertyType", "rentalYieldsAnnualCash", "searchAndAdvertisingFee", "squareMeters", "startIncomeDate", "studyTitleCost", "totalPropertyCost", "transactionCost", status, "projectId", "minInvestmentAmount") FROM stdin;
New Project	Calle 34 #50 -35	Description del proyecto	1000000	\N	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-18 23:49:34.375	2025-04-30 22:39:48.696	50000	100000	2	2	Contructora	50000	Medellín	{piscina,turco}	50000	50000	Colombia	Antioquia	2026-07-22 00:00:00	200000	100000	100000		50000	viviendaDeInteresSocial	100000	50000	50	2025-07-24 00:00:00	50000	500000	50000	inactivo	11111111-1111-1111-1111-111111111111	100000
Parque Residencial El Bosque	Carrera 12, Armenia	Un proyecto rodeado de naturaleza.	1400000000	1100000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	2500000	3500000	3	4	Bosque Constructores	800000	Armenia	{"Senderos ecológicos","Zona de camping"}	400000	200000	Colombia	Quindío	2026-03-15 00:00:00	15000000	6.8	350000	https://parqueelbosque.com	1100000000	viviendaDeInteresPrioritario	6.2	250000	180	2024-12-01 00:00:00	300000	1300000000	350000	activo	22222222-2222-2222-2222-222222222222	2500000
EcoVillas del Valle	Carrera 20, Cali	Viviendas sostenibles con energía solar y diseño ecológico.	1800000000	1400000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	3000000	4000000	4	5	Valle Verde	900000	Cali	{"Huerta comunitaria","Paneles solares"}	500000	300000	Colombia	Valle del Cauca	2027-12-31 00:00:00	18000000	7.5	450000	https://ecovillas.com	1400000000	viviendaDeInteresSocial	6.8	350000	220	2025-06-01 00:00:00	400000	1600000000	450000	activo	33333333-3333-3333-3333-333333333333	3000000
Residencias El Nogal	Calle 50, Bucaramanga	Un proyecto exclusivo en una de las mejores zonas de la ciudad.	2500000000	2000000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	4000000	5000000	5	6	Nogal Constructores	1100000	Bucaramanga	{Piscina,"Zona BBQ"}	600000	400000	Colombia	Santander	2028-06-30 00:00:00	25000000	8	550000	https://residenciaselnogal.com	2000000000	viviendaDeInteresPrioritario	7.5	450000	300	2026-01-01 00:00:00	500000	2300000000	550000	activo	44444444-4444-4444-4444-444444444444	3500000
Urbanización La Esperanza	Carrera 7, Villavicencio	Casas familiares con amplias zonas verdes.	1000000000	800000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	1500000	2500000	3	4	Llanos Constructores	600000	Villavicencio	{"Parque infantil","Zona de picnic"}	300000	200000	Colombia	Meta	2025-12-31 00:00:00	10000000	6	300000	https://urbanizacionlaesperanza.com	800000000	viviendaDeInteresSocial	5	200000	150	2024-06-01 00:00:00	250000	950000000	300000	activo	55555555-5555-5555-5555-555555555555	2000000
Mirador del Lago	Km 2 Vía Guatapé	Un proyecto exclusivo con vistas al embalse.	3000000000	2500000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	3500000	4500000	4	5	Lago Constructores	1000000	Guatapé	{"Piscina infinita","Club náutico"}	600000	400000	Colombia	Antioquia	2028-09-01 00:00:00	20000000	8	500000	https://miradordellago.com	2500000000	viviendaDeInteresSocial	7	400000	250	2026-09-01 00:00:00	450000	2800000000	500000	activo	66666666-6666-6666-6666-666666666666	4000000
Torre Horizonte	Calle 10, Bogotá	Un edificio moderno con vistas panorámicas de la ciudad.	2000000000	1500000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	2500000	3500000	2	3	Urbania Proyectos	800000	Bogotá	{Gimnasio,"Salón social"}	500000	300000	Colombia	Cundinamarca	2027-06-30 00:00:00	15000000	7	400000	https://torrehorizonte.com	1500000000	viviendaDeInteresPrioritario	6	300000	200	2025-03-01 00:00:00	350000	1800000000	400000	activo	77777777-7777-7777-7777-777777777777	3000000
Condominio Brisas del Mar	Km 5 Vía Cartagena-Barranquilla	Viviendas frente al mar con diseño exclusivo.	3000000000	2500000000	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-04-30 22:57:08.962	3500000	4500000	4	5	Constructora Caribe	1000000	Cartagena	{"Piscina infinita","Club de playa"}	600000	400000	Colombia	Bolívar	2028-09-01 00:00:00	20000000	8	500000	https://brisasdelmar.com	2500000000	viviendaDeInteresSocial	7	400000	250	2026-09-01 00:00:00	450000	2800000000	500000	activo	88888888-8888-8888-8888-888888888888	4000000
Residencial Las Palmas	Av. Principal 45, Medellín	Un proyecto exclusivo rodeado de naturaleza y tranquilidad.	1200000000	1128376280	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-05-02 23:34:06.15	1500000	2500000	3	4	Constructora Andes	600000	Medellín	{Piscina,"Zona BBQ","Parque infantil"}	400000	200000	Colombia	Antioquia	2026-12-31 00:00:00	10000000	6.5	300000	https://laspalmas.com	1000000000	viviendaDeInteresSocial	5.5	200000	150	2024-06-01 00:00:00	250000	1100000000	300000	activo	99999999-9999-9999-9999-999999999999	2000000
Altos de la Sierra	Carrera 15, Manizales	Un proyecto en las montañas con vistas espectaculares.	1500000000	1483841260	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-05-02 23:32:40.76	2000000	3000000	3	4	Sierra Constructores	700000	Manizales	{"Senderos ecológicos","Zona de camping"}	400000	200000	Colombia	Caldas	2026-03-15 00:00:00	12000000	6.8	350000	https://altosdelasierra.com	1200000000	viviendaDeInteresPrioritario	6.2	250000	180	2024-12-01 00:00:00	300000	1400000000	350000	activo	aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa	2500000
Conjunto Residencial Los Robles	Calle 30, Pereira	Apartamentos modernos con diseño minimalista.	1300000000	1081864470	{https://files.edgestore.dev/z1kp6ljse9dzikmp/cavoaProjects/_public/cavoa-1-80223d1a-f478-486a-8a2d-bd5fd8259ede}	{}	2025-04-30 22:57:08.962	2025-05-03 00:59:12.99	2000000	3000000	2	3	Constructora Eje	700000	Pereira	{Gimnasio,"Salón social"}	400000	200000	Colombia	Risaralda	2026-09-01 00:00:00	12000000	6.5	350000	https://losrobles.com	1000000000	viviendaDeInteresPrioritario	6	250000	180	2025-03-01 00:00:00	300000	1200000000	350000	activo	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb	2500000
\.

COPY public."User" (name, email, "isVerified", "identificationImgLink", "isActive", "createdAt", "updatedAt", role, "idNumber", "idType", "phoneNumber", "userId") FROM stdin;
Luis Ceren	luiscerenc18@gmail.com	f	\N	t	2025-04-18 23:42:09.131	2025-04-18 23:42:09.131	admin	\N	cedula	\N	user_2nRg63XzR1fzJZFTTbY7u66TNBK
Juan Camilo Echeverri Salazar	juancamiloecheverrisalazar@gmail.com	f	\N	t	2025-04-18 23:44:15.762	2025-04-18 23:44:15.762	admin	\N	cedula	\N	user_2mihXnuTOfRj8ZcnWjupGV9yE01
\.

COPY public."Wallet" ("walletId", "userId", balance, "createdAt", "updatedAt") FROM stdin;
cccccccc-cccc-cccc-cccc-cccccccccccc	user_2mihXnuTOfRj8ZcnWjupGV9yE01	9305917990	2025-04-18 23:44:15.762	2025-05-03 00:59:12.988
dddddddd-dddd-dddd-dddd-dddddddddddd	user_2nRg63XzR1fzJZFTTbY7u66TNBK	5000000000	2025-04-18 23:44:15.762	2025-05-03 00:59:12.988
\.

COPY public."Investment" (amount, "createdAt", "investmentId", "userId", "projectId") FROM stdin;
207288470	2025-05-02 22:50:06.136	eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee	user_2mihXnuTOfRj8ZcnWjupGV9yE01	11111111-1111-1111-1111-111111111111
128518520	2025-05-02 23:28:48.607	ffffffff-ffff-ffff-ffff-ffffffffffff	user_2mihXnuTOfRj8ZcnWjupGV9yE01	22222222-2222-2222-2222-222222222222
155322740	2025-05-02 23:32:40.747	11111111-2222-2222-2222-222222222222	user_2mihXnuTOfRj8ZcnWjupGV9yE01	aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
121087810	2025-05-02 23:34:06.139	22222222-3333-3333-3333-333333333333	user_2mihXnuTOfRj8ZcnWjupGV9yE01	99999999-9999-9999-9999-999999999999
25854230	2025-05-03 00:58:38.12	33333333-4444-4444-4444-444444444444	user_2mihXnuTOfRj8ZcnWjupGV9yE01	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb
56010240	2025-05-03 00:59:12.979	44444444-5555-5555-5555-555555555555	user_2mihXnuTOfRj8ZcnWjupGV9yE01	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb
\.


--
-- Data for Name: Project; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: Transaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Transaction" (amount, "createdAt", "transactionId", type, "walletId", "investmentId", status, "updatedAt") FROM stdin;
207288470	2025-05-02 22:50:06.157	aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaaa	SPEND	cccccccc-cccc-cccc-cccc-cccccccccccc	eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee	APPROVED	2025-05-03 00:37:52.978
128518520	2025-05-02 23:28:48.619	aaaaaaa2-aaaa-aaaa-aaaa-aaaaaaaaaaaa	SPEND	dddddddd-dddd-dddd-dddd-dddddddddddd	ffffffff-ffff-ffff-ffff-ffffffffffff	APPROVED	2025-05-03 00:37:52.978
155322740	2025-05-02 23:32:40.755	aaaaaaa3-aaaa-aaaa-aaaa-aaaaaaaaaaaa	SPEND	cccccccc-cccc-cccc-cccc-cccccccccccc	11111111-2222-2222-2222-222222222222	APPROVED	2025-05-03 00:37:52.978
121087810	2025-05-02 23:34:06.146	aaaaaaa4-aaaa-aaaa-aaaa-aaaaaaaaaaaa	SPEND	cccccccc-cccc-cccc-cccc-cccccccccccc	22222222-3333-3333-3333-333333333333	APPROVED	2025-05-03 00:37:52.978
25854230	2025-05-03 00:58:38.135	aaaaaaa5-aaaa-aaaa-aaaa-aaaaaaaaaaaa	SPEND	cccccccc-cccc-cccc-cccc-cccccccccccc	33333333-4444-4444-4444-444444444444	APPROVED	2025-05-03 00:58:38.148
56010240	2025-05-03 00:59:12.984	aaaaaaa6-aaaa-aaaa-aaaa-aaaaaaaaaaaa	SPEND	cccccccc-cccc-cccc-cccc-cccccccccccc	44444444-5555-5555-5555-555555555555	APPROVED	2025-05-03 00:59:12.993
\.


