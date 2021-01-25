import Parent from '@/pages/Parent.vue';
import Welcome from '@/components/user/parent/WelcomeLayout.vue';
import Welcome1 from '@/components/user/parent/Welcome1.vue';

export enum parentsEnum {
  parent = '/parent',
}

export const parentRoutes = {
  '/parent': {
    component: Parent,
  },
  'parent/welcome': {
    component: Welcome,
  },
  'parent/welcome1': {
    component: Welcome1,
  },
};
