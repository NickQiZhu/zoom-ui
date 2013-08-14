module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                process: true
            },
            basic: {
                src: ['src/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'build/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jasmine: {
            coverage: {
                src: ['src/**/*.js'],
                options: {
                    specs: ['spec/**/*_spec.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'build/coverage/coverage.json',
                        report: 'build/coverage',
                        thresholds: {
                            lines: 75,
                            statements: 75,
                            branches: 75,
                            functions: 90
                        }
                    }
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['jasmine', 'jshint', 'concat', 'uglify']);
};