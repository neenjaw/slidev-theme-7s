<template>
  <div class="bg-section slidev-layout new-section">
    <!-- <CornerCurves class="absolute left-0 top-0 transform rotate-90" /> -->
    <div class="flex flex-col justify-center text-center">
      <slot />
    </div>
    <!-- <Zigzags class="absolute top-20 -right-30" /> -->
  </div>
</template>

<style>
.slidev-layout.new-section {
  background-image: url('/img/bg_04.png');
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;

  h1 {
    @apply text-primary text-4xl leading-20 mb-0 font-title font-extrabold;
  }

  h1 + p {
    @apply mt-4 opacity-100;
  }

  p > img {
    @apply w-2/3 mx-auto;
  }
}
</style>
