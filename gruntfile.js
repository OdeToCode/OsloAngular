module.exports = function (grunt) {
	'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: {
                src: ['gruntfile.js', 'movieApp/**/*.js']
            }
        },
        watch: {     
            options:{
                livereload:true
            },
            js: {
                files: '<%= jshint.files.src %>',
                tasks: ['jshint']
            },
            html: {
                files: ['movieApp/**/*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');    
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};