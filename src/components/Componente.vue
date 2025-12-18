<template>
    <div>
        <div class="container-comp1">
            <Componente1 :imagen="imagen" :titulo="titulo" :nombre="nombre" :apellido="apellido" :celular="celular"
                :pais="pais" :buscar="buscar" :agregar="agregar" />
        </div>
    </div>
    <div>
        <Componente2 :arreglo="arreglo" />
    </div>
</template>

<script>
import Componente1 from './Componente1.vue';
import Componente2 from './Componente2.vue';
import { consumirAPIFacade } from '@/client/RandomPersonClient';
export default {
    components: {
        Componente1,
        Componente2
    },
    methods: {
        async buscar() {
            const res = await consumirAPIFacade();
            const persona = res.results[0];
            this.imagen = persona.picture.large;
            this.titulo = persona.name.title;
            this.nombre = persona.name.first;
            this.apellido = persona.name.last;
            this.celular = persona.cell;
            this.pais = persona.location.country;
        },
        agregar() {
            const p = {
                titulo: this.titulo,
                nombre: this.nombre,
                apellido: this.apellido,
                celular: this.celular,
                pais: this.pais
            }
            this.arreglo.push(p);
        }
    },
    data() {
        return {
            imagen: null,
            titulo: null,
            nombre: null,
            apellido: null,
            celular: null,
            pais: null,
            arreglo: []
        }
    }
}
</script>

<style>
.container-comp1 {
    border: 1px solid blue;
    padding: 15px 25px;
    border-radius: 30px;
}
</style>