// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from "../../utils"


// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const fetchLocation = async ({ ip }) => {
  try {
    const url = `/json${ip ? `?ip=${ip}` : ''}`
    const res = await request.get(url)
    console.log('in api::', res);
  } catch (error) {
    console.log(error)
  }
}
