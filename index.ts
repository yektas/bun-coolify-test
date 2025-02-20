const server = Bun.serve({
  port: 3005,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log("Logging COOLIFY env variables");
console.log(process.env.COOLIFY_FQDN);
console.log(process.env.COOLIFY_URL);
console.log(process.env.COOLIFY_BRANCH);
console.log(process.env.COOLIFY_RESOURCE_UUID);
console.log(process.env.COOLIFY_CONTAINER_NAME);
console.log(process.env.SOURCE_COMMIT);
console.log(process.env.COOLIFY_URL);

console.log(`Listening on http://localhost:${server.port} ...`);
