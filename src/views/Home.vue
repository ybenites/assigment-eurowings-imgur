<template>
  <section>
      <header>
        <GroupControls></GroupControls>
      </header>
      <main>
        <GalleryGrid></GalleryGrid>
      </main>
  </section>
</template>

<script>
// @ is an alias to /src
import GroupControls from '@/components/GroupControls.vue';
import GalleryGrid from '@/components/GallleryGrid.vue';


export default {
  name: 'home',
  components: {
    GroupControls,
    GalleryGrid
  }
}
</script>
