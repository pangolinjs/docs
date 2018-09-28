# Templates

Located at `src/templates`.

Templates are used to render the basic HTML structure around components. A `default.njk` template is required as a fallback for all components, that don’t explicitly set a template. Other template names can be chosen freely.

The following is an example for a minimal template:

::: v-pre
```twig
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

`{% block pangolin_head %}{% endblock %}` and `{% block pangolin_body %}{% endblock %}` are necessary injection points for Pangolin. Everything else can be changed.

A slightly more advanced template includes more metadata:

::: v-pre
```twig
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
    {% block pangolin_body %}{% endblock %}
  </body>
</html>
```
:::
