import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!')
});

app.post('/api/v1/signup', (c) => {
    return c.text("Signup Route");
});

app.post('/api/v1/signin', (c) => {
    return c.text("Signin Route");
});

app.get('api/v1/blog/:id', (c) => {
    const id = c.req.param('id');
    console.log(id);
    return c.text("Get blog route");
});

app.post('api/v1/blog', (c) => {
    return c.text("Sign In route");
});

app.put('/api/v1/blog', (c) => {
    return c.text("Signin route");
});

export default app
