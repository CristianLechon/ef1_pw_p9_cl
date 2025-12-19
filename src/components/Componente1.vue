<template>
    <div>
        <div class="foto">
            <p id="id_fotogrfia">Fotografía</p>
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
    border-radius: 8px;
    width: 95px;
    height: 90px;
    margin-left: 25px;
}
.foto{
    display: flex;
    flex-direction: row;
    margin-top: 8px;
}
p, input{
    color: blue;
}
input{
    width: 180px;
    border: 1px solid blue;
    border-radius: 3px;
    height: 20px;
    margin-top: 4px;
}
#id_btn_buscar, #id_btn_agregar{
    background-color: blue;
    color: white;
    padding: 5px 13px;
    border-radius: 5px;
    border: none;
    font-weight: bold;

}
#id_btn_agregar{
    margin-left: 35px;
}
#id_fotogrfia{
    margin-top: 40px;
}
</style>