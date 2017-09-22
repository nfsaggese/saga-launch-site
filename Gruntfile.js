module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      // dependencies: {
      //   cmd:'npm install --prod',
      //   cwd:'dist/',
      // },
      dependencies: {
        cmd:'npm install --prod',
        cwd:'src/',
      },
    },
    watch: {
      main: {
        files: ['src/**'],
        tasks: ['default'],
      },
    },
    imagemin: {
      main:{
        files: [{
          expand:true,
          cwd: 'src/img/',
          src:['**/*.{svg,png,jpg,gif}'],
          dest: 'src/img/'
        }],
        options: {
          optimizationLevel: 7,
        }
      },
    },
    less: {
       main: {
        src: ['src/css/*.less','!src/css/purify-bootstrap.less'],
        dest: 'src/css/main.min.css',
        options: {
          compress: true,
        },
      },
      bootstrap: {
       src: ['src/css/purify-bootstrap.less'],
       dest: 'src/css/bootstrap.min.css',
       options: {
         compress: true,
       },
     },
    },
    connect: {
      dev: {
        port: 9000,
        base: 'dist',
        middleware: function(connect, options, middlewares) {
          middlewares.unshift(function(req, res, next) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', '*');
              next();
          });

          return middlewares;
        },
      },
    },
    browserify: {
      main:{
        src:'src/js/main.js',
        dest:'dist/js/bundle.js',
      },
    },
    clean: {
      oldpkg: ['src/node_modules/**','src/package.json'],
      dist: ['dist/*'],
    },
    purifycss: {
      options: {},
      target: {
        src: ['src/*.html',],
        css: ['src/node_modules/bootstrap/bootstrap.css'],
        dest: 'src/css/purify-bootstrap.less',
      },
    },
    // cssmin: {
    //     options: {
    //       mergeIntoShorthands: false,
    //       roundingPrecision: -1
    //     },
    //     target: {
    //       files: [{
    //         expand: true,
    //         cwd: 'src/',
    //         src: ['css/main.css','node_modules/bootstrap/purify-bootstrap.css'],
    //         dest: 'css/compiled.min.css'
    //       }],
    //     }
    // },
    copy: {
      updates:{
        files: [
          {
            expand:true,
            src:['package.json'],
            dest:'src/',
            filter:'isFile',
          }
        ],
      },
      main: {
        files: [

          {
            expand:true,
            flatten:true,
            cwd: '',
            src:['node_modules/bootstrap/dist/**'],
            dest: 'src/node_modules/bootstrap/',
            filter: 'isFile',
          },
          {
            expand:true,
            flatten:true,
            cwd: '',
            src:['node_modules/font-awesome/fonts/**'],
            dest: 'src/node_modules/font-awesome/fonts/',
            filter: 'isFile',
          },
          {
            expand:true,
            flatten:true,
            cwd: '',
            src:['node_modules/font-awesome/css/**'],
            dest: 'src/node_modules/font-awesome/css/',
            filter: 'isFile',
          },
          {
            expand:true,
            cwd:'src/',
            src:['**'],
            dest:'dist/',
            filter: 'isFile',
            // flatten:true,
          },
          // {
          //   expand:true,
          //   cwd: 'src/',
          //   src:['node_modules/**'],
          //   dest: 'dist/',
          // }
          // {
          //   expand:false,
          //   src: ['node_modules/handlebars/dist/handlebars.min.js'],
          //   dest: ['src/js/handlebars.min.js'],
          //   flatten: true,
          //   filter: 'isFile',
          // },
          // {expand:true, src: ['node_modules/crypto-js/*'], dest: 'src/js/crypto-js/', flatten:true, filter:'isFile'},
          // // includes files within path
          // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
          //
          // // includes files within path and its sub-directories
          // {expand: true, src: ['path/**'], dest: 'dest/'},
          //
          // // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
          //
          // // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },

    },
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-exec');
  // Default task(s).
  grunt.registerTask('dist', ['newer:imagemin:main','clean:dist','purifycss','default']);
  grunt.registerTask('default', ['less','browserify:main','copy:main',]);
  grunt.registerTask('listen', ['watch:main',]);
  grunt.registerTask('server', ['default','connect:dev',]);
  grunt.registerTask('update', ['clean:oldpkg','copy:updates','exec:dependencies','default']);
  //'clean:dist','purify'
};
