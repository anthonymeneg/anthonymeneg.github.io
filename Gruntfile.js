module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        bower_concat: {
            all: {
                dest: 'tmp/bower_components.js',
                cssDest: 'tmp/bower_components.css'
            }
        },
        concat: {
            dist: {
                src: ['tmp/bower_components.js', 'js/init.js'],
                dest: 'tmp/main.js',
            },
        },
        copy: {
            main: {
                files: [{
                    src: 'tmp/main.js',
                    dest: 'js/main.js'
                }, {
                    src: 'tmp/bower_components.js',
                    dest: 'js/vendor.bundle.js'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! Generated on <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
            },
            build: {
                src: 'tmp/main.js',
                dest: 'js/main.min.js'
            }
        },
        clean: ["tmp"]
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('min', ['bower_concat', 'concat', 'copy', 'uglify', 'clean']);
    grunt.registerTask('default', ['bower_concat', 'concat', 'copy', 'clean']);
};