<template>
  <div class="container">
    <h1>Todoリスト</h1>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        
          <v-select
            :items="items"
            label="テスト"
          ></v-select>
      </v-row>
    </v-container>
    <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import MTextField from '../components/molecules/MTextField.vue';


export default defineComponent({
  components: {
    MTextField
  },
  data() {
    return {
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
})
  // setup() {
  //   const value = ref("");
  //   return {
  //     value
  //   }
  // }
</script>
<style>

</style>
