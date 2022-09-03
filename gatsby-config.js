require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Award Winning Barbers Hipperholme & Halifax | Wayne Anthonys Barbers`,
    siteUrl: `https://wayneanthonys.co.uk`,
    description: `Wayne Anthony Executive Barbers is an award winning 1940s style barbershop in Hipperholme, Halifax. Try a friendly, relaxing & retro barber experience today!`,
    twitterUsername: `@WAnthonys`,
    image: `/icon.svg`,
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://f3z.8a2.myftpupload.com/graphql"
    }
  }, 
  
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Wayne Anthonys Executive Barber`,
      short_name: `Wayne Anthonys`,
      description: `Wayne Anthony Executive Barbers is an award winning 1940s style barbershop in Hipperholme, Halifax.`,
      icon: `./static/icon.svg`,
      start_url: `/`,
      background_color: `#0c0c0b`,
      lang: `en`,
      theme_color: `#ff6a66`,
      display: `standalone`,
    },
  },

   "gatsby-plugin-image", 
   "gatsby-plugin-sharp", 
   "gatsby-transformer-sharp",
   "gatsby-plugin-sitemap", 
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.GATSBY_SNIPCART_API_KEY,
        js: false,
        //styles: false
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_TRACKING_ID // Google Analytics / GA
        ],

      },
    },
    {/*
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": process.env.GOOGLE_TRACKING_ID
      }
    */},

]
};