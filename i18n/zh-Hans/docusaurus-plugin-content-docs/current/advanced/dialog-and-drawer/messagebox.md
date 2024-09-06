---
title: MessageBox 消息框
sidebar_position: 1
---

## 窗体消息框

Ursa 中的 MessageBox(消息框) 与 WPF MessageBox 用法比较类似。使用 `MessageBox.ShowAsync` 可以调用窗体消息框。

示例

```csharp
public static async Task<MessageBoxResult> ShowAsync(
    string message,
    string? title = null,
    MessageBoxIcon icon = MessageBoxIcon.None,
    MessageBoxButton button = MessageBoxButton.OK)
```

其中message和title分别为消息内容和标题。

icon 为 `MessageBoxIcon`枚举类，可选值包括`Asterisk`, `Error`, `Exclamation`, `Hand`, `Information`, `None`, `Question`, `Stop`, `Warning`, `Success`。

button 为 `MessageBoxButton` 枚举类，可选值包括 `OK`, `OKCancel`, `YesNo`, `YesNoCancel`。

MessageBox 默认以MainWindow作为消息框的父窗口。如果您希望以其他窗体作为父窗口，可以额外指定Owner。

## 虚拟消息框

在正确布置 OverlayDialogHost 后，您可以在程序中使用虚拟消息框。

示例

```csharp
public static async Task<MessageBoxResult> ShowOverlayAsync(
    string message,
    string? title = null,
    string? hostId = null,
    MessageBoxIcon icon = MessageBoxIcon.None,
    MessageBoxButton button = MessageBoxButton.OK,
    int? toplevelHashCode = null)
```

其中 hostId 为 OverlayDialogHost 的 ID。