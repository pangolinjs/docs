# Branding

The styleguide provides branding capabilities for the navigation bar and the component pages. Custom colors, an icon and logo can be set.

Create the file `config/branding.json` to turn on branding. If no branding-file was found, the default colors from the styleguide will be used.

The following options are available:

```json
{
  "css": {
    "color-primary": "#f88",
    "color-secondary": "#999",
    "color-text": "#000",
    "color-background": "#ddd"
  },
  "logo": {
    "icon": "filename.svg",
    "logo": "another-filename.svg",
    "title": "Title for the link",
    "url": "https://example.com/"
  }
}
```

The icon and logo have to be SVG files. The icon must be square but the logo can have any aspect ratio. Make sure to set the `width` and `height` attributes to limit the logo dimensions. Both files have to be placed in the `config`-folder and will be inlined with Nunjucks.
