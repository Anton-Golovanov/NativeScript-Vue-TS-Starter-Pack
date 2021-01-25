<template>
  <Button
    :text="text"
    class="button"
    :class="[{ type: true }, { disabled: disabled }]"
    :isEnabled="!disabled"
    @tap="onButtonTap"
  />
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

interface ComponentProps {
  text: string;
  type: string;
  disabled: boolean;
}

interface ComponentMethods {
  onButtonTap: () => void;
}

export default Vue.extend<{}, ComponentMethods, {}, ComponentProps>({
  name: 'ButtonComponent',
  props: {
    text: String,
    type: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onButtonTap(): void {
      this.$emit('tap');
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.button {
  border-width: 2;
  border-radius: 12;
  border-color: transparent;
  height: 50;
  width: 100%;
  padding: 0;
  font-weight: 300;
  text-transform: capitalize;
  background-color: $corporate;
  z-index: 0;
  color: $white;

  &:active {
    z-index: 0;
    border-color: transparent;
    border-width: 1;
  }
  &.disabled {
    background-color: $light-grey;
  }

  &.secondary {
    border-color: $corporate;
    background-color: transparent;
    color: $corporate-white;
  }
}
</style>
