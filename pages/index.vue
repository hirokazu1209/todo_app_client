<template>
  <div class="container">
    <MTitle
      :title="mainTitle"
    />
    <v-container class="grey lighten-5">
      <MTitle
        :title="applicantInformation"
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
      <MTitle
        :title="applicationInformation"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
        <v-col cols="6">
          <MTextField></MTextField>
        </v-col>
      </v-row>
      <MTitle
        :title="recruitmentInformation"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
      </v-row>
      <MTitle
        :title="reason"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
      </v-row>
      <MTitle
        :title="fileData"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm></MSelectForm>
        </v-col>
      </v-row>
      <MTitle
        :title="comment"
      />
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
    const mainTitle = ref<string>('新規応募者登録');
    const applicantInformation = ref<string>('応募者情報');
    const applicationInformation = ref<string>('応募情報');
    const recruitmentInformation = ref<string>('採用情報');
    const reason = ref<string>('終了理由');
    const fileData = ref<string>('応募者ファイルデータ');
    const comment = ref<string>('コメント');



    return {
      mainTitle,
      applicantInformation,
      applicationInformation,
      recruitmentInformation,
      reason,
      fileData,
      comment
    }
  }
});
</script>
<style>

</style>
