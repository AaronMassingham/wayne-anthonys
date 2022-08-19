const path = require(`path`)

exports.createPages =  async function ({ actions, graphql }) {
  
    const { data } = await graphql(`
        query {
            allWpPost {
                nodes {
                    slug
                }
            }
        }
    `)

    data.allWpPost.nodes.forEach(node => {
        const slug = node.slug
        actions.createPage({
            path: `/blog/${slug}`,
            component: require.resolve(`./src/templates/BlogPost.js`),
            context: { slug: slug },
        })
    })

}
