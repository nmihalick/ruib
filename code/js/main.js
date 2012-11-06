/**
 * GLOBALS
 */
var app = {};
app.view = {};
app.control = {};

/** VIEWS **/
app.view.start_new_design = {};
app.view.start_new_design.templ = '<div class="hero-unit" id="start_new_design">';
app.view.start_new_design.templ += '<h1>hi!</h1>';
app.view.start_new_design.templ += '<p>would you like to build a responsive design?</p>';
app.view.start_new_design.templ += '<a class="btn btn-primary btn-large">YES</a>';
app.view.start_new_design.templ += '</div>';
app.view.start_new_design.draw = function() {
    $('#content').html(app.view.start_new_design.templ);
    $('#start_new_design > .btn').on('click', function() {
	app.control.start_design();
    });
};

app.view.the_design = {};
app.view.the_design.templ = '';
app.view.the_design.draw = function() {
    app.control.load_example_object();
    app.view.the_design.templ += '<div class="span4"><ul class="unstyled">';
    for (var i = 0; i < app.current_design.children.length; i++) {
	app.view.the_design.templ += '<li><a class="btn">';
	app.view.the_design.templ += app.current_design.children[i].id;
	app.view.the_design.templ += '</a></li>';
    }
    app.view.the_design.templ += '</ul></div>';
    $('#content').html(app.view.the_design.templ);
};

/** CONTROLS **/
app.control.start_design = function() {
    $('#start_new_design').fadeOut('slow');
    $('#start_new_design').remove();
    app.control.set_hash(app.control.generate_hash());
    app.view.the_design.draw();
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
	app.view.the_design.draw();
    }
    else {
	app.view.start_new_design.draw();
    }
});
