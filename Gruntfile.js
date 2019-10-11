module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    './build/es5.js': './classes/es6.js'
                }
            }
        },
        uglify: {
            build: {
                src: './build/es5.js',
                dest: './build/es5.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['server.js'],
                tasks: ['babel','uglify'],
                options: {
                    spawn: false,
                },
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['babel','uglify','watch']);

};