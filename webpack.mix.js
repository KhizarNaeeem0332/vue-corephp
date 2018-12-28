const mix = require('laravel-mix');

mix
.setPublicPath('public')
.options({ imgLoaderOptions: { enabled: false } })
.js('resources/js/app.js', 'public/vue/js')
.sass('resources/sass/app.scss', 'public/vue/css');