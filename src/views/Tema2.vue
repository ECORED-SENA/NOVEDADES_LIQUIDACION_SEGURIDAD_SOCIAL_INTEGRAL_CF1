<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normatividad de seguridad social

     
    .bloque-texto-a.clr-grayBlue.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema2/t2_01.svg", alt="alt").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 El Sistema de Seguridad Social Integral vigente en Colombia, fue establecido por la Ley 100 de 1993 y establece que es el conjunto de instituciones, normas y procedimientos, de que disponen la persona y la comunidad para gozar de una calidad de vida, mediante el cumplimiento progresivo de los planes y programas que el Estado y la sociedad desarrollen para proporcionar la cobertura integral de las contingencias, especialmente las que menoscaban la salud y la capacidad económica, de los habitantes del territorio nacional, con el fin de lograr el bienestar individual y la integración de la comunidad. Se puede ver a continuación:

    .bg_waves_03.pb-5
      .row.justify-content-center.mb-5
        .col-lg-11
          SlyderE(indicadores="derecha")
            .row.justify-content-center
              .col-lg-7
                p #[strong.txt--purple a.] Según lo establecido en el Artículo 1° el Sistema de Seguridad Social Integral tiene por objeto garantizar los derechos irrenunciables de la persona y la comunidad para obtener la calidad de vida acorde con la dignidad humana, mediante la protección de las contingencias que la afecten.           
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema2/t2_02.png', alt='', style="470px;")    

            .row.justify-content-center
              .col-lg-7
                p #[strong.txt--purple b.] El Sistema comprende las obligaciones del Estado y la sociedad, las instituciones y los recursos destinados a garantizar la cobertura de las prestaciones de carácter económico, de salud y de servicios complementarios, incorporados en la Ley 100 de 1993 y en otras normas.          
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema2/t2_03.png', alt='', style="470px;")

            .row.justify-content-center
              .col-lg-7
                p #[strong.txt--purple c.] La Seguridad Social es un servicio público obligatorio, cuya dirección, coordinación y control está a cargo del Estado y es prestado por entidades públicas y privadas. Mediante la implementación de este sistema se evitan desequilibrios económicos y sociales, pues el hecho de no resolverse podría significar la reducción o pérdida de los ingresos a causa de contingencias como la enfermedad, los accidentes, la maternidad o el desempleo, entre otras.     
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema2/t2_04.png', alt='', style="470px;")     

            .row.justify-content-center
              .col-lg-7
                p #[strong.txt--purple d.] De acuerdo con la Ley 100 de 1993, el Sistema de Seguridad Social Integral en Colombia se compone de los sistemas de pensiones, de salud y de riesgos laborales y de los servicios sociales complementarios.    
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema2/t2_05.png', alt='', style="470px;")    

      .imgBg_01.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-5.mb-lg-0
            h4.purpleTitle Sistema General de Pensiones
            p El Sistema General de Pensiones tiene por objeto garantizar a la población, el amparo contra las contingencias derivadas de la vejez, la invalidez y la muerte, mediante el reconocimiento de las pensiones y prestaciones determinadas en la Ley. También propende por la ampliación progresiva de cobertura a los segmentos de población no cubiertos con un sistema de pensiones (Ley 100 de 1993, Art. 10).
            p El Sistema General de Pensiones está compuesto por dos regímenes solidarios excluyentes pero que coexisten:           
          .col-lg-4(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/tema2/t2_06.png", alt="alt", style="width:400px;").m-auto  

    .row.justify-content-center.position-relative.mb-5
      .fondo-tarjetas-flip
        img(src="@/assets/curso/fondo-tarjetas-flip.svg")

      .col-auto.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema2/t2_07.png", alt="alt")
            .flip-back.p-4             
              h4.text-center.pt-5 Régimen solidario de prima media con prestación definida 
              p.text-center Que es de carácter público y es administrado por Colpensiones.
      .col-auto.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema2/t2_08.png", alt="alt")
            .flip-back.p-4             
              h4.text-center.pt-5 Régimen de ahorro individual con solidaridad
              p.text-center Que es de carácter privado y es operado por las Administradoras de Fondos de Pensiones y Cesantías.    
     

    .bg_purple_01.mb-5
      .row.justify-content-center        
        h4.text-white.text-center.pt-5.mb-5 La afiliación al sistema de general de pensiones será:
        .col-lg-6.px-4
          .row.align-items-end.mb-5
            .col-auto
              figure
                img(src="@/assets/curso/tema2/t2_08.svg", alt="alt", style="width:90px")
            .col           
              p.mb-0.yellowTitle #[strong En forma obligatoria]

          p.text-white.mb-5 Todas aquellas personas vinculadas mediante contrato de trabajo o como servidores públicos. Así mismo, las personas naturales que presten directamente servicios al Estado o a las entidades o empresas del sector privado, bajo la modalidad de contratos de prestación de servicios, o cualquier otra modalidad de servicios que adopten, los trabajadores independientes y los grupos de población que por sus características o condiciones socioeconómicas sean elegidos para ser beneficiarios de subsidios a través del Fondo de Solidaridad Pensional, de acuerdo con las disponibilidades presupuestales.

          img(src="@/assets/curso/warpLines_02.svg", alt="alt", style="float:right;width:100px;height:auto;").mb-5

        .col-lg-6.mb-5.mb-lg-0
          .row.align-items-end.mb-5
            .col-auto
              figure
                img(src="@/assets/curso/tema2/t2_09.svg", alt="alt", style="width:90px")
            .col           
              p.mb-0.yellowTitle #[strong En forma voluntaria]

          p.text-white Todas las personas naturales residentes en el país y los colombianos domiciliados en el exterior, que no tengan la calidad de afiliados obligatorios y que no se encuentren expresamente excluidos por la presente ley. También en el caso de los extranjeros, si no están afiliados por algún régimen en su país de origen y tengan algún contrato de trabajo permanente en Colombia. 

          img(src="@/assets/curso/warpLines_02.svg", alt="alt", style="float:right;width:100px;height:auto;")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/t2_10.png", alt="alt", style="width:485px;").m-auto
      .col-lg-7
        h4.purpleTitle Sistema General de Seguridad Social en Salud
        p El Sistema General de Seguridad Social en Salud tiene por objeto regular el servicio público esencial de salud y crear condiciones de acceso al servicio a toda la población, en todos los niveles de atención. Las Entidades Promotoras de Salud (EPS) son las encargadas de su operación y la prestación del servicio está a cargo de las Instituciones Prestadoras de Servicios de Salud (IPS). 
        p Para mayor información y ampliar conocimientos en la norma que respecta al Sistema General de Seguridad Social en Salud, se puede consultar la siguiente tabla 1: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1. Normatividad Vigente para el Sistema General de Seguridad Social en Salud 
      
    .tabla-a.color-acento-contenido.mb-5  
      table           
        thead
          tr
            th Leyes
            th Decretos
            th Resoluciones           
        tbody
          tr
            td
              | Ley 100 de 1993 - Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones.
            td
              | Decreto 780 de 2016 - Por medio del cual se expide el Decreto &Uacute;nico Reglamentario del Sector Salud y Protecci&oacute;n Social.
            td
              | Resoluci&oacute;n 768 de 2018 - Por la cual se adoptan las reglas y condiciones generales para la operaci&oacute;n del Sistema de Afiliaci&oacute;n Transaccional- SAT.
            
          tr
            td
              | Ley 1751 de 2015 - Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.
            td
              | Decreto 064 de 2020 - Por la cual se modifican los art&iacute;culos 2.1.3.11, 2.1.3.13, 2.1.5.1, 2.1.7.7, 2.1.7.8 y 2.1.3.17 y se adicionan los art&iacute;culos 2.1.5.4 y 2.1.5.5 del Decreto 780 de 2016, en relaci&oacute;n con los afiliados al r&eacute;gimen subsidiado la afiliaci&oacute;n de oficio y se dictan otras disposiciones.
            td

    .cp.mb-4
      .waves.d-none.d-lg-block
      .cp_title     
        h4.purpleTitle Sistema General de Riesgos Laborales
        p El Sistema General de Riesgos Laborales es el conjunto de entidades públicas y privadas, normas y procedimientos, destinados a prevenir, proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan.

    .tarjeta.clr-primario_00.p-4.p-lg-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          .h5.txt--darkPurple De lo anterior se hace necesario tener claro la conceptualización de un riesgo profesional y accidente de trabajo: 
        .col-lg
          .row.justify-content-center.tarjetas-overflow(data-aos="flip-right")
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                div                  
                  figure.mb-4
                    img(src='@/assets/curso/tema2/t2_11.svg', style="width:190px")
                  h4.text-center Riesgos profesionales
                  p.text-center.mb-0.text-small El accidente que se produce como consecuencia directa del trabajo o labor desempeñada, y la enfermedad que haya sido catalogada como profesional por el Gobierno Nacional. 
                

            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                div
                  .figure.mb-4
                    img(src='@/assets/curso/tema2/t2_12.svg', style="width:190px")
                  h4.text-center Accidente de trabajo
                  p.text-center.mb-0.text-small Se considera, en primer lugar, todo suceso repentino que sobrevenga por causa o con ocasión del trabajo y que produzca en el trabajador una lesión orgánica, una perturbación funcional, una invalidez o la muerte, en segundo lugar; los accidentes que se produce durante la ejecución de órdenes del empleador, o durante la ejecución de una labor bajo su autoridad, aún fuera del lugar y horas de trabajo, y en tercer lugar, los accidentes que se produzcan durante el traslado de los trabajadores desde su residencia a los lugares de trabajo o viceversa, cuando el transporte lo suministre el empleador.

    h4.text-center.mb-5 Las principales características del Sistema General de Riesgos Laborales, son: 
    
    .bg_waves_01
      .row.justify-content-center
        .col-lg-8
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/t2_13.svg', alt='', style="width:780px;").m-auto            

            .tarjeta.color-acento-contenido.p-4(x="18%" y="100%" numero="1")          
              p.txt--sistema.mb-0 1. Es dirigido, orientado, controlado y vigilado por el Estado.

            .tarjeta.color-acento-contenido.p-4(x="5%" y="80%" numero="2")          
              p.txt--sistema.mb-0 2. Las entidades administradoras tendrán a su cargo la afiliación al sistema y la administración del mismo.

            .tarjeta.color-acento-contenido.p-4(x="3%" y="50%" numero="3")          
              p.txt--sistema.mb-0 3. Todos los empleadores deben afiliarse al Sistema General de Riesgos Profesionales.

            .tarjeta.color-acento-contenido.p-4(x="18%" y="18%" numero="4")          
              p.txt--sistema.mb-0 4. La afiliación de los trabajadores dependientes es obligatoria para todos los empleadores.

            .tarjeta.color-acento-contenido.p-4(x="37%" y="5%" numero="5")          
              p.txt--sistema.mb-0 5. El empleador que no afilie a sus trabajadores al Sistema recibirá sanciones legales y será responsable de las prestaciones que se otorgan en el decreto.

            .tarjeta.color-acento-contenido.p-4(x="58%" y="5%" numero="6")          
              p.txt--sistema.mb-0 6. El empleador puede seleccionar la entidad que administra el sistema.

            .tarjeta.color-acento-contenido.p-4(x="70%" y="0%" numero="7")          
              p.txt--sistema.mb-0 7. Los trabajadores afiliados tendrán derecho al reconocimiento y pago de las prestaciones previstas. 

            .tarjeta.color-acento-contenido.p-4(x="85%" y="8%" numero="8")          
              p.txt--sistema.mb-0 8. Las cotizaciones al Sistema están a cargo de los empleadores. 

            .tarjeta.color-acento-contenido.p-4(x="95%" y="25%" numero="9")          
              p.txt--sistema.mb-0 9. La relación laboral implica la obligación de pagar las cotizaciones que se establecen en el decreto. 

            .tarjeta.color-acento-contenido.p-4(x="98%" y="55%" numero="10")          
              p.txt--sistema.mb-0  10. Los empleadores y trabajadores afiliados al Instituto de Seguros Sociales para los riesgos de ATEP, o a cualquier otro fondo o caja previsional o de seguridad social, a la vigencia del presente decreto, continúan afiliados, sin solución de continuidad, al Sistema General de Riesgos Profesionales que por este decreto se organiza.

            .tarjeta.color-acento-contenido.p-4(x="92%" y="80%" numero="11")          
              p.txt--sistema.mb-0  11. La cobertura del sistema se inicia desde el día calendario siguiente al de la afiliación.

            .tarjeta.color-acento-contenido.p-4(x="82%" y="95%" numero="12")          
              p.txt--sistema.mb-0  12. Los empleadores sólo podrán contratar el cubrimiento de los riesgos profesionales de todos sus trabajadores con una sola entidad administradora de riesgos profesionales, sin perjuicio de las facultades que tendrán estas entidades administradoras para subcontratar con otras entidades cuando ello sea necesario.

      .cp.mb-3
        .waves--h.d-none.d-lg-block
        .cp_title            
          p.mb-0 Su financiación proviene de la cotización obligatoria, determinada por el nivel de ingreso y la clasificación del riesgo. Las Administradoras de Riesgos Profesionales (ARL) son las entidades responsables de la afiliación, el registro y el recaudo de sus cotizaciones. 

      p.mb-5 Ahora, se debe observar y escuchar la siguiente información, en la que se detallan las prestaciones otorgadas por el sistema general de riesgos laborales:

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/m3sbs5tJMbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    p.mb-5 Para mayor información y ampliar conocimientos en la norma que respecta al Sistema General de Riesgos Laborales, puede consultar la siguiente recurso: 
        
    h4.text-center.mb-5 Normatividad Vigente para el Sistema General de Riesgos Laborales

    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Leyes")
            h4 Leyes
            p Ley 100 de 1993 - Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones.
              br
              br
              | Ley 1562 de 2012 - Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de salud ocupacional.

          .tarjeta.clr-paleYellow.p-4(titulo="Decretos")
            h4 Decretos
            p Decreto 1295 de 1994 - Determina la organización y administración del Sistema General de Riesgos Profesionales. 
              br
              br
              | Decreto 1072 de 2015 - Decreto Único Reglamentario del Sector Trabajo.
              br
              br
              | Decreto 780 de 2016 - Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.
              br
              br
              | Decreto 2058 de 2018 - Por la cual se modifica el Título 2 de la Parte 1 y el artículo 2.1.5.1 del Decreto 780 de 2016, Único Reglamentario del Sector Salud y Protección Social.

          .tarjeta.clr-paleYellow.p-4(titulo="Resoluciones")
            h4 Resoluciones
            p Resolución 3310 de 2018 - Por la cual se adopta el Formulario Único de Afiliación y Reporte de Novedades al sistema general de riesgos laborales y dictan otras disposiciones.
              br
              br
              | Resolución 2389 de 2019 - Por la cual se definen los lineamientos generales para la operación del Sistema General de Riesgos Laborales-SGRL en el Sistema de Afiliación Transaccional – SAT y se adopta el formulario de afiliación y traslado del empleador al Sistema General de Riesgos Laborales.
              br
              br
              | Resolución 2945 de 2019 - Por la cual se modifica la Resolución 2389 de 2019 en relación con la ampliación de unos plazos y se dictan otras disposiciones.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/t2_14.png", alt="alt", style="width:450px;").m-auto

    .imgBg_01B.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-5.mb-lg-0(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/tema2/t2_15.png", alt="alt", style="width:400px;").m-auto
        .col-lg-8
          h4.purpleTitle Servicios Sociales Complementarios (Colombia mayor)
          p También conocidos como subsidios económicos, buscan proteger a las personas de la tercera edad que se encuentran desamparadas, no cuentan con una pensión o viven en la indigencia y/o en extrema pobreza. En la actualidad como ejemplo de este componente existe el Programa Colombia Mayor que otorga un subsidio económico a las personas mayores de edad con bajos ingresos o que carezcan de estos. 
            br
            br
            | Según lo contemplado en la Ley 100, entre los otros programas que hacen parte del Sistema de Seguridad Social en Colombia, son:

    .tarjeta.clr-primario_00.p-4.p-lg-5.mb-4
      .row.justify-content-center.align-items-center        
        .col
          .row.justify-content-center.tarjetas-overflow(data-aos="flip-right")
            .col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                div                  
                  figure.mb-4
                    img(src='@/assets/curso/tema2/t2_16.svg', style="width:190px")
                  h4.text-center.mb-4 Cesantías
                  p.text-center.mb-0.text-small Son una prestación social a la que tienen derecho los empleados del sector público y privado, diseñada con el fin de crear un ahorro para solventar los gastos durante el desempleo, pero que puede ser usado para pagar educación superior o comprar vivienda. Estas son administradas por los fondos privados y por el Fondo Nacional del Ahorro, en el caso de los trabajadores del Estado.   

            .col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                div
                  .figure.mb-4
                    img(src='@/assets/curso/tema2/t2_17.svg', style="width:190px")
                  h4.text-center.mb-4 Subsidio Familiar
                  p.text-center.mb-0.text-small Es una prestación social cuyo objetivo fundamental consiste en el alivio de las cargas económicas que representan el sostenimiento de la familia como núcleo básico de la sociedad (Artículo 343 del Código Sustantivo del Trabajo). Este subsidio no se considera un salario, sino un derecho latente que se concreta cuando se le genera al trabajador por razones de parentesco, convivencia o dependencia económica, para que con este disfrute de los beneficios que ofrecen las instituciones responsables de la administración del subsidio. Este es administrado por las cajas de compensación familiar y su subsidio es suministrado a los trabajadores en bienes, servicios y en ayudas monetarias.
                  
            .col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                div
                  .figure.mb-4
                    img(src='@/assets/curso/tema2/t2_18.svg', style="width:190px")
                  h4.text-center.mb-4 Beneficios Económicos Periódocos (BEPS)
                  p.text-center.mb-0.text-small Es un programa de ahorro voluntario para la vejez, que favorece a los colombianos que hoy no cuentan con la posibilidad de cotizar para una pensión, o que, habiendo hecho, cumplieron la edad y no lograron obtenerla. Estos consisten en un ahorro durante la etapa laboral que será disfrutado en la vejez como una forma de ingreso. Este ahorro es voluntario, flexible en su monto y periodicidad, lo cual permite una mayor cobertura.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
