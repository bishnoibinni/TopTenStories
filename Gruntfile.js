module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    'dest/topstories.min.js': ['src/model/author.js', 'src/model/displayViewItems.js',
                        'src/model/story.js', 'src/service/transport.js', 'src/utils/helper.js',
                        'src/utils/staticData.js', 'src/utils/tableTemplateCreator.js',
                        'src/controller/indexController.js']
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false
            },
            target_demo: {
                files: {
                    'dest/topstories.min.css': ['src/css/index.css']
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['src/css/index.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['path/to/**/*.css']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['csslint', 'cssmin', 'jshint', 'uglify']);

};