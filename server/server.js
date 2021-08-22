const app = require("fastify")({ logger: true });
const nanoId = require("nanoid").nanoid;
const config = require("./config");
const M3OClient = require("./m3oClient");

const {port, accessKey} = config;
const client = new M3OClient({token: accessKey});

app.post('/candidate/create', async (request, reply) => {
  try{
    const response = await client.call('db', 'Create', {
      "record": {
        id: nanoId(),
        ...request.body
      },
      "table": "candidate"
    })
    return response.id;
  }catch(err){
      console.log(err);
      return err;
  }
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