fx_version "cerulean"

description "React Boiler (TypeScript)"

author "Faizudheen"
version '1.0.0'
lua54 'yes'


games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/**/*"

server_script {
    'server/*.lua'
  }



files {
	'web/build/index.html',
	'web/build/**/*',
}