# bundled gems
require 'sinatra/base'
require "sinatra/reloader"

# Add this file to load path
$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))

RACK_ROOT = File.expand_path(File.dirname(__FILE__) + '/..')

