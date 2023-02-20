# 精简字体包

在网页中特殊情况下会使用非标准字体（最近的项目中需要使用思源黑体），通过网页下载中文字体库往往很大（思源黑体 8M），其中大部分是用不到的字体，导致页面加载缓慢。

通过提取 3500 个常用字，来减少字体库大小，加快网页加载速度。

## Usage

```bash
npm i
npm run build
```

新的精简版 ttf 字体，以及将精简版 ttf 转换成的 woff2 字体文件输出到 `dist` 目录中.

## Reference

- [字体压缩工具：fontmin](https://github.com/ecomfe/fontmin)
- [源 repo：minify-font](https://github.com/Daotin/minify-font)
- [3500 常用字数据](https://github.com/DavidSheh/CommonChineseCharacter)
- [KaiGenGothicSC 字体(思源黑体 ttf 版)](https://github.com/m13253/kaigen-gothic)
