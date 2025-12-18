<template>
    <div>
        <div class="foto">
            <p>Fotografía</p>
            <img :src="imagen" alt="">
        </div>
        <form action="#">
            <p type="Título">
                <input :value="titulo" type="text">
            </p>
            <p type="Nombre">
                <input :value="nombre" type="text">
            </p>
            <p type="Apellido">
                <input :value="apellido" type="text">
            </p>
            <p type="Celular">
                <input :value="celular" type="text">
            </p>
            <p type="País">
                <input :value="pais" type="text">
            </p>
        </form>
        <div>
            <button id="id_btn_buscar" @click="buscar">Buscar</button>
            <button id="id_btn_agregar" @click="agregar">Agregar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imagen: String,
        titulo: String,
        nombre: String,
        apellido: String,
        celular: String,
        pais: String,
        buscar: Function,
        agregar: Function
    }

}
</script>

<style>
p::before {
    content: attr(type);
    display: block;
}

img {
    border: 1px solid blue;
    border-radius: 5px;
    width: 60px;
    height: 60px;
    margin-left: 45px;
}
.foto{
    display: flex;
    flex-direction: row;
}
p, input{
    color: blue;
}
input{
    width: 180px;
    border: 1px solid blue;
    border-radius: 5px;
}
#id_btn_buscar, #id_btn_agregar{
    background-color: blue;
    color: white;
    padding: 3px 15px;
}
#id_btn_agregar{
    margin-left: 35px;
}
</style>