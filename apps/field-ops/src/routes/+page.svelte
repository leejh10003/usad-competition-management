<script>
	import { Page, Tabbar, Navbar, TabbarLink, ToolbarPane } from 'konsta/svelte';
	let activeTab = $state('tab-1');
	let isTabbarLabels = $state(true);
	let isTabbarIcons = $state(true);
</script>

<Page>
	<Navbar title="Tabbar">
	</Navbar>
    <Tabbar
    labels={isTabbarLabels}
    icons={isTabbarIcons}
    class="bottom-0 left-0 fixed"
  >
    <ToolbarPane>
      {#if isTabbarIcons}
        <TabbarLink
          active={activeTab === 'tab-1'}
          onclick={() => (activeTab = 'tab-1')}
          label={isTabbarLabels ? 'Tab 1' : undefined}
        >
        </TabbarLink>
        <TabbarLink
          active={activeTab === 'tab-2'}
          onclick={() => (activeTab = 'tab-2')}
          label={isTabbarLabels ? 'Tab 2' : undefined}
        >
        </TabbarLink>
        <TabbarLink
          active={activeTab === 'tab-3'}
          onclick={() => (activeTab = 'tab-3')}
          label={isTabbarLabels ? 'Tab 3' : undefined}
        >
        </TabbarLink>
      {:else}
        <TabbarLink
          active={activeTab === 'tab-1'}
          onclick={() => (activeTab = 'tab-1')}
          label={isTabbarLabels ? 'Tab 1' : undefined}
        />
        <TabbarLink
          active={activeTab === 'tab-2'}
          onclick={() => (activeTab = 'tab-2')}
          label={isTabbarLabels ? 'Tab 2' : undefined}
        />
        <TabbarLink
          active={activeTab === 'tab-3'}
          onclick={() => (activeTab = 'tab-3')}
          label={isTabbarLabels ? 'Tab 3' : undefined}
        />
      {/if}
    </ToolbarPane>
  </Tabbar>
</Page>
