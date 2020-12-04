export class LayoutConfig {
  logo?: string;
  appName?: string;
  type?: string;
  layoutOptions?: LayoutOptions;
}

export class LayoutOptions {
  sidebarMenuOpened?: boolean;
  sidebarControlOpened?: boolean;
  isNoNavbarBorder?: boolean;
  isBodySmallText?: boolean;
  isNavbarSmallText?: boolean;
  isSidebarNavSmallText?: boolean;
  isFooterSmallText?: boolean;
  isSidebarNavFlatStyle?: boolean;
  isSidebarNavLegacyStyle?: boolean;
  isSidebarNavCompact?: boolean;
  isSidebarNavChildIndent?: boolean;
  isMainSidebarDisableHoverOrFocusAutoExpand?: boolean;
  isBrandSmallText?: boolean;
  colorVariants?: ColorVariants;
}

export class ColorVariants {
  navbar?: BrightnessColor;
  menuSidebar?: string;
  accent?: string;
  brandLogo?: string;
}

export class BrightnessColor {
  brightness?: string;
  color?: string;
}
