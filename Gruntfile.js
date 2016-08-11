module.exports = function (grunt) {

  //pure javascript:
  // var nodePaths = ['app_server/**/*.js', 'app_api/**/*.js'];
  // var browserPaths = ['public/javascripts/*.js', 'public/javascripts/**/*.js'];
  // var jsPaths = nodePaths.concat(browserPaths);

  //JSX:
  var jsxPaths = ['js/src/*.jsx'];
  var browserPaths = jsxPaths;

  // jsPaths.push('Gruntfile.js');

  //load plugins
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-eslint');


  //configure plugins
  grunt.initConfig({
    eslint: {
      target: jsxPaths
    },
    jscs: {
      options: {
        fix: true, // Autofix code style violations when possible.
      },
      autoFix: {
        files: {
          src: jsxPaths,
        },
        options: {
          fix: true,
          requireSpaceBeforeBinaryOperators: true,
          requireSpaceAfterBinaryOperators: true,
          requireSpacesInAnonymousFunctionExpression: {
            beforeOpeningRoundBrace: true,
            beforeOpeningCurlyBrace: true
          },
          requireSpaceBeforeBlockStatements: true,
          requireSpacesInConditionalExpression: true,
          requireSpaceAfterComma: true,
          requireSpaceBetweenArguments: true,
          requireSpaceAfterKeywords: true,
          requirePaddingNewLinesAfterBlocks: true,
          requireLineFeedAtFileEnd: true,
          disallowTrailingWhitespace: true,
          requireSpaceBetweenArguments: true,
          validateQuoteMarks: true,
          requirePaddingNewLinesBeforeLineComments: true,
          disallowSpacesInCallExpression: true,
          disallowQuotedKeysInObjects: true,
          disallowSpacesInFunctionDeclaration: {
            beforeOpeningRoundBrace: true
          },
          requireSpacesInsideObjectBrackets: 'all',
          disallowSpaceAfterObjectKeys: true,
          disallowMultipleLineBreaks: true,
          disallowSpacesInsideParentheses: true,
          disallowSpaceBeforeComma: true,
          disallowSpaceBeforeBinaryOperators: [','],
          requireSpaceBeforeObjectValues: true,
          requireShorthandArrowFunctions: true
        }
      },
      showErrors: {
        files: {
          src: jsxPaths,
        },
        options: {
          preset: 'airbnb',
          requireTrailingComma: false,
          maximumLineLength: 300
        }
      }
    },
  });

  //register tasks:
  grunt.registerTask('default', ['jscs:autoFix', 'jscs:showErrors', 'eslint']);

};
