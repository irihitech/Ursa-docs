---
title: 对话框系统
---

本章节着重介绍Ursa中比较重要的对话框系统。在用户界面设计中，对话框和抽屉是两种常见的界面元素，用于与用户进行交互并展示额外的内容。

## 以虚拟或窗体分类

依据对话框显示在单独的窗体中或是当前窗体的视觉树中，Ursa 中的对话框和抽屉主要分为两大类，一类是窗体对话框，另一类是虚拟对话框。窗体对话框能用于有窗体的操作系统中（例如各类桌面操作系统）。虚拟对话框能应用于任何Avlaonia应用，需要配合 Ursa 的 OverlayDialogHost 使用。

||窗体|虚拟|
|:---|:--:|:--:|
|消息框|√|√|
|默认对话框|√|√|
|自定义对话框|√|√|
|默认抽屉|√||
|自定义抽屉|√||

## 以模态能力分类

对话框的模态功能会中断用户当前的操作，要求用户作出选择或提供输入。这在需要用户进行重要操作或确认时非常有用。非模态对话框则可以自由打开或关闭，不影响当前操作。

||模态|非模态|
|:---|:--:|:--:|
|消息框|√||
|默认对话框|√|√|
|自定义对话框|√|√|
|默认抽屉|√|√|
|自定义抽屉|√|√|