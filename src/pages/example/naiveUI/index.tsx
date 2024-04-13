import { Icon } from '@/components/icon';
import {
  NBreadcrumb,
  NBreadcrumbItem,
  NEmpty,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
  NScrollbar,
  NTabPane,
  NTabs,
} from 'naive-ui';
import { NaiveOrgTree, NaiveOrgTreeExpose } from '../components/naiveUI/orgTree';

export const ExampleNaiveUIPage = defineComponent({
  setup() {
    const naiveOrgTreeRef = ref<NaiveOrgTreeExpose | null>(null);
    // 监听当前选中的树节点，变化面包屑
    const breadcrumbData = computed(() => naiveOrgTreeRef.value?.parentNodes ?? []);
    const tabOptions = shallowReactive([
      {
        id: 1,
        label: '人员管理',
        value: 'memberManagement',
        component: () => (
          <NLayout hasSider style={{ height: '100%' }}>
            <NLayoutSider bordered style={{ height: '100%' }}>
              <header class='px-12px py-14px h-50px flex items-center justify-between border-b'>
                <span>部门</span>
                <Icon name='material-symbols:add' size={18} class='cursor-pointer' />
              </header>
              <article class='py-12px px-5px h-[calc(100%-50px)]'>
                <NScrollbar>
                  <NaiveOrgTree ref={naiveOrgTreeRef} />
                </NScrollbar>
              </article>
            </NLayoutSider>
            <NLayout>
              <NLayoutHeader class='h-50px border-b flex items-center'>
                <NBreadcrumb class='ml-12px'>
                  {breadcrumbData.value.map(breadcrumb => (
                    <NBreadcrumbItem>
                      <span class='ml-5px'>{breadcrumb.label}</span>
                    </NBreadcrumbItem>
                  ))}
                </NBreadcrumb>
              </NLayoutHeader>
              <NLayoutContent></NLayoutContent>
            </NLayout>
          </NLayout>
        ),
      },
      { id: 2, label: '团队管理', value: 'teamManagement', component: () => <NEmpty description='页面尚未开发' /> },
      {
        id: 3,
        label: '职位维护',
        value: 'positionMaintenance',
        component: () => <NEmpty description='页面尚未开发' />,
      },
    ]);
    return () => (
      <div class='w-full h-full'>
        <NTabs
          type='line'
          animated
          style={{ height: '100%' }}
          paneWrapperStyle={{ flex: '1' }}
          paneStyle={{ height: '100%' }}
          defaultValue='memberManagement'
        >
          {tabOptions.map(tab => (
            <NTabPane key={tab.id} name={tab.value} tab={tab.label}>
              <div class='flex items-center justify-center h-full w-full'>{tab.component()}</div>
            </NTabPane>
          ))}
        </NTabs>
      </div>
    );
  },
});
