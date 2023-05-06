<template>
  <div class="slidev-layout two-cols">
    <div class="grid grid-cols-2 gap-16">
      <div class="prose">
        <slot name="default" />
      </div>
      <div class="prose">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.two-cols {
  background-image: url('/img/bg_07.png');
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
