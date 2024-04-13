import { Icon } from '@/components/icon';
import { NTree } from 'naive-ui';
import orgApi from '@/api/org';
import { TreeOption } from 'naive-ui/es/tree/src/interface';
import { OnUpdateSelectedKeys } from 'naive-ui/es/tree/src/Tree';

type OrgData = (TreeOption & { index: number; parentId: string })[];

export interface NaiveOrgTreeExpose {
  currentSelectNode: Ref<OrgData>;
  parentNodes: ComputedRef<OrgData>;
}

export const NaiveOrgTree = defineComponent({
  setup(_, { expose }) {
    const orgData = ref<OrgData>([]);
    // 获取数据
    const queryOrgData = async (node?: OrgData[number]) => {
      const data = await orgApi.query((node?.key as string) ?? '0');
      const treeData = data.map(item => ({
        key: item.id,
        label: item.name,
        isLeaf: node ? node.index === 2 : false,
        index: node ? node.index + 1 : 1,
        parentId: node ? (node.key as string) : '0',
        prefix: () => (!node || node.index < 2 ? <Icon name='icomoon-free:tree' /> : ''),
      }));
      if (node) {
        node.isLeaf = !treeData.length;
        node.children = treeData.length ? treeData : undefined;
        return;
      }
      orgData.value = treeData;
    };

    const currentSelect = ref<Array<string | number>>([]); // 当前选择的数据
    const currentSelectNode = ref<Array<TreeOption>>([]);
    const handleSelectKeysChange: OnUpdateSelectedKeys = (keys, option) => {
      currentSelect.value = keys;
      currentSelectNode.value = option;
    };

    // 根据parentId获取所有的父级节点
    const getParentNodes = (arr: OrgData, parentId: string): OrgData => {
      for (const i in arr) {
        if (arr[i].key === parentId) {
          return [arr[i]];
        }
        if (arr[i].children) {
          const node = getParentNodes(arr[i].children as OrgData, parentId);
          if (node) {
            return node.concat(arr[i]);
          }
        }
      }
    };

    const parentNodes = computed(() => {
      if (currentSelectNode.value.length) {
        return getParentNodes(orgData.value, currentSelectNode.value[0].key as string).sort(
          (a, b) => a.index - b.index,
        );
      }
      return [];
    });

    // 不使用pinia进行通信，直接父子通信就好了
    expose({ currentSelectNode, parentNodes } as NaiveOrgTreeExpose);

    onMounted(() => {
      queryOrgData();
    });

    return () => (
      <NTree
        blockLine
        data={orgData.value}
        selectable
        onLoad={queryOrgData}
        selectedKeys={currentSelect.value}
        onUpdateSelectedKeys={handleSelectKeysChange}
      />
    );
  },
});
