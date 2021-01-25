<template>
  <StackLayout orientation="vertical">
    <TextField
      :year="date.year"
      :month="date.month"
      :day="date.day"
      class="date-field"
      :text="dateText"
      editable="false"
      @tap="modalOpen"
      hint="Дата рождения"
    />
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import { PhoneCode } from '@/core/customTypes';

import DateInputModal from '@/components/primitives/dateInput/DateInputModal.vue';

type Date = {
  [key: string]: number | null;
};

interface ComponentMethods {
  modalOpen: () => void;
  newValue: (value: Date) => void;
}

interface ComponentProps {
  hint: string;
  date: Date;
}

interface ComponentData {
  // date: Date;
}

interface ComponentComputed {
  dateText: string;
}

export default Vue.extend<
  ComponentData,
  ComponentMethods,
  ComponentComputed,
  ComponentProps
>({
  name: 'DateInputField',
  props: {
    hint: String,
    date: Object,
  },
  computed: {
    dateText(): string {
      let dayText = this.date.day ? ('0' + this.date.day).slice(-2) : null;
      let monthText = this.date.month
        ? ('0' + this.date.month).slice(-2)
        : null;
      let dateText =
        dayText && monthText && this.date.year
          ? `${dayText}.${monthText}.${this.date.year}`
          : '';
      return dateText;
    },
  },
  data: () => {
    return {

    };
  },
  methods: {
    modalOpen(): void {
      let options = {
        props: {
          date: this.date,
        },
      };
      this.$showModal(DateInputModal, options).then((value: Date) =>
        this.newValue(value)
      );
    },
    newValue(value: Date): void {
      console.log(value);
      if (value) {
        // this.date = value;
        this.$emit('change', value);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.date-field {
  border: 0px solid;
  background-color: $white;
  text-align: left;
  padding: 10 15;
  border-radius: 10;
  color: $black;
  placeholder-color: $grey;
}
</style>
