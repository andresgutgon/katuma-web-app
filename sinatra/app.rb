require 'sinatra/libraries'

module Sinatra
  class App < Sinatra::Base
    configure :development do
      # RELOAD http://www.sinatrarb.com/contrib/reloader
      register Sinatra::Reloader
      also_reload './libraries'
    end

    # Sinatra settings http://www.sinatrarb.com/configuration.html
    set :root, RACK_ROOT
    set :public_folder, settings.root
    set :public_subfolder, "/a" # used to build urls in views
    set :static,   true

    get '/' do
      File.read(File.join(settings.root, '/index.html'))
    end

    get %r{/css/([\w]+)} do
      File.read(File.join(settings.root, '/css/#{params[:captures].first}'))
    end

    get %r{/js/([\w]+)} do
      File.read(File.join(settings.root, '/js/#{params[:captures].first}'))
    end

    get %r{/img/([\w]+)} do
      File.read(File.join(settings.root, '/img/#{params[:captures].first}'))
    end

    get '/a' do
      File.read(File.join(settings.root, '/index.html'))
    end

    get '/a/docs' do
      File.read(File.join(settings.root, '/a/docs/index.html'))
    end
  end
end
