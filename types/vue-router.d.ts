import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    /**
     * 设置该路由在侧边栏和面包屑中展示的名字
     */
    title?: string;
    /**
     * 设置该路由的图标，直接使用 Element Plus 的 Icon（与 svgIcon 同时设置时，svgIcon 将优先生效）
     */
    elIcon?: string;
  }
}

export {};
