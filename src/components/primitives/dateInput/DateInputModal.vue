<template>
  <GridLayout class="code-modal" ref="modal" columns="auto" rows="* 70">
    <DatePicker
      :year="value.year"
      :month="value.month"
      :day="value.day"
      minDate="1910-01-01"
      :maxDate="new Date()"
      @dayChange="newDay"
      @monthChange="newMonth"
      @yearChange="newYear"
    />
    <button-component
      :text="'Ok'"
      class="code-modal__button"
      @tap="onButtonTap"
      row="1"
      type="main"
    />
  </GridLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

import ButtonComponent from '@/components/primitives/ButtonComponent.vue';
import { DateInputEvent } from '@/core/customTypes';

type Value = {
  [key: string]: number;
};

interface ComponentData {
  value: Value;
}

interface ComponentMethods {
  newDay: (val: DateInputEvent) => void;
  newMonth: (val: DateInputEvent) => void;
  newYear: (val: DateInputEvent) => void;
  onButtonTap: () => void;
}

interface ComponentProps {
  date: Value;
}

export default Vue.extend<ComponentData, ComponentMethods, {}, ComponentProps>({
  name: 'DateInputModal',
  components: { ButtonComponent },
  props: {
    date: Object,
  },
  mounted() {
    this.value = {
      year: this.date.year || new Date().getFullYear() - 10,
      month: this.date.month || 1,
      day: this.date.day || 1,
    };
  },
  data: function () {
    return {
      value: {
        year: new Date().getFullYear() - 10,
        month: 1,
        day: 1,
      },
    };
  },
  methods: {
    newDay(event: DateInputEvent): void {
      this.value.day = event.value;
    },
    newMonth(event: DateInputEvent): void {
      this.value.month = event.value;
    },
    newYear(event: DateInputEvent): void {
      this.value.year = event.value;
    },
    onButtonTap(): void {
      (this as any).$modal.close(this.value);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@/app';
.code-modal {
  width: 300;
  height: 100%;
  background-color: $white;
  border-radius: 40;

  &__code {
    border-color: brown;
    width: 150px;
    margin: 0 auto;
    vertical-align: center;
    horizontal-align: center;
    * {
      border-color: blue;
    }
  }

  &__button {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 20;
  }
}
</style>
