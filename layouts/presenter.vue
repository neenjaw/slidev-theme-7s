<template>
  <div class="slidev-layout presenter-bio relative">
    <div class="flex items-center">
      <div class="w-1/2">
        <slot />
      </div>
      <figure class="w-1/2 relative top-15">
        <!-- <AsGraphic type="donut" absolute top-2 left-0 text-secondary-200 /> -->
        <img src="/img/flourish_01.png" absolute bottom-5 left-20 />
        <div class="presenter bg-gray-400 relative important-rounded-full object-cover h-80 w-80 z-10">
          <img
            :src="$attrs.presenterImage || 'https://anonymous-animals.azurewebsites.net/animal/penguin'"
            class="bg-gray-400 important-rounded-full object-cover h-80 w-80"
          />
        </div>
      </figure>
    </div>
    <!-- <AsGraphic type="curve-small" absolute bottom-0 right-0 /> -->
  </div>
</template>

<style>
.slidev-layout.presenter-bio {
  background-image: url('/img/bg_02.png');
  background-position: 300%;
  background-size: contain;
  background-repeat: no-repeat;

  .presenter {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -8px; /* !importanté */
      border-radius: inherit; /* !importanté */
      background: linear-gradient(to right, rgb(240, 175, 150), rgb(170, 183, 230));
    }
  }
}
</style>
