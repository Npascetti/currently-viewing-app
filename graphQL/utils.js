
import crypto from 'crypto'
import fs from 'fs'

const utils = {

  insert(ip_address) {
    try {

      const id = crypto.randomBytes(10).toString('hex')
      const time = (new Date).toISOString()
      const file = `${process.cwd()}/db.json`

      const content = [
        ...this.getAllrecords(),
        { id, time, ip_address }
      ]

      fs.writeFileSync(file, JSON.stringify(content, null, 2), 'utf8')

      return true
      
    } catch(err) {
      return false
    }
  },

  delete(ip_address) {
    try {

      const file    = `${process.cwd()}/db.json`
      const content = this.filter(ip_address)

      fs.writeFileSync(file, JSON.stringify(content, null, 2), 'utf8')

      return true      
    } catch(err) {
      return false
    }
  },

  getAllrecords() {
  	try {
  		return JSON.parse(fs.readFileSync(`${process.cwd()}/db.json`, 'utf8'))
  	} catch(err) {
  		return []
  	}
  }, 

  filter(ip_address) {
    return this.getAllrecords().filter(record => record.ip_address !== ip_address)
  }, 

  exist(ip) {
  	return this.getAllrecords().find(({ ip_address }) => ip_address === ip)
  }
}


export default utils