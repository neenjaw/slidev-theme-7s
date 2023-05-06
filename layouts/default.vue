<template>
  <div class="slidev-layout default" :class="{ grid: $attrs.center }">
    <!-- <CornerCurves class="absolute bottom-0 right-0 transform scale-x--100" /> -->
    <div class="my-auto z-10 relative">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.default {
  background-image: url('/img/bg_03.png');
  background-position: 300%;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
