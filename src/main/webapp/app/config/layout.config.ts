import { LayoutConfig } from 'app/core/admin-lte3/layout/layout.config';

export const layoutConfig: LayoutConfig = {
  logo: 'content/images/AdminLTELogo.png',
  appName: 'Auto Test',
  type: 'sidebar-mini layout-fixed layout-navbar-fixed',
  layoutOptions: {
    sidebarMenuOpened: true,
    sidebarControlOpened: false,
    isNoNavbarBorder: false,
    isBodySmallText: false,
    isNavbarSmallText: false,
    isSidebarNavSmallText: false,
    isFooterSmallText: false,
    isSidebarNavFlatStyle: true,
    isSidebarNavLegacyStyle: true,
    isSidebarNavCompact: false,
    isSidebarNavChildIndent: false,
    isMainSidebarDisableHoverOrFocusAutoExpand: false,
    isBrandSmallText: false,
    colorVariants: {
      navbar: { brightness: 'dark', color: 'primary' },
      menuSidebar: 'dark-primary',
      accent: '',
      brandLogo: '',
    },
  },
};
