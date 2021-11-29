<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Normas y conceptos del Sistema de Seguridad Social. 
        p.mb-4 El objetivo de esta actividad es ayudar a identificar algunas entidades, contribuciones, normas y leyes que articulan el sistema de seguridad social, mediante la relación de términos que son clave y que fueron vistos en este componente formativo.
        p Se sugiere que antes de realizar esta actividad, haga la consulta y el estudio de los materiales formativos.

        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/AD1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/completar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Repasando conceptos claves para la contratación
        p.mb-4 Repasar los conocimientos adquiridos en este componente formativo, mediante la organización de palabras que permitan estructurar los conceptos vistos en este componente. Conceptos que se deben conocer al momento de contratar según lo mencionado en el Código Sustantivo del Trabajo, para la afiliación al sistema de seguridad social integral. 
        p Se sugiere que antes de realizar esta actividad, haga la consulta y el estudio de los materiales formativos.

        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Rellenar los espacios en blanco
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/AD2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
