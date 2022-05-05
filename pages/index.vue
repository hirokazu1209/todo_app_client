<template>
  <div class="container">
    <h1>Todoリスト</h1>
    <MTextField></MTextField>
    <MTextField></MTextField>
    <v-container class="grey lighten-5">
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
          <v-select
            :items="items"
            label="テスト"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import MTextField from '../components/molecules/MTextField.vue';


// export default defineComponent({
export default {
  components: {
    MTextField
  },
  data() {
    return {
      justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      items: [
        'Foo',
        'Bar',
        'Fizz',
        'Buzz'
      ],
    }
  }
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
