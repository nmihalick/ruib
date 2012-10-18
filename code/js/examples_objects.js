/**
 * EXAMPLES OF OBJECTS
 */
app.example = {};

/* reusable html widgets */
app.templates = {};
app.templates.one_third_block = '<div class="one-third column"><h3>{{title}}</h3>{{content}}</div>';
//app.template.doc_section = '<div class="doc-section" id="{{id}}">{{content}}</div>';

/* css snippets */
app.css = {};
app.css.header = '.header { size: 1.25em }';
app.css.body = 'body { font: normal 100% Helvetica, Arial, sans-serif; }';
app.css.column = '.column { float: left; width: 12.551%; }';

/* entire page is made up of one or more of the reusable widgets */

app.pages = {};
app.pages.index = [
    [app.templates.one_third_block, { title: 'one', content: '<p>content</p>' }],
    [app.templates.one_third_block, { title: 'two', content: '<p>content</p>' }],
    [app.templates.one_third_block, { title: 'three', content: '<p>content</p>' }]
    ];
