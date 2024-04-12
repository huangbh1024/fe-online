import { Icon } from '@/components/icon';
import { NTree } from 'naive-ui';
import orgApi from '@/api/org';
import { TreeOption } from 'naive-ui/es/tree/src/interface';

export const NaiveOrgTree = defineComponent({
  setup() {
    const orgData = ref<(TreeOption & { index: number })[]>([]);
    // 获取数据
    const queryOrgData = async (node?: TreeOption & { index: number }) => {
      const data = await orgApi.query((node?.key as string) ?? '0');
      const treeData = data.map(item => ({
        key: item.id,
        label: item.name,
        isLeaf: node ? node.index === 2 : false,
        index: node ? node.index + 1 : 1,
        prefix: () => (!node || node.index < 2 ? <Icon name='icomoon-free:tree' /> : ''),
      }));
      if (node) {
        node.isLeaf = !treeData.length;
        node.children = treeData.length ? treeData : undefined;
        return;
      }
      orgData.value = treeData;
    };

    onMounted(() => {
      queryOrgData();
    });

    return () => <NTree blockLine data={orgData.value} onLoad={queryOrgData} />;
  },
});
