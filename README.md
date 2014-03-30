# &lt;b-flash-message&gt;

## Overview
A flash message to display information with different levels.

## Usage

``` html
<b-flash-message visible="true" type="info" closeable="true" duration="2000">
    <strong>Hello, World!</strong> Foo Bar
</b-flash-message>
```

Will display a info flash message during 2 secs containing the string "Hello, World! Foo Bar".

## Attributes

### ___visible___

A boolean attribute that control the display of the message. Valid values are `true` or `false`. By default it is set to `false`.

### ___closeable___

A boolean attribute that adds (or not) a button to let the user closes the flash message. Valid values are `true` or `false`. By default it is set to `false`.

### ___type___

Lets you apply a theme to flash message. Four values are possible: `info`, `success`, `warning` and `error`, respectively blue, green, yellow and red. By default this attribute is set to `info`.

### ___duration___

Trigger a timeout when the message is displayed (see `show` accessor). Valid value is a number given in milliseconds. 

## Methods

### ___show___

Displays the flash message.

If the attribute `duration` is set to a valid value, the message will be hidden automatically after specified number of milliseconds.

### ___close___

Hides the flash message.

## Events

### ___show___

Fired from the flash message element after it complete it is shown.

### ___close___

Fired from the flash message element after it complete it is closed.

## Styling

> More about style later. Stay tuned.

## Misc

### Customizing the flash message

You can add any HTML code in the `<b-flash-message>` elements. You can control the display via css with the `visible` attribute or via javascript with `show()` / `close()` methods.
