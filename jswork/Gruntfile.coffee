
module.exports = (grunt) ->

  prefix = grunt.option('dest') || '../src/main/webapp/resources'
  root = grunt.option('root') || '../src/main/webapp/resources'

  coffeeFiles = {}

  uglifyFiles = {}
  uglifyFiles["#{prefix}/js/inventory.js"] = [ "#{prefix}/js/sync/*.js"
                                        "#{prefix}/js/views/*.js"
                                        "#{prefix}/js/models/*.js"
                                        "#{prefix}/js/collections/*.js"]
  uglifyFiles["#{prefix}/js/inventory.min.js"] = "#{prefix}/js/inventory.js"
  



  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    coffee: {
      production: {
        options: {
          bare: true
          join: true
        },
        files: coffeeFiles
      }
      develop: {
        options: {
          bare: true
          join: true
          sourceMap: true
        },
        files: coffeeFiles
      }
    }
    uglify:
      production:
        options: 
          mangle: true
          compress: true
        files: uglifyFiles
      develop:
        options: 
          beautify: true
          mangle: false
          compress: false
          sourceMapIn: "#{prefix}/ltree.js.map"
          sourceMappingURL: "/js/ltree.min.js.map"  
        files: uglifyFiles
    }
  )


  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-uglify"

  grunt.registerTask "develop", ["coffee:production", "uglify:production"]
  grunt.registerTask "default", ["coffee:develop", "uglify:develop"]

