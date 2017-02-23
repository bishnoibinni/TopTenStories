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
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dest/topstories.min.css': ['src/css/index.css', 'src/css/index_button.css', 'src/css/index_spinner.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify','cssmin']);

};