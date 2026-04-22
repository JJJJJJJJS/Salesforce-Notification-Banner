/* eslint-disable no-else-return */
/**
 * Notification Banner Component
 *
 * Original component created by Dylan Pluk
 * Extended and developed by Jagmohan Singh (github.com/JJJJJJJJS)
 *
 * Displays customizable notification banners in Lightning style.
 * Supports types: alert, success, warning, error, info, custom (custom colour)
 */
import { LightningElement, api } from "lwc";

export default class NotificationBanner extends LightningElement {
  @api type = "alert"; // default type - grey alert
  @api icon = ""; // default icon
  @api title = ""; // default title
  @api body = ""; // default message
  @api customBackgroundColour = "#EFBF04"; // custom background colour for "custom" type
  @api customTextColour = "#403301"; // custom text colour for "custom" type
  @api titleFontSize = "16"; // title font size in pixels
  @api bodyFontSize = "16"; // body font size in pixels

  // Map notification types to SLDS theme classes
  typeThemeMap = {
    alert: "slds-theme_offline",
    success: "slds-theme_success",
    info: "slds-theme_info",
    error: "slds-theme_error",
    warning: "slds-theme_warning"
  };

  // Map notification types to default icons
  typeIconMap = {
    alert: "utility:alert",
    success: "utility:success",
    info: "utility:info",
    error: "utility:error",
    warning: "utility:warning"
  };

  get className() {
    // For custom "custom" type, don't apply SLDS theme
    if (this.type === "custom") {
      return "slds-scoped-notification slds-media slds-media_center";
    }
    const theme = this.typeThemeMap[this.type] || this.typeThemeMap.alert;
    return `slds-scoped-notification slds-media slds-media_center ${theme}`;
  }

  get iconName() {
    if (this.icon) {
      return `utility:${this.icon}`;
    }
    return this.typeIconMap[this.type] || this.typeIconMap.alert;
  }

  get customStyle() {
    if (this.type === "custom") {
      const bgColour = this.customBackgroundColour || "#EFBF04";
      const textColour = this.customTextColour || "#403301";
      return `background-color: ${bgColour}; color: ${textColour};`;
    }
    return "";
  }

  get titleStyle() {
    return `font-size: ${this.titleFontSize}px; font-weight: bold;`;
  }

  get bodyStyle() {
    return `font-size: ${this.bodyFontSize}px;`;
  }
}