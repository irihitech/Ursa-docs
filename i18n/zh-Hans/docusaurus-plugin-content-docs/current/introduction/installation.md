---
title: 安装使用
---

## 安装Ursa

您可以通过 nuget 安装 Ursa

```bash
dotnet add package Irihi.Ursa
```

Ursa遵循无样式设计理念，控件的功能与样式完全分离。完成上述安装后后您已经可以在Avalonia程序中使用Ursa的相关功能，但控件仍然不可见。您需要继续安装Ursa的主题库。

## 使用Semi for Ursa

目前我们为Ursa提供了基于 Semi Avalonia 的主题库。您可以通过 nuget 安装

```bash
dotnet add package Semi.Avalonia
dotnet add package Irihi.Ursa.Themes.Semi
```

安装后需要在 App.xaml 引用Semi for Ursa的样式文件

```xml
<Application...
    xmlns:u-semi="https://irihi.tech/ursa/themes/semi"
    xmlns:semi="https://irihi.tech/semi"
    ....>
    <Application.Styles>
        <semi:SemiTheme Locale="zh-CN" />
        <u-semi:SemiTheme Locale="zh-CN"/>
    </Application.Styles>
</Application>
```

至此，您就可以在程序中看到Ursa的控件了。
