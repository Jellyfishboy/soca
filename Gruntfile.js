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
    require('time-grunt')(grunt);

    var socaConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        soca: socaConfig,
        watch: {
            coffee: {
                files: ['app/src/coffee/{,*/}*.coffee'],
                tasks: ['coffee:server']
            },
            options: {
                nospawn: true
            },
            compass: {
                files: ['app/src/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'app/*.html',
                    'app/css/{,*/}*.css',
                    'app/src/sass/{,*/}*.{scss,sass}',
                    'app/src/coffee/{,*/}*.coffee',
                    'app/js/{,*/}*.js',
                    'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
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
                        '<%= soca.app %>/css',
                        '<%= soca.app %>/js/application.js',
                        '<%= soca.app %>/js/application.js.map',
                        '<%= soca.dist %>/*',
                        '!<%= soca.dist %>/.git*'
                    ]
                }]
            },
            server: {
                files: [{
                    src: [
                        '<%= soca.app %>/css',
                        '<%= soca.app %>/js/application.js',
                        '<%= soca.app %>/js/application.js.map',
                        '<%= soca.dist %>/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'coffee:server',
                'compass:server'
            ]
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
                        '*.html'
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= soca.app %>/css',
                dest: 'dist/css/',
                src: '{,*/}*.css'
            },
            javascripts: {
                expand: true,
                cwd: '<%= soca.app %>/js',
                dest: 'dist/js/',
                src: '{,*/}*.js'
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        compass: {
            options: {
                sassDir: 'app/src/sass',
                cssDir: 'app/css',
                outputStyle: 'compressed'
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        coffee: {
            options: {
                sourceMap: false,
                sourceRoot: ''
            },
            dist: {},
            server: {
                files: [{
                    expand: true,
                    cwd: 'app/src/coffee',
                    src: '{,*/}*.coffee',
                    dest: 'app/js',
                    ext: '.js'
                }]
            }
        },
        uglify: {
            options: {
              mangle: true
            },
            server: {
                files: {
                    'app/js/application.js': [
                        'app/js/application.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:server',
        'uglify:server',
        'copy:styles',
        'copy:javascripts',
        'copy:dist'
    ]);
};