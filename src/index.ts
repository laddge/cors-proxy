import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(
  '/',
  cors({
    origin: (origin) => (origin.endsWith('.laddge.net') ? origin : 'null')
  })
)

app.get('/', async (c) => {
  return await fetch(c.req.query('url'))
})

export default app
