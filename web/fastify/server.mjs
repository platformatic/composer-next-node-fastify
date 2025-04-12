import fastify from 'fastify'

import fastifySwagger from '@fastify/swagger'

export async function build () {

  const server = fastify({
    loggerInstance: globalThis.platformatic?.logger
  })

  await server.register(fastifySwagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Test Fastify API',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0'
      },
     }
  })

  let count = 0

  server.get('/', async (req, _res) => {
    return { content: `from Fastify: ${count++}!` }
  })

  server.addHook('onReady', async () => {
    const schema = server.swagger()
    globalThis.platformatic.setOpenapiSchema(schema)
  })

  return server
}
