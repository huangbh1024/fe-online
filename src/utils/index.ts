export const mockMenuList = [
  {
    menuIcon: 'material-symbols:view-comfy-alt-outline-rounded',
    menuName: '组件示例',
    menuType: '1',
    menuUrl: '/components',
    parentId: 0,
    id: 1,
  },
  {
    menuIcon: '',
    menuName: '使用naiveUI',
    menuType: '2',
    menuUrl: '/components/naiveUI',
    parentId: 1,
    id: 2,
  },
];

export type DataTree<T> = T & { children?: DataTree<T>[] };
export const dataToTree = <T extends { id: number; parentId: number }>(data: T[]): DataTree<T>[] => {
  const dataTree: DataTree<T>[] = [];
  const dataMap = new Map<number, DataTree<T>>();
  data.forEach(item => {
    dataMap.set(item.id, { ...item });
  });
  data.forEach(item => {
    const parentItem = dataMap.get(item.parentId);
    if (parentItem) {
      parentItem.children = parentItem.children ?? [];
      parentItem.children.push(dataMap.get(item.id)!);
    } else {
      dataTree.push(dataMap.get(item.id)!);
    }
  });
  return dataTree;
};
