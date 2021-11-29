<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptualización y clasificación de contratación

    .imgBg_01.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-2.order-lg-1
          p En Colombia toda actividad laboral está regulada por el #[strong.txt--purple Código Sustantivo del Trabajo (CST)], su objetivo primordial es lograr la justicia en las relaciones que surgen entre empleadores y trabajadores, dentro de un espíritu de coordinación económica y equilibrio social. Su regulación está relacionada al derecho individual del trabajo de carácter particular, derecho colectivo de trabajo, oficiales y particulares. 
          .cajon.cajon--amarillo
            p.mb-0 Antes de estudiar con más profundidad los tipos de contratos o formas de contratación es importante, tener claro algunos conceptos relacionados; es así como en el Artículo 5 y 6 del Código Sustantivo del Trabajo se encuentra  la definición de Trabajo y Trabajo Ocasional, lo que permitirá tener una idea más clara al momento de contratar y definir funciones. A continuación se puede ver:
        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/t1_01.png", alt="alt", style="width:400px;").m-auto

    .row.justify-content-center.position-relative.mb-5
      .fondo-tarjetas-flip
        img(src="@/assets/curso/fondo-tarjetas-flip.svg")

      .col-auto.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema1/t1_02.png", alt="alt")
            .flip-back.p-4             
              h4.text-center.pt-5 Trabajo
              p.text-center Se entiende como toda actividad humana libre, ya sea material o intelectual, permanente o transitoria, que una persona natural ejecuta conscientemente al servicio de otra, y cualquiera que sea su finalidad, siempre que se efectúe en ejecución de un contrato de trabajo.
      .col-auto.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema1/t1_03.png", alt="alt")
            .flip-back.p-4             
              h4.text-center.pt-5 Trabajo ocasional
              p.text-center También conocido como trabajo ocasional, accidental o transitorio, es el de corta duración y no mayor de un mes, que se refiere a labores distintas de las actividades normales del empleador.
    

    .bloque-texto-a.clr-grayBlue.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema1/t1_04.svg", alt="alt").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Por otra parte, en el Artículo 22 del Código Sustantivo del Trabajo se encuentra que la definición de #[strong.txt--darkPurple contrato de trabajo] es aquel por el cual una persona natural se obliga a prestar un servicio personal a otra persona, natural o jurídica, bajo la continuada dependencia o subordinación de la segunda y mediante remuneración. #[strong.txt--purple En esta parte, se denomina trabajador a quien presta el servicio, empleador a quien recibe el servicio y remunera, y, la remuneración], cualquiera que sea la forma o salario.

    p.mb-5 Para que haya contrato de trabajo se requiere que concurran estos tres elementos esenciales:

    .row.justify-content-center
      .col-lg-9     
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/t1_05.svg', alt='', style="width:1200px;").m-auto            

          .tarjeta.color-acento-contenido.p-4(x="23%" y="30%" numero="1")          
            p.txt--sistema.mb-0 Un salario como retribución del servicio.

          .tarjeta.color-acento-contenido.p-4(x="47%" y="57%" numero="2")          
            p.txt--sistema.mb-0 La actividad personal del trabajador.

          .tarjeta.color-acento-contenido.p-4(x="80%" y="35%" numero="3")          
            p.txt--sistema.mb-0 La continuada subordinación o dependencia del trabajador respecto del empleador, que faculta a éste para exigirle el cumplimiento de órdenes, en cualquier momento, en cuanto al modo, tiempo o cantidad de trabajo, e imponerle reglamentos, la cual debe mantenerse por todo el tiempo de duración del contrato.

    .bg_waves_02
      br
      br
      br

      .row.justify-content-center.mb-4.pt-5
        .col-lg-5.mb-5.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema1/t1_06.png", alt="alt", style="width:505px;").m-auto
        .col-lg-7
          .cp.mb-5
            .dots
            p.mb-0 De lo anterior, se puede resaltar la importancia de conocer los tipos de contratos que se dan en Colombia, con el fin de saber cuál de ellos se puede aplicar a los trabajadores partiendo de los requerimientos y necesidades de la empresa o empleador, y desde el punto de vista del trabajador cuál de ellos es el que mejor le conviene.        

          h4.purpleTitle Tipos de contrato
          p Es importante resaltar que un contrato laboral regula los deberes y derechos entre el empleador y empleado, establece el término de duración y la forma de ejecución. #[strong.txt--darkPurple  Existen varios tipos de contratos para vincular un trabajador a una empresa], todos estos tienen la misma particularidad, pero existen diferencias que permiten clasificarlos, estas son: 

      p.mb-5 Según la legislación colombiana, los tipos de contratos se pueden clasificar de la siguiente manera:

      .titulo-sexto.color-primario
        h5 Clasificación tipos de contratos      

      figure.mb-5
        img(src="@/assets/curso/tema1/t1_07.svg", alt="alt", style="width:1200px;").m-auto

      .row.justify-content-center.align-items-start.mb-4
        p.mb-4 A continuación, se conocerán las características de cada uno de ellos:
        .col-lg-7.order-2.order-lg-1      
          h4.purpleTitle Por su forma
          p Además de la duración, los contratos se pueden clasificar por la forma en que se acuerdan: por escrito y verbales:

          LineaTiempoD.color-acento-contenido.mb-5
            .row(numero="1" titulo="Contratos Verbales")
              .col-12
                p Son los que se concretan simplemente con el acuerdo entre las partes sin firmar ningún documento escrito. Es importante tener presente que esta forma de contrato en caso de discrepar con su empleador, le será más difícil probar las condiciones y acuerdos pactados. Para que un contrato verbal sea válido las partes deben acordar, por lo menos, lo siguiente: 
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | El trabajo que se va a realizar y el lugar donde va a llevarse a cabo.
                  li 
                    i.fas.fa-check
                    | El valor del contrato (la remuneración o salario), la forma y períodos en los que se hará el pago.
                  li 
                    i.fas.fa-check
                    | La duración.
            .row(numero="2" titulo="Contrato por escrito")
              .col-12
                p Son los que como su nombre lo indica, quedan por escrito. Su ventaja es que permite establecer de forma precisa las obligaciones y derechos de las partes. Para que se puede establecer debe existir necesariamente las siguientes condiciones: 
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | La identificación y domicilio de las partes.
                  li 
                    i.fas.fa-check
                    | El lugar y la fecha de su celebración.
                  li 
                    i.fas.fa-check
                    | El lugar en donde se haya contratado el trabajador y en donde haya de prestar el servicio. 
                  li 
                    i.fas.fa-check
                    | La naturaleza del trabajo. 
                  li 
                    i.fas.fa-check
                    | La cuantía de la remuneración.
                  li 
                    i.fas.fa-check
                    | Su forma y periodos de pago. 
                  li 
                    i.fas.fa-check
                    | La estimación de su valor (suministros de habitación y alimentación). 
                  li 
                    i.fas.fa-check
                    | Duración del contrato.
                  li 
                    i.fas.fa-check
                    | Terminación del contrato.

        .col-lg-5.order-1.order-lg-2(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/t1_08.png", alt="alt", style="width:505px;").m-auto

      .cp.mb-4
        .waves.d-none.d-lg-block
        .cp_title     
          h4.purpleTitle Por su duración
          p Se encuentra plasmada en el Artículo 45 del Código Sustantivo de Trabajo. Se clasifican en: contratos a término fijo, a tiempo indefinido, por obra y para ejecutar un trabajo ocasional, accidental o transitorio. Adicional a estos se agrega el contrato de aprendizaje:       

      TabsC.color-acento-contenido.mb-5
        .p-3.p-md-5(titulo="Contrato a término fijo").tabGray
          .row
            .col-lg-8.order-2.order-lg-1
              h4.txt--purple Contrato a término fijo
              p Se caracteriza por tener una fecha de inicio y de terminación que no puede superar 3 años, es fundamental que sea por escrito. Puede ser prorrogado indefinidamente cuando su vigencia sea superior a un (1) año, o cuando siendo inferior, se haya prorrogado hasta por tres (3) veces. Para visualizar la norma puede dirigirse al Artículo 46 del Código Sustantivo de Trabajo.
          
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema1/t1_09.png', alt='Contrato a Término Fijo', style="width:350px")  

        .p-3.p-md-5(titulo="Contrato a término indefinido").tabGray
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema1/t1_10.png', alt='Contrato a Término Fijo', style="width:350px") 
            .col-lg-8
              h4.txt--purple Contrato a término indefinido
              p El contrato a término indefinido no tiene estipulada una fecha de culminación de la obligación contractual, cuya duración no haya sido expresamente estipulada o no resulte de la naturaleza de la obra o servicio que debe ejecutarse. Puede hacerse por escrito o de forma verbal. Para visualizar la norma puede dirigirse al Artículo 47 del Código Sustantivo de Trabajo.

        .p-3.p-md-5(titulo="Contrato obra labor").tabGray
          .row
            .col-lg-8.order-2.order-lg-1
              h4.txt--purple Contrato obra labor
              p Es un contrato que se realiza para una labor específica y termina en el momento que la obra llegue a su fin. Este tipo de vinculación es característica de trabajos de construcción, de universidades y colegios. Este contrato es igual en términos de beneficios y descuentos a los contratos indefinidos y definidos, por ser un contrato laboral.
          
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema1/t1_11.png', alt='Contrato obra labor', style="width:350px") 

        .p-3.p-md-5(titulo="Contrato temporal, ocasional o accidental de trabajo").tabGray
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema1/t1_12.png', alt='Contrato temporal, ocasional o accidental de trabajo', style="width:350px") 
            .col-lg-8
              h4.txt--purple Contrato temporal, ocasional o accidental de trabajo
              p El Código Sustantivo del Trabajo, define el trabajo ocasional, accidental o transitorio, como aquel no mayor de 30 días, y cuyas labores sean distintas de las actividades normales del empleador. Esta forma de contratación puede hacerse por escrito o verbalmente; recomendamos hacerlo por escrito, estableciendo la tarea específica del trabajador. No aplica para solicitudes de Permiso Especial de Permanencia para el Fomento de la Formalización (PEPFF).

        .p-3.p-md-5(titulo="Contrato de aprendizaje").tabGray
          .row
            .col-lg-8.order-2.order-lg-1
              h4.txt--purple Contrato de aprendizaje
              p Es aquel mediante el cual una persona natural realiza formación teórica práctica en una entidad autorizada, a cambio de que la empresa proporcione los medios para adquirir formación profesional requerida en el oficio, actividad u ocupación, por cualquier tiempo determinado no superior a dos (2) años, y por esto recibe un apoyo de sostenimiento mensual, que sea como mínimo en la fase lectiva el equivalente al 50% de un (1) salario mínimo mensual vigente y durante la fase práctica será equivalente al setenta y cinco por ciento (75%) de un salario mínimo mensual legal vigente. No aplica para solicitudes de Permiso Especial de Permanencia para el Fomento de la Formalización (PEPFF) y/o migrantes provenientes de Venezuela en condición irregular.
          
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema1/t1_13.png', alt='Contrato de aprendizaje', style="width:350px")

    .row.justify-content-center.mb-5
      .col-auto.mb-5.mb-xl-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/t1_14.png", alt="alt", style="width:500px;").m-auto
      .col-xl
        .cp
          .waves.d-none.d-lg-block
          p Según el Artículo 45 del Código Sustantivo de Trabajo el contrato de trabajo puede celebrarse por el tiempo que acuerden las partes, por el tiempo que dure la obra o labor determinada, por tiempo indefinido o para realizar un trabajo ocasional, accidental o transitorio.

        p Por otra parte, algunos contratantes o empleadores antes de elegir a su personal de trabajo, estipulan un periodo de prueba que está regulado en el Artículo 77 del Código Sustantivo de Trabajo. Este se debe pactar siempre por escrito, esto quiere decir que, si el contrato es escrito, este contrato debe tener una consigna del periodo de prueba, y si es verbal, es importante crear un documento en el que sea posible constatar el periodo de prueba, así los demás términos se hayan acordado de forma verbal. Por lo general el periodo de prueba se presenta al iniciar un contrato de trabajo y en esta etapa cualquiera de las dos partes puede finalizar la relación laboral. 

        .cajon.cajon--amarillo
          p.mb-0 El periodo de prueba en términos de tiempo no puede exceder los dos meses en caso de que el contrato sea inferior a un año, su duración no puede ser superior a la quinta parte de la duración del contrato (20%). Durante este tiempo es importante resaltar que los trabajadores tienen derecho a todo, excepto a ser indemnizados si son despedidos, en otras palabras, se les debe pagar por el trabajo extra que realicen, sus prestaciones sociales, realizar la afiliación al sistema de seguridad social, entre otros. 

                      
    .bg_waves_02  
      .row.mb-5
        .col-lg-7
          h4.purpleTitle Contratista independiente
          p Se puede encontrar esta figura en el Artículo 34 del Código Sustantivo de Trabajo, en donde se define al contratista independiente como “(…) las personas naturales o jurídicas que contraten la ejecución de una o varias obras o la prestación de servicios en beneficios de terceros, por un precio determinado, asumiendo todos los riesgos, para realizarlos con sus propios medios y con libertad y autonomía técnica y directiva”. En otras palabras, la remuneración se acuerda entre las partes y no genera relación laboral ni obliga a la organización a pagar prestaciones sociales. La duración es igualmente en común acuerdo dependiendo del trabajo a realizar. Aquí es importante mencionar que el empleado recibe un sueldo al cual se le descuenta únicamente por concepto de retención en la fuente.
        .col-lg-5(data-aos="zoom-in") 
          figure
            img(src="@/assets/curso/tema1/t1_15.png", alt="contratista independiente", style="width: 350px").m-auto
      .row.mb-5
        .col-lg-3
          h4 Este contrato se podrá efectuar cuando se cumplan las siguientes premisas: 

        .col-lg-9
          SlyderF(columnas="col-md-6 col-xl-4")
            .tarjeta.clr--white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-6
                  img(src='@/assets/curso/tema1/t1_icon_01.svg')
              p.mb-0.text-center Se trate de obras contratadas a precio determinado.

            .tarjeta.clr--white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-6
                  img(src='@/assets/curso/tema1/t1_icon_02.svg')
              p.mb-0.text-center Que el contratista asuma todos los riesgos de la ejecución. 

            .tarjeta.clr--white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-6
                  img(src='@/assets/curso/tema1/t1_icon_03.svg')
              p.mb-0.text-center Que el contratista goce de la libertad para nombrar y remover el personal de cual se va a valer para la ejecución de los trabajos.

            .tarjeta.clr--white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-6
                  img(src='@/assets/curso/tema1/t1_icon_04.svg')
              p.mb-0.text-center Que el contratista goce de plena autonomía tanto desde el punto de vista técnico para la ejecución de las obras, como en la dirección y manejo del personal que haya contratado, para quienes será su empleador.

            .tarjeta.clr--white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-6
                  img(src='@/assets/curso/tema1/t1_icon_05.svg')
              p.mb-0.text-center Que en la ejecución de las obras utilice sus propias herramientas y medios de trabajo.

      .row.justify-content-center.mb-4
        .col-lg-7
          .cp.mb-4
            .dots
            p.mb-0 Por otra parte, es importante mencionar que el contratista, sin importar la duración o el valor del contrato, deberá estar afiliado y ser cotizante obligatorio al Sistema General de la Seguridad Social en Salud y Pensiones. 
          .crd.crd--purple
            p.mb-0 Según el #[strong.txt--purple Artículo 18 de la Ley 1122 de 2007] define la base de cotización de estos subsistemas de la siguiente forma: establece que será del 40% de los ingresos mensuales recibidos por el contratista, que en ningún caso podrá ser inferior a un salario mínimo legal vigente, ni superior a 25 salarios mínimos legales vigentes. El #[strong.txt--purple Artículo 23 del Decreto 1703 de 2002], establece que en los contratos de vigencia indeterminada el ingreso base de cotización será equivalente al 40% del valor bruto facturado en forma mensualizada, porcentaje sobre el cual se realizará el aporte a salud, que actualmente corresponde al 12,5% y a pensiones correspondiente al 16%.
        .col-lg-5(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema1/t1_16.png", alt="alt", style="width:500px;").m-auto

      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0
          .cajon.cajon--amarillo
            p.mb-0 Es importante resaltar, que todo contrato de prestación de servicio mayor a un mes debe afiliarse al sistema de riesgos laborales. El contratista puede escoger la ARL y deberá informar al contratante a cuál se encuentra afiliado, en el caso contrario de no estar afiliado será obligación del contratante realizarla. Cuando el riesgo corresponde al grado I, II o III según la clasificación de actividades económicas establecidas en el Decreto 1107 de 2000, el contratista deberá pagar el valor de la cotización; caso contrario cuando es de grado IV o V le corresponderá al contratante realizar el pago. 
        .col-lg-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema1/t1_17.png", alt="alt", style="width:500px;").m-auto
        .col-lg-4
          figure.mb-4
            img(src="@/assets/curso/warpLines_01.svg", alt="alt", style="width:55px;")
          p Como es de saber, este tipo de contratación también genera unas obligaciones a las partes, aquí, el contratante deberá verificar la afiliación y pago de los aportes correspondientes que realice el contratista independiente, que deberá ser en todos los casos sobre el 40% del valor mensualizado del contrato, de la misma manera deberá verificar el pago a la ARL según lo explicado anteriormente, de no hacerlo, el contratante deberá pagar los dineros faltantes por los aportes dejados de cotizar o cotizados en indebida forma por el contratista.


     
    
  
</template>

<script>
export default {
  name: 'Tema1',
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
