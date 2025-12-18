<template>
    <div class="tabla">
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Celular</th>
                    <th>País</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(items, index) in arreglo" :key="index">
                    <td>{{ items.titulo }}</td>
                    <td>{{ items.nombre }}</td>
                    <td>{{ items.apellido }}</td>
                    <td>{{ items.celular }}</td>
                    <td>{{ items.pais }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        arreglo: Array
    }
}
</script>

<style>
    table, th, tr, td {
        border: 1px solid blue;
        border-collapse: collapse;
        padding: 10px;
    }
    .tabla{
        margin-top: 20px;
    }

    th{
        color: blue;
    }
    td{
        color: rgb(40, 110, 238);
    }
</style>