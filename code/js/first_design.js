var start_design = {};
start_design.children = [];

start_design.nav = {};
start_design.nav.templ = '<div class="navbar navbar-inverse navbar-fixed-top">{{children}}</div>';

start_design.container = {};
start_design.container.templ = '<div class="container-fluid">{{children}}</div>';
start_design.container.children = [];

start_design.row1 = {};
start_design.row1.templ = '<div class="row-fluid">{{children}}</div>';
start_design.row1.children = [];

start_design.row1_col1 = {};
start_design.row1_col1.templ = '<div class="span3"><div class="well sidebar-nav"><ul class="nav nav-list">{{children}}</div></div></div>';
start_design.row1_col1.children = [];

start_design.row1_col2 = {};
start_design.row1_col2.templ = '<div class="span9">{{children}}</div>';
start_design.row1_col2.children = [];

start_design.hero = {};
start_design.hero.templ = '<div class="hero-unit">{{children}}</div>';
start_design.hero.children = [];

start_design.row1_col1_row1 = {};
start_design.row1_col1_row1.templ = '<div class="row-fluid">{{children}}</div>';
start_design.row1_col1_row1.children = [];

start_design.row1_col1_row1_col1 = {};
start_design.row1_col1_row1_col1.templ = '<div class="span4">{{children}}</div>';
start_design.row1_col1_row1_col1.children = [];

start_design.row1_col1_row1_col2 = {};
start_design.row1_col1_row1_col2.templ = '<div class="span4">{{children}}</div>';
start_design.row1_col1_row1_col2.children = [];

start_design.row1_col1_row1_col3 = {};
start_design.row1_col1_row1_col3.templ = '<div class="span4">{{children}}</div>';
start_design.row1_col1_row1_col3.children = [];

start_design.footer = {};
start_design.footer.templ = '<footer><p>&copy; Company 2012</p></footer>';
start_design.footer.children = [];

start_design.children.push(start_design.nav);
start_design.children.push(start_design.container);

start_design.container.children.push(start_design.row1);
start_design.container.children.push(start_design.footer);
