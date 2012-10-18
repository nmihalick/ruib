/**
 * GLOBALS
 */
var app = {};
app.model = {};
app.control = {};

app.model.start_new_design = {};
app.model.start_new_design.templ = '<div class="hero-unit" id="start_new_design">';
app.model.start_new_design.templ += '<h1>hi!</h1>';
app.model.start_new_design.templ += '<p>would you like to build a responsive design?</p>';
app.model.start_new_design.templ += '<a class="btn btn-primary btn-large">YES</a>';
app.model.start_new_design.templ += '</div>';
app.model.start_new_design.draw = function() {
    $('#content').html(app.model.start_new_design.templ);
    $('#start_new_design > .btn').on('click', function() {
	app.control.start_design();
    });
};

app.model.the_design = {};
app.model.the_design.templ = '<div id="the_design"></div>';
app.model.the_design.templ += '';
app.model.the_design.draw = function() {
    $('#content').html(app.model.the_design.templ);
};

app.control.start_design = function() {
    $('#start_new_design').fadeOut('slow');
    $('#start_new_design').remove();
    app.model.the_design.draw();
};

$(document).ready(function() {
    app.model.start_new_design.draw();
});
