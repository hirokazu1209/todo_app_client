<template>
  <div class="container">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
      </v-row>
    </v-container>
    <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import MTextField from '../components/molecules/MTextField.vue';
import MSelectForm from '../components/molecules/MSelectForm.vue';

export default defineComponent({
  components: {
    MTextField,
    MSelectForm
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
