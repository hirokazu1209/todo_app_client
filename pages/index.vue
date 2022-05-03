<template>
  <div class="container">
    <h1>Todoリスト</h1>
    <v-container>
      <v-row
        v-for="j in justify"
        :key="j"
        :justify="j"
      >
        <v-col
          v-for="k in 2"
          :key="k"
          md="4"
        >

          <v-card
            class="pa-2"
            outlined
            tile
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

// export default defineComponent({
export default {
  data: () => ({
    justify: [
      'start',
      'center',
      'end',
      'space-around',
      'space-between',
    ],
  }),
  // methods: {
  //   submit(): void {
  //     console.log(this.form)
  //   }
}
  // setup() {
  //   const value = ref("");
  //   return {
  //     value
  //   }
  // }
</script>
<style>

</style>
