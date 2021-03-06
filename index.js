#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Howdy, nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
})

console.log(`
Karolína Vyskočilová - WordPress developer

I'm a WordPress and WooCommerce developer specializing in custom websites and plugins. I like to polish the clients’ ideas to perfection, showing them that a website can do more than they ever imagined, and I always make sure that my clients can handle the administration of their new website with their eyes closed.

I'm a freelancer with over 120 projects under my belt, and you can find some of my plugins in the WordPress repository. I also offer consulting services to clients, and I teach seminars on WordPress. I'm programming for more than 15 years now, specializing in WordPress for the last 7 of them.

Twitter: https://twitter.com/vyskoczilova
LinkedIn: https://www.linkedin.com/in/karolina-vyskocilova/
GitHub: https://github.com/vyskoczilova
`

)
