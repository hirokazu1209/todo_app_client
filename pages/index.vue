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
          <MTextField
            label="応募者氏名"
            />
        </v-col>
        <v-col cols="6">
          <MTextField
            label="応募者年齢"
            />
        </v-col>
        <v-col cols="6">
          <MTextField
            label="応募者電話番号"
            />
        </v-col>
        <v-col cols="6">
          <MTextField
            label="応募者メールアドレス"
            />
        </v-col>
      </v-row>
      <MTitle
        :title="applicationInformation"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm
            label="応募者経路"
            :items="applicantPathway"
            />
        </v-col>
        <v-col cols="6">
          <MTextField
            label="応募者経路URL"
            />
        </v-col>
        <v-col cols="6">
          <MTextField
            label="応募日"
            />
        </v-col>
      </v-row>
      <MTitle
        :title="recruitmentInformation"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm
            label="担当者"
            />
        </v-col>
        <v-col cols="6">
          <MSelectForm
            label="採用フェーズ"
            />
        </v-col>
        <v-col cols="6">
          <MSelectForm
            label="採用職種"
            />
        </v-col>
        <v-col cols="6">
          <MSelectForm
            label="勤務地"
            />
        </v-col>
      </v-row>
      <MTitle
        :title="reason"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm
            label="不採用理由"
            />
        </v-col>
        <v-col cols="6">
          <MSelectForm
            label="辞退理由"
            />
        </v-col>
      </v-row>
      <MTitle
        :title="fileData"
      />
      <v-row>
        <v-col cols="6">
          <MSelectForm />
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

  setup(){
    const mainTitle = ref<string>('新規応募者登録');
    const applicantInformation = ref<string>('応募者情報');
    const applicationInformation = ref<string>('応募情報');
    const recruitmentInformation = ref<string>('採用情報');
    const reason = ref<string>('終了理由');
    const fileData = ref<string>('応募者ファイルデータ');
    const comment = ref<string>('コメント');
    const applicantPathway = ref<Array<string>>(['Foo', 'Bar', 'Fizz', 'Buzz'])

    return {
      mainTitle,
      applicantInformation,
      applicationInformation,
      recruitmentInformation,
      reason,
      fileData,
      comment,
      applicantPathway
    }
  }
});
</script>
<style>

</style>
