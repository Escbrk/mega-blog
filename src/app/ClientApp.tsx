const payload = JSON.stringify({
  c: 'hello',
  clientId: '7qGfg3jWE9',
  referer: '',
  Pc: 'BPVn7op71cieOFUno/7Hz8t5tQcrDH4IWgtEYL7y8rnxGR3kzfY50uqeyLiEGyW8xvU5dnUDqCf+s6/sCpGJPgE=',
});

const getJar = () => {
  return fetch('https://send.monobank.ua/api/handler', {
    method: 'POST',
    body: payload,
  }).then((x) => x.json());
};


export async function HomePage() {
  //   const response = await (
  //     await fetch('https://send.monobank.ua/jar/7qGfg3jWE9')
  //   ).text();

  const response = await getJar();

  console.log(response);


  return <h2>Its a HomePage</h2>;
}
