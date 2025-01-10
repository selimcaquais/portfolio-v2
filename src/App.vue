<script setup>
import "./assets/css/index.css";
import NoiseFilter from "./components/background/NoiseFilter.vue";
import HeaderNav from "./components/HeaderNav.vue";
import HeroDescription from "./components/HeroDescription.vue";
import HeroIllustration from "./components/HeroIllustration.vue";
</script>

<template>
  <NoiseFilter/>
   <div class="pt-8 w-auto mx-4 sm:mx-12 lg:mx-24">
     <HeaderNav/>
   </div>
   <div class="overflow-x-hidden">
    <div class="overflow-x-hidden w-full pt-48 ml-6 mr-6 mobile:ml-12 mobile:mr-12 md:pt-48 md:ml-24 md:mr-0 md:w-[50%] lg:w-[45%] ">
      <HeroDescription/>
    </div>
      <HeroIllustration/>
   </div>
</template>
