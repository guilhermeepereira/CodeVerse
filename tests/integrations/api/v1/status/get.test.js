test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.update_at).toBeDefined();
  const parseUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toBe(parseUpdateAt);

  expect(responseBody.dependecies.database.version).toEqual("16.1");
  expect(responseBody.dependecies.database.max_connections).toEqual(100);
  expect(responseBody.dependecies.database.opened_connections).toEqual(1);
});
