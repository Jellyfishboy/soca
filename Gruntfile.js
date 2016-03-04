'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt, {config: 'package.json'});
    grunt.loadNpmTasks('assemble');
    require('time-grunt')(grunt);

    var socaConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        soca: socaConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            concatJavascript: {
                files: ['<%= soca.app %>/js/{,*/}*.js'],
                tasks: ['concat:javascripts']
            },
            compass: {
                files: ['<%= soca.app %>/src/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'concat:stylesheets']
            },
            assemble: {
                files: ['app/layouts/*.hbs', 'app/templates/{,*/}*.hbs', 'app/partials/**/*.hbs'],
                tasks: ['assemble']
            },
            img: {
                files: ['<%= soca.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'app'),
                            lrSnippet
                        ];
                    }
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= soca.app %>/*.html',
                        '<%= soca.app %>/css',
                        '<%= soca.app %>/js/soca.js',
                        '<%= soca.dist %>/*',
                        '!<%= soca.dist %>/.git*'
                    ]
                }]
            },
            server: {
                files: [{
                    src: [
                        '<%= soca.app %>/*.html',
                        '<%= soca.app %>/css',
                        '<%= soca.app %>/js/soca.js',
                        '<%= soca.dist %>/*'
                    ]
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= soca.app %>',
                    dest: '<%= soca.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'components/**/*',
                        '*.html',
                        'img/*'
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= soca.app %>/css',
                dest: '<%= soca.dist %>/css/',
                src: '{,*/}*.css'
            },
            javascripts: {
                expand: true,
                cwd: '<%= soca.app %>/js',
                dest: '<%= soca.dist %>/js/',
                src: '*.js'
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        compass: {
            options: {
                sassDir: '<%= soca.app %>/src/sass',
                cssDir: '<%= soca.app %>/css',
                outputStyle: 'nested',
                imagesDir: '<%= soca.app %>/img',
                imagesPath: '<%= soca.app %>/img',
                httpGeneratedImagesPath: 'http://cdn1.tomdallimore.com/soca/assets/img',
                httpImagesPath: 'http://cdn1.tomdallimore.com/soca/assets/img',
                relative_assets: false
            },
            dist: {
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        concat: {
            javascripts: {
                options: {
                  separator: ';'
                },
                src: [
                    '<%= soca.app %>/js/vendor/classie.js',
                    '<%= soca.app %>/js/vendor/mlpushmenu.js',
                    '<%= soca.app %>/components/mixitup/build/jquery.mixitup.min.js',
                    '<%= soca.app %>/js/vendor/bootstrap.min.js',
                    '<%= soca.app %>/components/bootstrap-datepicker/js/bootstrap-datepicker.js',
                    '<%= soca.app %>/js/vendor/chosen.jquery.js',
                    '<%= soca.app %>/js/lib/_soca.js', 
                    '<%= soca.app %>/js/lib/soca.misc.js',
                    '<%= soca.app %>/js/lib/soca.modal.js',
                    '<%= soca.app %>/js/lib/soca.animation.js', 
                    '<%= soca.app %>/js/lib/soca.filter.js',
                    '<%= soca.app %>/js/lib/soca.mobile.js',
                    '<%= soca.app %>/components/chartjs/Chart.js',
                    '<%= soca.app %>/components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js',
                ],
                dest: '<%= soca.app %>/js/soca.js',
            },
            stylesheets: {
                options: {
                    separator: ''
                },
                src: [
                    '<%= soca.app %>/components/normalize-css/normalize.css',
                    '<%= soca.app %>/components/bootstrap-datepicker/css/datepicker3.css',
                    '<%= soca.app %>/css/soca.css'
                ],
                dest: '<%= soca.app %>/css/soca.css'
            }
        },
        uglify: {
            options: {
              mangle: true
            },
            server: {
                files: {
                    '<%= soca.dist %>/js/application.js': ['<%= soca.dist %>/js/application.js'],
                    '<%= soca.dist %>/js/soca.js': ['<%= soca.dist %>/js/soca.js']
                }
            }
        },
        assemble: {
            options: {
                layoutdir: "<%= soca.app %>/layouts",
                partials: "app/partials/**/*.hbs",
                flatten: true
            },
            application: {
                options: {
                    layout: 'application.hbs'
                },
                src: ['<%= soca.app %>/templates/application/*.hbs'],
                dest: '<%= soca.app %>/.'
            },
            login: {
                options: {
                    layout: 'login.hbs'
                },
                src: ['<%= soca.app %>/templates/login/*.hbs'],
                dest: '<%= soca.app %>/.'
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/* Compiled Soca stylesheet assets */'
                },
                files: {
                    '<%= soca.dist %>/css/soca.css': ['<%= soca.dist %>/css/soca.css']
                }
            }
        },
        cdnify: {
            dist: {
                options: {
                    base: 'http://cdn0.tomdallimore.com/soca/assets/',
                    html: {
                        'link[rel=icon]' : 'href'
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '**/*.{css,html}',
                    dest: 'dist'
                }]
            }
        },
        htmlbuild: {
            dist: {
                src: '<%= soca.dist %>/*.html',
                dest: '<%= soca.dist %>/'
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'clean:server',
            'compass:server',
            'concat:javascripts',
            'concat:stylesheets',
            'assemble:application',
            'assemble:login',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
    grunt.registerTask('build', [
        'clean:dist',
        'compass:dist',
        'concat:javascripts',
        'concat:stylesheets',
        'assemble:application',
        'assemble:login',
        'copy:styles',
        'cssmin',
        'copy:javascripts',
        'uglify:server',
        'copy:dist',
        'htmlbuild:dist'
    ]);
    grunt.registerTask('clean-dist', [
        'clean:dist_folder'
    ]);
};