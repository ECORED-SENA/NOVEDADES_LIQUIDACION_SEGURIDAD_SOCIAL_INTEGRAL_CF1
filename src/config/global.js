export default {
  global: {
    componenteFormativo: 'Normatividad para la liquidación de seguridad social',
    descripcionCurso:
      'Las actividades diseñadas en este componente de formación, permiten identificar y conocer las novedades para la liquidación de la seguridad social según la normativa. Estas permitirán identificar los tipos de contrato, la normativa vigente para el sistema de seguridad social integral y las obligaciones del empleador o contratante.',
    //imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptualización y clasificación de contratación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad de seguridad social',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Obligaciones laborales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 1295 de 1994. [Ministro de Gobierno de la República de Colombia]. Por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales. 22 de junio de 1994. DO. N° 41405.',
      link: '',
    },
    {
      referencia:
        'Duque Quintero, S. P., Quintero Quintero, M. L. & Duque Quintero, D. A. (2017). La seguridad social como un derecho fundamental para las comunidades rurales en Colombia.',
      link: '',
    },
    {
      referencia:
        'Farne, S., Perdomo, J., Vergara, C. A., Arrieta, C. I., Mora, K., & Rodríguez, M. (2008). Caracterización del trabajo independiente y su afiliación a la seguridad social en Colombia (No. 015936). Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia:
        'Franco, A. (2000). Seguridad social y salud en Colombia estado de la reforma. Revista de salud pública, 2(1), 1-16.',
      link: '',
    },
    {
      referencia:
        'Ley 100 de 1993. [Congreso de la República de Colombia].  Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO. N° 41148. ',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (2021). Diccionario de la lengua española.',
      link: 'https://dle.rae.es',
    },
  ],
  glosario: [
    {
      termino: 'Contrato',
      significado:
        'Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada y a cuyo cumplimiento pueden ser compelidas.',
    },
    {
      termino: 'Normatividad',
      significado:
        'Conjunto de normas aplicables a una determinada materia o actividad.',
    },
    {
      termino: 'Obligaciones',
      significado:
        'Vínculo que sujeta a hacer o abstenerse de hacer algo, establecido por precepto de ley, por voluntario otorgamiento o por derivación recta de ciertos actos.',
    },
    {
      termino: 'Seguridad social integral',
      significado:
        'Conjunto de entidades, normas y procedimientos a los cuales pueden tener acceso las personas y la comunidad con el fin principal de garantizar una calidad de vida digna. ',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 100 de 1993. [Congreso de la República de Colombia]. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO. N° 41148.',
      tipo: 'Web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html',
    },
    {
      texto:
        'Decreto 1295 de 1994. [Ministerio de Gobierno de la República de Colombia]. Por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales. 22 de junio de 1994. DO. N° 41405.',
      tipo: 'Web',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1261244',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria de la Empresa y los Servicios (CIES) - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria de la Empresa y los Servicios (CIES) - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Torres Tinoco'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
