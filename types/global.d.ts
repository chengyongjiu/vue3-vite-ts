import "pinia";

declare module "pinia" {
  export interface MapStoresCustomization {
    // 设置成和上面一样的值
    suffix: "";
  }
}
