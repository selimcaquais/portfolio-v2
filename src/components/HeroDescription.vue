<script setup>
import ArrowIllustration from './ArrowIllustration.vue';
import ButtonHeader from './atoms/ButtonHeader.vue';


</script>
<template>
    <div class="flex flex-col gap-6 mobile:gap-12">
        <h3 class="text-secondary text-base mobile:text-2xl sm:text-3xl">Qui suis-je ?</h3>
        <p class="leading-7 text-xxs mobile:text-base">
            Développeur front-end passionné, je combine un esprit créatif soutenu par une attention aux détails 
            pour créer des sites web et applications mobile modernes et unique. Diplômé d’un Bachelor en Conception 
            et Développement d’Applications, j’ai acquis une solide expertise en travaillant sur des projets variés. 
            <br>Prêt à donner <span class="text-secondary font-DM_Mono_medium_italic">vie</span> à votre projet ?
        </p>
        <ButtonHeader class="w-fit hidden md:block" text="Découvrir mes projets"/>
        <ArrowIllustration class="absolute w-56 rotate-[78deg] z-[-20] hidden 
                                  md:left-[18rem] md:top-[44rem] md:block
                                  lg:left-[22rem] lg:top-[42rem]
                                  xl:left-[22rem] xl:top-[39rem]"
        />
    </div>
</template>