# Templates

Located at `src/templates`.

Templates are used to render the basic HTML structure around components. A `default.njk` template is required as a fallback for all components that don’t explicitly set a template. Other templates can be named freely.

## Basic example

The following is an example for a “minimal viable template”:

::: v-pre
```django
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    {% block pangolin_head %}{% endblock %}
  </head>
  <body>
    {% block pangolin_body %}{% endblock %}
  </body>
</html>
```
:::

`{% block pangolin_head %}{% endblock %}` and `{% block pangolin_body %}{% endblock %}` are necessary injection points for Pangolin.js. Everything else can be changed.

## Advanced example

A slightly more advanced template may include more metadata or additional markup:

::: v-pre
```django
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>{{ page.name }} | Preview | {{ project.name }}</title>
    <link rel="shortcut icon" href="{% static 'favicon.ico' %}">

    {% block pangolin_head %}{% endblock %}
  </head>
  <body>

    <div class="container">
      {% block pangolin_body %}{% endblock %}
    </div>

  </body>
</html>
```
:::
