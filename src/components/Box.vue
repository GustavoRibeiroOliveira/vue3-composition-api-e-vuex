<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Box',
    data() {
        return {
            estilos: {
                background: '#0d3b66',
                // 'background-color': '#fff',
            }
        }
    }
})
</script>