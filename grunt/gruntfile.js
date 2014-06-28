module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Compass SCSS
		 */
		 sass: {
		 	dist: {
		 		options: {
			 		output: 'compressed',
			 		sourceComments: 'map',
			 		sourceMap: 'sass'
			 	},
		 		files: {
		 			'../css/style.css': '../scss/style.scss'
		 		}
		 	},
		 	dev: {
		 		options: {
			 		output: 'expanded'
			 	},
		 		files: {
		 			'../css/style.css': '../scss/style.scss'
		 		}
		 	},
		 },


		/**
		 * Jade
		 */
		jade: {
			dist: {
				options: {
					pretty: true,
				},
				files: {
					'../index.html' : ['../jade/index.jade']
				}
			}
		},


		/**
		 * File watcher
		 */
		watch: {
			css: {
				files: ['../scss/*.scss'],
				tasks: ['sass:dev']
			},
			jade: {
				files: ['../jade/index.jade'],
				tasks: ['jade:dist']
			}
		}
	});



	/**
	 * Load modules that we'll use
	 */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
};