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

/** CONTROLS **/
app.control.start_design = function() {
    $('#start_new_design').fadeOut('slow');
    $('#start_new_design').remove();
    app.control.set_hash(app.control.generate_hash());
    app.control.load_example_object();
    app.model.the_design.draw();
};
app.control.load_example_object = function() {
    app.current_design = start_design;
    console.log(app.current_design);
};
app.control.has_hash = function() {
    if (app.control.get_hash() === '') {
	return false;
    }
    return true;
};
app.control.get_hash = function() {
    return window.location.hash.substring(1);
};
app.control.clear_hash = function() {
    window.location.hash = '';
};
app.control.set_hash = function(hash) {
    window.location.hash = hash;
};
app.control.generate_hash = function() {
    return '12345';
};

$(document).ready(function() {
    if (app.control.has_hash()) {
	return;
    }
    else {
	app.model.start_new_design.draw();
    }
});
