# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', input: 'coffee', output: 'public/javascripts'

guard 'compass' do
  watch(%r{^sass/(.*)\.s[ac]ss$})
end

guard 'haml', input: 'haml', output: 'public', haml_options: {attr_wrapper: '"'} do
  watch(%r{^haml/.+(\.html\.haml)$})
end

guard 'livereload' do
  watch(%r{^public/.+\.(css|js|html)$})
end
