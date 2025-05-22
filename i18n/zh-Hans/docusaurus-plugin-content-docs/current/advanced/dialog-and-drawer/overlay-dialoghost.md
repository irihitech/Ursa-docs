---
title: OverlayDialogHost
---

`OverlayDialogHost` 是 Ursa 中 `OverlayDialog`, `MessageBox`, `Drawer` 等虚拟对话框类控件（以下简称虚拟对话框）公用的基础设施。想要在程序中正确显示一个虚拟对话框，需要保证程序中有相对应的 `OverlayDialogHost`。 

## 如何设置OverlayDialogHost

OverlayDialogHost 可作为一个正常的控件放置在UI的任何位置，Ursa内部的机制可以保证您在代码的任何位置都可以访问到这个OverlayDialogHost实例。

通常虚拟对话框是为了在弹出对话框的时候遮挡UI中的一部分内容。OverlayDialogHost的重点在于覆盖。通常你需要用以下方法在UI中加入OverlayDialogHost

```xml
<Panel>
  <OverlayDialogHost />
  <Your_UI_Elements_To_Be_Blocked />
</Panel>
```

注意，很多控件库的所谓OverlayDialog会要求把需要遮挡的内容放在Host内，但是Ursa并非如此，而是需要放在Host下面。

## Ursa中内置OverlayDialogHost的场景

Ursa为 `UrsaWindow` 内置了OverlayDialogHost。如果您的程序本身就已经使用UrsaWindow，并且虚拟对话框需要遮盖整个窗体，那么UrsaWindow内置的OverlayDialogHost可以满足您的需求，无需再额外放置。

## OverlayDialogHost 的 HostId

Ursa 允许一个视觉树上包含多个OverlayDialogHost，为了保证您能找到正确的OverlayDialogHost，您需要为OverlayDialogHost指定HostId。要求如下：

1. 一个窗体内的各个OverlayDialogHost HostId必须不同
2. 不同窗体内的OverlayDialogHost HostId可以相同
3. HostId可以为空(null)，但只能有一个是空
4. ID一旦加入视觉树便不可修改

注意，UrsaWindow内置的OverlayDialogHost已经占用了`null`这个HostId，如果您使用了UrsaWindow，那么您自己添加的OverlayDialogHost必须指定HostId为特定的不是`null`的值

## 在代码中打开虚拟对话框

Ursa中的Dialog、OverlayDialog、Drawer、虚拟MessagBox均通过一个静态入口直接调用，因此您无需构造相关实例，无需获取相关实例，可以在代码中的任何位置（View或ViewModel中均可）直接调用。

当您打开虚拟对话框的时候，需要提供OverlayDialogHost的HostId

以OverlayDialogHost为例

```csharp
await OverlayDialog.ShowModal<V, VM>(new VM(), dialogHostId, options);
```

此处的dialogHostId为您之前为OverlayDialogHost指定的HostId。

以下为Ursa帮您寻找OverlayDialogHost的方法：

1. 如果不指定hostId，那么默认会去寻找hostId为空的OverlayDialogHost
2. 如果您在不同的窗体中包含HostId相同的OverlayDialogHost（例如同一个窗体打开多次，有多个实例共存），那么您不但需要指定HostId，还需要指定Host所在窗体的HashCode。此信息可在`options`的`TopLevelHashCode`参数中指定。如果不指定TopLevelHashCode，默认会找到注册在Ursa中的第一个
3. 如果没有找到符合条件的OverlayDialogHost，那么程序不会报错，只是不会打开您的虚拟对话框
