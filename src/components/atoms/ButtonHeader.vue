<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text:{required:true},
});

</script>

<template>
    <button class="border border-primary p-2 rounded-full text-[10px] 
                           xxs:text-xs xxs:p-2.5 md:text-base md:p-4 
                           hover:text-background hover:bg-primary ease-in-out duration-300"
            >{{ props.text }}
        </button>
</template>