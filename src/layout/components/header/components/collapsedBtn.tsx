import { ActionIcon } from '@/components/actionIcon';
import { useAppStore } from '@/store/modules/app.store';
export const CollapsedBtn = defineComponent({
  setup() {
    const { toggleCollapsed } = useAppStore();
    return () => <ActionIcon icon='i-tabler-menu-2' tooltipText='折叠菜单' onClick={toggleCollapsed} />;
  },
});
