# Salesforce Notification Banner — LWC

A flexible Lightning Web Component that displays styled notification banners in Salesforce using SLDS scoped notifications.

> Original component created by [Dylan Pluk](https://github.com/DylanPlukkie).  
> Extended and developed by [Jagmohan Singh](https://github.com/JJJJJJJJS).

---

## Features

- 5 built-in SLDS-themed types: `alert`, `success`, `warning`, `error`, `info`
- Fully customizable `custom` type with configurable background and text colours
- Override the default icon per type (uses [SLDS utility icons](https://www.lightningdesignsystem.com/icons/#utility))
- Configurable title and body with independent font sizes
- Drag-and-drop setup via Lightning App Builder
- Works on Record Pages, App Pages, Home Pages, and Flow Screens

---

## Supported Targets

| Target | Supported |
|---|---|
| Lightning Record Page | ✅ |
| Lightning App Page | ✅ |
| Lightning Home Page | ✅ |
| Flow Screen | ✅ |

---

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `type` | String | `alert` | Type of banner: `alert`, `success`, `warning`, `error`, `info`, `custom` |
| `icon` | String | _(type default)_ | Override icon. See [SLDS utility icons](https://www.lightningdesignsystem.com/icons/#utility) |
| `title` | String | — | Bold title text |
| `titleFontSize` | Integer | `16` | Title font size in pixels |
| `body` | String | — | Body text |
| `bodyFontSize` | Integer | `16` | Body font size in pixels |
| `customBackgroundColour` | String | `#EFBF04` | Background colour for `custom` type (hex) |
| `customTextColour` | String | `#403301` | Text colour for `custom` type (hex) |

---

## Installation

Deploy to your Salesforce org using the Salesforce CLI:

```bash
sfdx project deploy start --source-dir force-app/main/default/lwc/notificationBanner --target-org <your-org-alias>
```

---

## Usage

Add the component to any Lightning page via the **Lightning App Builder** and configure the properties in the sidebar. No code required.

### Example (in another LWC)

```html
<c-notification-banner
    type="success"
    title="Record saved!"
    body="Your changes have been saved successfully."
></c-notification-banner>
```

### Custom colour example

```html
<c-notification-banner
    type="custom"
    title="Heads up"
    body="This is a custom styled banner."
    custom-background-colour="#1B4F72"
    custom-text-colour="#FFFFFF"
></c-notification-banner>
```

---

## Banner Types

| Type | SLDS Theme | Default Icon |
|---|---|---|
| `alert` | `slds-theme_offline` | `utility:alert` |
| `success` | `slds-theme_success` | `utility:success` |
| `info` | `slds-theme_info` | `utility:info` |
| `warning` | `slds-theme_warning` | `utility:warning` |
| `error` | `slds-theme_error` | `utility:error` |
| `custom` | _(your colours)_ | `utility:alert` |

---

## License

MIT
