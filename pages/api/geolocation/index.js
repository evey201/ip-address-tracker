import fetchData from "../../../utils/fetch"


export default async function handler({ query: { ip } }, res) {
  const geolocation = await fetchData(
    `https://ifconfig.co/json${ip ? `?ip=${ip}` : ''}`
  )
  console.log('in geolocation:: ', geolocation)
  return res.status(200).json(geolocation)
}
