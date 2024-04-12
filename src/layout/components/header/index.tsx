import { CollapsedBtn } from './components';

export const LayoutHeader = defineComponent({
  setup() {
    return () => (
      <div class='flex h-16 items-center'>
        <div class='md:block px-4'>
          <CollapsedBtn />
        </div>
      </div>
    );
  },
});
