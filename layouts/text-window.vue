<template>
  <div class="slidev-layout text-window">
    <div class="grid grid-cols-2" :class="$attrs.reverse ? 'gap-16' : 'gap-8'">
      <div class="prose pr-16" :class="{ 'order-1': $attrs.reverse }">
        <slot name="default" />
      </div>
      <div class="relative">
        <!-- <AsGraphic
          type="zigzag"
          class="absolute transform scale-75 -bottom-20 -right-16"
          :class="{ 'left-0': $attrs.reverse }"
        /> -->
        <TheConsole class="rounded-lg shadow-lg object-cover z-10">
          <slot name="window"></slot>
        </TheConsole>
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.text-window {
  background-image: url('/img/bg_06.png');
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
