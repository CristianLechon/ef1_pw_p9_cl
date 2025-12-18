<template>
    <div class="container">
        <Componente />
    </div>
</template>

<script>
import Componente from '@/components/Componente.vue';
export default {
    components: {
        Componente
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>