require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `wayne-anthony`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://wayneanthonys.co.uk/graphql"
    }
  }, 
  //{
  //  resolve: 'gatsby-plugin-google-analytics',
  //  options: {
  //    "trackingId": ""
  //  }
  //},
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Bebas Neue`,
        `Open Sans\:300,400,600`, // you can also specify font weights and styles
        `Carattere`
      ],
      display: 'swap'
    }
  },
   "gatsby-plugin-image", 
   "gatsby-plugin-sharp", 
   "gatsby-transformer-sharp", 
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-snipcart-advanced`,
    options: {
      version: "3.0.29",
      publicApiKey: process.env.SNIPCART_KEY, // use public api key here or in environment variable
      defaultLang: "en",
      currency: "gbp",
      openCartOnAdd: true,
      useSideCart: false,
      // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
      },
  },]
};