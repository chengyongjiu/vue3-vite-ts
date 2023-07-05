# Vue 3 + TypeScript + Vite 自己弄着玩的

```sell
使用node 要>=16版本
```

## vscode 添加插件 eslint 以及 Prettier - Code formatter 插件

添加如下**配置**打开设置>找到文本编辑器>字体>setting.json

```json
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
 "editor.detectIndentation": false,
 // 重新设定tabsize
 "editor.tabSize": 2,
 // 每次保存的时候自动格式化 
 "editor.formatOnSave": true,
 // 每次保存的时候将代码按eslint格式进行修复
 "eslint.autoFixOnSave": true,
 // 添加vue支持
 "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
           "language": "vue",
           "autoFix": true
      }
 ],
 // #让prettier使用eslint的代码格式进行校验 
 "prettier.eslintIntegration": true
}
```
