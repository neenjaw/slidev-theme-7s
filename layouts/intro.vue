<template>
  <div class="slidev-layout intro grid">
    <LayoutHeader />
    <div class="flex flex-col justify-center text-center">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.intro {
  background-image: url('/img/bg_01.png');
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;

  h1 {
    @apply text-6xl leading-20 font-display font-extrabold text-primary;
  }

  h1 + p {
    @apply opacity-60 -mt-4 text-2xl;
  }

  a {
    @apply text-secondary-400 hover:text-secondary-500 dark:(text-white hover:text-gray-200);
  }
}
</style>
