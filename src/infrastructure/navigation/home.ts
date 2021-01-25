import Login from '@/pages/Login.vue';
import App from '@/components/App.vue';
import Register from '@/pages/Register.vue';
import PasswordRecover from '@/pages/PasswordRecover.vue';
import { parentRoutes } from '@/infrastructure/navigation/parent';


export const routes = {
  '/home': {
    component: App,
  },
  '/login': {
    component: Login,
  },
  '/register': {
    component: Register,
  },
  '/passwordRecover': {
    component: PasswordRecover,
  },
  ...parentRoutes,
};
