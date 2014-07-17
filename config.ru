# This trick is for load current path in LOAD_PATH
unless $LOAD_PATH.include? '.'
  $LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))
end

ENV['RACK_ENV'] ||= "development"

require 'webrick'
require 'sinatra/app'

webrick_options = {
  :Port            => 4000,
  :FancyIndexing   => true, # this is for directory listing. But is not working
}

Rack::Handler::WEBrick.run Sinatra::App.new, webrick_options
