#!/usr/bin/env node
'use strict';

/**
 * This scripts starts grunt, and a transparent proxy to switch requests
 * between the rails app and the frontend app
 *
 * use the --production flag to use production data
 */
var httpProxy = require('http-proxy')
  , fs = require('fs')
  , spawn = require('child_process').spawn
  , _ = require('underscore')
  , children = {}
  , logs = {}
  , config = {}
  , asset_urls = new RegExp("(^\/img\/|^\/js\/|^\/css\/|^\/a\/|^\/a$|\/index.html$)") // /a, /a/.*
  , logs_folder = './logs'
  , grunt_options = ['--force', '--notify', '--verbose', '--debug']
  , grunt_tasks = []
  , grunt_arguments;

config.proxy_port = 8000;

// Sinatra App to serve static index.html
config.assets = {
  host: 'localhost'
, port: 4000
};

config.rails = {
  host: 'localhost'
, port: 3000
};

grunt_arguments = _.flatten([grunt_tasks, grunt_options]);
children.grunt = spawn('grunt', grunt_arguments); // spawn grunt
children.webrick = spawn('bundle', ['exec', 'rackup']); // spawn webrick

// if logs folder dosn't exist we create it
fs.exists(logs_folder, function (exists) {
  if (!exists) {
    fs.mkdir(logs_folder);
  }

  logs.grunt = fs.createWriteStream(logs_folder + '/grunt.log');
  children.grunt.stdout.pipe(logs.grunt);

  children.grunt.stdout.pipe(process.stdout);
  children.grunt.stderr.pipe(process.stderr);

  logs.webrick = fs.createWriteStream(logs_folder + '/webrick.log');
  children.webrick.stdout.pipe(logs.webrick);
  children.webrick.stderr.pipe(logs.webrick);
});

// catch grunt's exit
children.grunt.on('close', function (code, signal) {
  if (code === 0) {
    console.error('The grunt process has completed successfully.');
  } else if (code > 0) {
    console.error('The grunt process has exited with status:', code);
  }

  process.kill(children.webrick);
  process.exit();
});

children.webrick.on('close', function (code, signal) {
  console.log('The webrick process has died or failed to start. Try running `bundle exec rackup`');
  process.kill(children.grunt);
  process.exit();
});

// catch CTR-C
process.on('SIGINT', function () {
  console.log('\n\nBye Bye. Killing child processes');
  process.kill(children.grunt);
  process.kill(children.webrick);
  process.exit();
});

/**
 * Redirects the client to the app path
 * @param  {HTTPResponse} res
 */
function redirectRoot(res) {
  res.writeHead(302, {
    'Location': '/index.html'
  });
  res.end();
}

// start the proxy server
httpProxy.createServer(function (req, res, proxy) {
  var proxy_config = {
    host: 'localhost'
  , port: 8000
  };

  if (['/'].indexOf(req.url) !== -1) {
    return redirectRoot(res);
  } else if (asset_urls.exec(req.url)) {
    proxy_config = config.assets;
  } else {
    proxy_config = config.rails;
  }

  proxy.proxyRequest(req, res, proxy_config);
}).listen(config.proxy_port);

console.log('Transparent proxy running on port', config.proxy_port);
console.log('Static files on port: ' + config.assets.port);
console.log('Using the Katuma API from: ' + config.rails.host + ':' + config.rails.port);
console.log('======================================\n');

console.log('Open http://localhost:' + config.proxy_port + ' to start developing');

// TODO: implement a docs folder with info about stack
console.log('Read the docs at http://localhost:' + config.proxy_port + '/a/docs/index.html');
console.log('\n');
