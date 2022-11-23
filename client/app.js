const GRAPHQL_URL = 'http://localhost:9000/';

const fetchGreeting = async () => {
  const response = await fetch(
    GRAPHQL_URL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            greeting
            }
          `,
      }),
    },
  );
  const { data, errors } = await response.json();
  if (errors) {
    console.error(errors);
  }
  return data;
}

const element = document.getElementById('greeting');
element.textContent = 'Loading...';

fetchGreeting().then(({ greeting }) => {
  element.textContent = greeting;
}).catch((error) => {
  element.textContent = 'Error loading greeting :(';
  console.error(error);
});
