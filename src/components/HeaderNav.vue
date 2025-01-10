<script setup>
import ButtonHeader from './atoms/ButtonHeader.vue';
import WorldIcon from './icons/WorldIcon.vue';

</script>

<template>
    <div class="flex items-center justify-between">
        <h1 class=" font-Anton text-xl xxs:text-2xl md:text-5xl">Sélim Caquais</h1>
        <WorldIcon class="w-24 hidden lg:block"/>
        <a href="https://www.malt.fr/profile/selimcaquais?overview" target="_blank">
            <ButtonHeader text="Prendre rendez-vous"/>
        </a>
    </div>
</template>