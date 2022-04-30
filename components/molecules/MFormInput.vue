<template>
  <ATextField
    :type=inputType
    :aria-placeholder=placeholderContents
    :v-model="value"
    @input="$emit('input', $event)"
    />
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    inputType: {
      type: String,
      default: '',
    },
    placeholderContents: {
      type: String,
      default: '',
    },
  },
  setup() {
    const value = ref("");
    return {
      value
    }
  }
})
</script>
<style lang="scss" scoped>
.form {
  margin: 2vh;
  height: 90px;
}
</style>
