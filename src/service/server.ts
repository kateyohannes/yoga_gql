
import { createServer } from "node:http"
import { createSchema, createYoga } from "graphql-yoga"

export const schema = createSchema({
    typeDefs: `
        type Query{
            hello: String
            greeting(name: String): String
        }
    `,

    resolvers: {
        Query:{
            hello: ()=> 'world!',
            greeting(name: string){
                return `hello ${name}`
            }
        }
    }
});

const yoga = createYoga({ 
    schema,
    logging: 'debug'
});

const server = Bun.serve({
    fetch: yoga.fetch
})

console.info(
    `Server is running on ${new URL(
      yoga.graphqlEndpoint,
      `http://${server.hostname}:${server.port}`
    )}`
  )