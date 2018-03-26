# Index

This is the Menu Dropdown:
{{#docs-demo as |demo|}}
  {{#demo.example name='ui-menu-dropdown.hbs'}}
    {{#ui-menu-dropdown size="medium" as |menu|}}
      {{menu.listItem title="hello"}}
      {{menu.listItem title="there"}}
    {{/ui-menu-dropdown}}
  {{/demo.example}}

  {{demo.snippet 'ui-menu-dropdown.hbs'}}
{{/docs-demo}}
