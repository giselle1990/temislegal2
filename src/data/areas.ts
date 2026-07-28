export interface LegalArea {
	slug: string;
	icon: string;
	title: string;
	shortDescription: string;
	pageDescription: string;
	heading: string;
	image: string;
	imageAlt: string;
	paragraphs: string[];
	topics: string[];
	featured?: boolean;
}

export const legalAreas: LegalArea[] = [
	{
		slug: 'derecho-laboral',
		icon: '▰',
		title: 'Derecho Laboral',
		shortDescription: 'Asesoramiento en relaciones de trabajo, reclamos, despidos y accidentes laborales.',
		pageDescription: 'Asesoramiento jurídico en Derecho Laboral para analizar conflictos y proteger los derechos de cada parte.',
		heading: 'Soluciones claras frente a los conflictos laborales',
		image: 'images/biblioteca-libro-abierto.jpg',
		imageAlt: 'Biblioteca jurídica con tomos históricos y un libro abierto',
		paragraphs: [
			'Las relaciones laborales pueden generar dudas y conflictos que requieren una evaluación cuidadosa. Analizamos cada situación de manera individual para determinar qué derechos están comprometidos y cuáles son las alternativas más convenientes.',
			'Brindamos acompañamiento en reclamos salariales, registración laboral, despidos, indemnizaciones, accidentes y enfermedades vinculadas con el trabajo. Nuestro objetivo es ordenar la información y diseñar una estrategia jurídica comprensible y realista.',
			'La intervención puede incluir asesoramiento preventivo, negociación, intercambio de comunicaciones laborales y representación en las instancias administrativas o judiciales que correspondan.',
		],
		topics: [
			'Despidos e indemnizaciones',
			'Trabajo no registrado o deficientemente registrado',
			'Diferencias salariales y horas extras',
			'Accidentes y enfermedades laborales',
			'Negociaciones y reclamos laborales',
		],
	},
	{
		slug: 'derecho-laboral-maritimo',
		icon: '⚓',
		title: 'Derecho Laboral Marítimo',
		shortDescription: 'Protección y asesoramiento para trabajadores marítimos, portuarios y pesqueros.',
		pageDescription: 'Asesoramiento especializado para trabajadores marítimos, portuarios y pesqueros.',
		heading: 'Protección legal en un ámbito de trabajo particular',
		image: 'images/areas/derecho-laboral-maritimo.jpg',
		imageAlt: 'Flota de barcos pesqueros amarrados en el puerto',
		paragraphs: [
			'La actividad marítima presenta condiciones laborales, riesgos y normas específicas. Cada caso exige considerar tanto la relación de trabajo como las particularidades de la navegación, la pesca y las tareas portuarias.',
			'Brindamos acompañamiento en reclamos salariales, diferencias de haberes, accidentes de trabajo, enfermedades profesionales, despidos y registración laboral. El análisis integral permite identificar responsabilidades y definir una estrategia adecuada.',
			'Nuestro objetivo es que cada trabajador conozca sus derechos, comprenda las alternativas disponibles y cuente con respaldo profesional durante el reclamo, la negociación o el proceso judicial.',
		],
		topics: [
			'Despidos e indemnizaciones',
			'Accidentes y enfermedades profesionales',
			'Diferencias salariales y horas extras',
			'Registración de la relación laboral',
			'Conflictos portuarios, pesqueros y de navegación',
		],
		featured: true,
	},
	{
		slug: 'derecho-de-familia',
		icon: '♟',
		title: 'Derecho de Familia',
		shortDescription: 'Acompañamiento en divorcios, alimentos, responsabilidad parental y protección familiar.',
		pageDescription: 'Asesoramiento jurídico en divorcios, acuerdos patrimoniales, alimentos, responsabilidad parental y protección familiar.',
		heading: 'Acompañamiento jurídico en decisiones familiares sensibles',
		image: 'images/biblioteca-justicia.jpg',
		imageAlt: 'Biblioteca jurídica con tomos históricos y una figura de la Justicia',
		paragraphs: [
			'Los conflictos familiares requieren una mirada jurídica cuidadosa y, al mismo tiempo, humana. Acompañamos procesos de divorcio y la organización de sus consecuencias patrimoniales, incluyendo la división de la comunidad de bienes, los acuerdos entre cónyuges y la administración separada del patrimonio.',
			'También intervenimos en cuestiones vinculadas con los deberes alimentarios, tanto entre progenitores como entre otros parientes. El asesoramiento contempla las necesidades particulares de cada familia y la extensión de estas obligaciones cuando existen personas con discapacidad que necesitan protección especial.',
			'Brindamos asistencia en responsabilidad y representación parental, modalidades compartidas de cuidado, adopción, tutela y curatela. En situaciones de violencia de género, priorizamos una intervención responsable que permita acceder a las medidas de protección correspondientes.',
		],
		topics: [
			'Divorcio y división de bienes',
			'Acuerdos patrimoniales entre cónyuges',
			'Alimentos entre progenitores y parientes',
			'Responsabilidad y representación parental',
			'Adopción, tutela y curatela',
			'Violencia de género',
		],
	},
	{
		slug: 'derecho-civil-y-sucesiones',
		icon: '⚖',
		title: 'Derecho Civil y Sucesiones',
		shortDescription: 'Análisis de conflictos civiles, sucesiones, daños, locaciones y divisiones de bienes.',
		pageDescription: 'Asesoramiento en sucesiones, daños y perjuicios, condominios, locaciones y desalojos.',
		heading: 'Análisis concreto para proteger derechos y patrimonio',
		image: 'images/biblioteca-libro-abierto.jpg',
		imageAlt: 'Biblioteca jurídica con tomos históricos y un libro abierto',
		paragraphs: [
			'En los asuntos civiles, la estrategia comienza con un análisis detallado del caso concreto, la documentación disponible y los objetivos de la persona consultante. Esta evaluación permite anticipar riesgos y elegir el camino más adecuado.',
			'Intervenimos en reclamos por daños y perjuicios originados tanto en contratos como en hechos extracontractuales. También asesoramos en divisiones de condominio, conflictos entre copropietarios, locaciones y procesos de desalojo.',
			'En materia sucesoria, acompañamos la organización y transmisión del patrimonio desde el inicio del trámite hasta su conclusión. Buscamos ordenar la documentación, facilitar acuerdos y evitar que el proceso genere conflictos innecesarios.',
		],
		topics: [
			'Sucesiones',
			'Daños contractuales y extracontractuales',
			'División de condominio',
			'Locaciones',
			'Desalojos',
		],
	},
	{
		slug: 'derecho-comercial',
		icon: '◇',
		title: 'Derecho Comercial',
		shortDescription: 'Asesoramiento societario, cambiario, bursátil y en procesos de crisis empresarial.',
		pageDescription: 'Asesoramiento comercial en sociedades, derecho cambiario, concursos preventivos y quiebras.',
		heading: 'Respaldo jurídico para decisiones empresariales complejas',
		image: 'images/biblioteca-justicia.jpg',
		imageAlt: 'Biblioteca jurídica con tomos históricos y una figura de la Justicia',
		paragraphs: [
			'Brindamos asesoramiento a sociedades y emprendimientos en las decisiones jurídicas que acompañan su actividad. El objetivo es ordenar relaciones internas, documentar acuerdos y prevenir conflictos que puedan afectar la continuidad del negocio.',
			'La asistencia también comprende cuestiones de derecho cambiario y bursátil, con análisis de los instrumentos y obligaciones involucrados en cada operación. Trabajamos con una mirada estratégica, conectando la situación legal con la realidad económica de la empresa.',
			'Ante dificultades financieras, intervenimos en concursos preventivos y declaraciones de quiebra. Analizamos la posición de los acreedores, incluyendo los privilegios de los créditos laborales y la situación de los acreedores quirografarios.',
		],
		topics: [
			'Sociedades y acuerdos empresariales',
			'Derecho cambiario y bursátil',
			'Concursos preventivos',
			'Declaración de quiebra',
			'Privilegios de acreedores laborales',
			'Acreedores quirografarios',
		],
	},
	{
		slug: 'fondo-de-comercio',
		icon: '⌂',
		title: 'Fondo de Comercio',
		shortDescription: 'Asistencia en la venta y transferencia formal de establecimientos comerciales.',
		pageDescription: 'Asesoramiento para la venta y transferencia de fondos de comercio y la publicación de edictos.',
		heading: 'Transferencias comerciales ordenadas y seguras',
		image: 'images/biblioteca-libro-abierto.jpg',
		imageAlt: 'Biblioteca jurídica con tomos históricos y un libro abierto',
		paragraphs: [
			'La venta de un fondo de comercio implica transferir un conjunto organizado de bienes, derechos y elementos vinculados con una actividad. Por eso, la operación necesita una revisión previa que permita definir con claridad qué se transmite y bajo qué condiciones.',
			'Acompañamos la preparación de la transferencia, la documentación del acuerdo y el cumplimiento de las formalidades aplicables. Una gestión ordenada ayuda a proteger tanto a quien vende como a quien adquiere el establecimiento.',
			'También intervenimos en la publicación de edictos y en las etapas necesarias para informar la operación y atender eventuales oposiciones. El objetivo es que la transferencia avance con seguridad jurídica y sin omitir pasos relevantes.',
		],
		topics: [
			'Venta de fondos de comercio',
			'Transferencia de establecimientos',
			'Revisión de documentación',
			'Publicación de edictos',
			'Formalización de la operación',
		],
	},
];
