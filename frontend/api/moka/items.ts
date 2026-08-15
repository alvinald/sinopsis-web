export default async function handler(req: Request) {
  const response = await fetch(
    'https://api.mokapos.com/v1/outlets/1131561/items?mobile_device=50&page=1&per_page=100&since=&until=&include_deleted=false',
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.MOKA_TOKEN}`,
      },
    }
  )

  const data = await response.json()

  return Response.json(data, {
    status: response.status,
  })
}