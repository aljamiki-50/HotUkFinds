
export default function robots()  {
    return {
        rules:[
            {
                useragent:"*",
                allow:"/",
                //  we can Embed pages here if we want them to not show up in google to be indexed 
                // disallow:["/admin","/privacy"]
            }
        ],
        sitemap:`${process.env.NEXTAUTH_URL}sitemap.xml`
    }
  
}
