<template>
  <div>
    <input
      class="a-text-field"
      :type=type
      v-model="value"
      :placeholder=placeholder
      :class="{'input_error': errorMessage }"
      @input="$emit('input', $event.target.value)"
      >
    <span v-if="errorMessage" class="error_ms">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      validator: (v: string) => ['email', 'password', 'text'].includes(v),
    },
    errorMessage: {
      type: String,
      default: ''
    }
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
.a-text-field {
  position: relative;
  font-size: 14px;
  width: 94%;
  margin: 0px 10px 0px 10px;
  border: 1px solid #B9C5DD;
  padding: 10px;
  border-radius: 4px;
  min-height: 40px;
}
.error_ms {
  color: red;
  font-size: small;
  margin-left: 10px;
}
.input_error {
  border-color: red !important;
}
</style>


