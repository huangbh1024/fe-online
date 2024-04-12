import { Icon } from '@/components/icon';
import { NEmpty, NLayout, NLayoutContent, NLayoutHeader, NLayoutSider, NScrollbar, NTabPane, NTabs } from 'naive-ui';
import { NaiveOrgTree } from '../components/naiveUI/orgTree';

export const ExampleNaiveUIPage = defineComponent({
  setup() {
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
                  <NaiveOrgTree />
                </NScrollbar>
              </article>
            </NLayoutSider>
            <NLayout>
              <NLayoutHeader></NLayoutHeader>
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
              {tab.component()}
            </NTabPane>
          ))}
        </NTabs>
      </div>
    );
  },
});
