import { Transition } from 'vue';
import { TransitionConstant } from '@/constants/transition.constant';

export interface SidebarLogoProps {
  displayTitle?: boolean;
  titleSize?: string;
  isMini?: boolean;
}

export const SidebarLogo = defineComponent({
  props: {
    displayTitle: { type: Boolean, default: false },
    titleSize: { type: String, default: 'xl' },
    isMini: { type: Boolean, default: true },
  },
  setup(props) {
    // 获取应用名称
    const applicationName = computed(() => import.meta.env.VITE_APP_TITLE);
    return () => (
      <div class={[`text-${props.titleSize}`, 'flex', 'items-center', 'h-full']}>
        <Transition name={TransitionConstant.FADE} mode='in-out'>
          {props.isMini ? <img class='block h-full max-h-8 m-3' alt='App Logo' /> : null}
        </Transition>
        {props.displayTitle ? <span class='font-semibold'>{applicationName.value}</span> : null}
      </div>
    );
  },
});
