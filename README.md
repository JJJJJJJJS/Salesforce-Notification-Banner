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

## 📚 Preview

<img width="1331" height="654" alt="Default" src="https://github.com/user-attachments/assets/44c5f3cf-f03c-49a2-ab1b-52499b41f5cc" />
- [Full Documentation & Screenshots](https://github.com/JJJJJJJJS/Salesforce-Notification-Banner/wiki) — Check out the Wiki for screenshots and detailed usage examples


## Installation

Choose the installation method that best fits your needs:

### Option 1: Download component only
_Recommended if you already have a Salesforce SFDX project_

1. Download the `notificationBanner/` folder from [GitHub](https://github.com/JJJJJJJJS/Salesforce-Notification-Banner)
2. Place it in your project: `force-app/main/default/lwc/notificationBanner/`
3. Deploy using Salesforce CLI:
   ```bash
   sfdx project deploy start --source-dir force-app/main/default/lwc/notificationBanner --target-org <your-org-alias>
   ```

### Option 2: Clone the full repository
_Recommended if you want to explore the code or contribute_

1. Clone the repository:
   ```bash
   git clone https://github.com/JJJJJJJJS/Salesforce-Notification-Banner.git
   cd Salesforce-Notification-Banner
   ```

2. Deploy the component:
   ```bash
   sfdx project deploy start --source-dir . --target-org <your-org-alias>
   ```
   Or deploy just the component:
   ```bash
   sfdx project deploy start --source-dir notificationBanner --target-org <your-org-alias>
   ```

### Setup in Lightning App Builder
1. Navigate to any Lightning Record Page, App Page, or Home Page
2. Click **Edit** (pencil icon)
3. Search for **Notification Banner** in the Lightning components panel
4. Drag it into your page
5. Configure the properties in the right sidebar
6. Click **Save**

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
