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

    grunt.initConfig({
        watch: {
            coffee: {
                files: ['app/src/coffee/{,*/}*.coffee'],
                tasks: ['coffee:server', 'uglify:server']
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
                sourceMap: true,
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
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-open');
    grunt.registerTask('server', function (target) {

        grunt.task.run([
            'compass:server',
            'coffee:server',
            'uglify:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};