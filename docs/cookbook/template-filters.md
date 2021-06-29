# Template Filters

Custom filters for the template engine Nunjucks. Add filters to the [configuration file in your project’s root directory](../guide/configuration).

## Date formatting

### Filter

```js
export default {
  engine: {
    filters: {
      /**
       * Format date
       * @param {Date|string} date Date to format
       * @param {string} [locale] Language and region
       * @param {Object} [options] Formatter options
       * @returns {string} Formatted date
       */
      date (
        date,
        locale = 'en-US',
        options = { day: 'numeric', month: 'long', year: 'numeric' }
      ) {
        return new Date(date).toLocaleDateString(locale, options)
      }
    }
  }
}
```

### Usage

[Locale and options documentation on MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#syntax)

```django
{{ "2021-06-29" | date }}
Output: June 29, 2021

{{ "2021-06-29" | date("de-DE") }}
Output: 29. Juni 2021

{{ "2021-06-29" | date("de-DE", { month: '2-digit', day: '2-digit' }) }}
Output: 29.06.
```
