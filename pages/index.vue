<template>
  <div class="container">
    <MTitle
      :title="mainTitle"
    />
    <v-container class="grey lighten-5">
      <MTitle
        :title="applicantDetails"
      />
      <v-row>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
      </v-row>
      <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import MTextField from '../components/molecules/MTextField.vue';
import MSelectForm from '../components/molecules/MSelectForm.vue';
import MTitle from '../components/molecules/MTitle.vue';

export default defineComponent({
  components: {
    MTextField,
    MSelectForm,
    MTitle
  },
  // methods: {
  //   submit(): void {
  //     console.log(this.form)
  //   }
  setup(){
    const mainTitle = ref<string>('応募者新規作成画面');
    const applicantDetails = ref<string>('応募者情報');
    return {
      mainTitle,
      applicantDetails,
    }
  }
});
</script>
<style>

</style>
