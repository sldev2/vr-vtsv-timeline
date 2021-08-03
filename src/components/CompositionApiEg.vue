<template>
  <div style="border: 1px solid;">
      <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
      <h2>Attending</h2>
      <ul>
          <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
      </ul>
      <button @click="increaseCapacity()"> Increase Capacity </button>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from '@vue/composition-api'
export default defineComponent({
    setup() {
        const capacity = ref(4);
        const attending = ref(["Tim", "Bob", "Joe"]);
        const spacesLeft = computed(() => {
            return capacity.value - attending.value.length;
        });
        function increaseCapacity() {
            capacity.value++;
        }
        return { 
            capacity,
            attending,
            spacesLeft,
            increaseCapacity
        }
    }
})
</script>

<style>

</style>