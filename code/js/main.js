/**
 * GLOBALS
 */
var app = {};

app.templates = {};
app.templates.start_new_design = '<div class="hero-unit">';
app.templates.start_new_design += '<h1>hi!</h1>';
app.templates.start_new_design += '<p>would you like to build a responsive design?</p>';
app.templates.start_new_design += '<a class="btn btn-primary btn-large">YES</a>';
app.templates.start_new_design += '</div>';

$(document).ready(function() {
    $('#content').html(app.templates.start_new_design);
});
