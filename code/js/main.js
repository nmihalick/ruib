/**
 * GLOBALS
 */
var app = {};

/**
 * toolbar
 *
 * the toolbar draws a floating toolbar that can be dragged around the screen.
 * it can take some styling information, some interaction information, and then
 * the widgets to display. the widgets are an object in the form:
 *
 * { name: "action name", icon: "image.gif", action: function(e) { ... } }
 *
 * example:
 *  var widgets = [ {name: "action name", action: function(e) { *  alert("clicked"); }];
 *  var config = { widgets: widgets, position: {x: "10px", y: "10px"} };
 *  var t = ruib.toolbar(config);
 *  t.draw();
 *
 * todo:
 *  - add more configuration options
 */
ruib.toolbar = function(my) {
    var that = {};
    my.nav_id = 'ruib-toolbar';
    my.hidden_state_id = 'ruib-toolbar-hidden';

    that.set_defaults = function() {
	if (my.widgets === undefined) { my.widgets = []; }
	if (my.position === undefined) { 
	    my.position = { x: "10px", y: "10px" };
	}

	// add hide toolbar widget
	var hide_toolbar_widget = {
	    name: "hide toolbar",
	    action: function(e) {
		$('#'+my.nav_id).hide();
		$('#'+my.hidden_state_id).show();
		return false;
	    }
	};
	my.widgets.push(hide_toolbar_widget);
    };

    that.draw = function() {
	that.set_defaults();

	var nav = document.createElement("nav");
	$(nav).attr('id', 'ruib-toolbar');
	$(nav).css("top", my.position.y);
	$(nav).css("left", my.position.x);
	$("body").append(nav);

	var nav_header = document.createElement("h1");
	$(nav_header).html("toolbar");
	$(nav).append(nav_header);
	$(nav).draggable({ handle: "h1" });

	var nav_ul = document.createElement("ul");
	$(nav_ul).addClass('nav nav-tabs nav-stacked');
	$(nav).append(nav_ul);

	for (var i = 0; i < my.widgets.length; i++) { 
	    var nav_li = document.createElement("li");
	    $(nav_ul).append(nav_li);
	    var nav_li_a = document.createElement("a");
	    $(nav_li_a).attr('href', '#');
	    $(nav_li_a).html(my.widgets[i].name);
	    $(nav_li_a).on('click', my.widgets[i].action);
	    $(nav_li).append(nav_li_a);
	}

	// hidden state
	var hidden_state = document.createElement('a');
	$(hidden_state).attr('href', '#');
	$(hidden_state).attr('id', 'ruib-toolbar-hidden');
	$(hidden_state).addClass('btn btn-small');
	$(hidden_state).html('show toolbar');
	$(hidden_state).on('click', function(e) {
	    $('#'+my.nav_id).show();
	    $('#'+my.hidden_state_id).hide();
	    return false;
	});
	$("body").append(hidden_state);
	$(hidden_state).hide();
    };

    return that;
};

/**
 * READY
 */
$(document).ready(function() {
    $("#ruib-edit").on("click", function(e) {
	$("*").on("click", function(e) {
	    var editModal = document.createElement('div');
	    $(editModal).addClass("modal hide");
	    $(editModal).attr('id', 'editModal');
	    $(editModal).modal({show: true, backdrop: false});

	    var editModal_header = document.createElement('div');
	    $(editModal_header).addClass('modal-header');
	    $(editModal_header).appendTo(editModal);
	    var editModal_closeButton = document.createElement('button');
	    $(editModal_closeButton).addClass('close');
	    $(editModal_closeButton).attr('type', 'button');
	    $(editModal_closeButton).attr('aria-hidden', 'true');
	    $(editModal_closeButton).data('dismiss', 'modal');
	    $(editModal_closeButton).val("x");
	    $(editModal_closeButton).html("x");
	    $(editModal_closeButton).appendTo(editModal_header);
	    var editModal_headerTitle = document.createElement('h3');
	    $(editModal_headerTitle).html("element editor");
	    $(editModal_headerTitle).appendTo(editModal_header);

	    var editModal_body = document.createElement('div');
	    $(editModal_body).addClass('modal-body');
	    $(editModal_body).html(e.currentTarget);
	    $(editModal_body).appendTo(editModal);

	    var editModal_footer = document.createElement('div');
	    $(editModal_footer).addClass('modal-footer');
	    $(editModal_footer).appendTo(editModal);
	    return false;
	});
	return false;
    });
});
