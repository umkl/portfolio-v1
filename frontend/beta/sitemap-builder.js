require('babel-register');

const router = require("./src/App/App").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap(){
    return (
        new Sitemap(router)
            .build("https://ungarmichael.com")
            .save("./public/sitemap.xml")
    );
}

generateSitemap();