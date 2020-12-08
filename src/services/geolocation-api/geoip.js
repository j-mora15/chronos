import axios from 'axios'
import APIKEY from '../../geolocation-api-conf.js'

export const geoip = async (ip = null) => {
  const geoapi = `https://geolocation-db.com/json/${APIKEY}`
  const url = ip !== null ? `${geoapi}/${ip}` : `${geoapi}`
  let response = null

  try {
    response = await axios.get(url)
    console.log('info sucess')
  } catch (e) {
    console.error(e)
  }

  return response
}

export default geoip
