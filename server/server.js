const app = require("fastify")({ logger: true });
const config = require("./config");

const {port} = config;

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await app.listen(port)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()