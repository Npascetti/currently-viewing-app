
import fs from 'fs'
import crypto from 'crypto'
import utils from './utils'

const methods = {
  mutateRecord({ input: { ip_address, remove } }) {

    if (remove && utils.exist(ip_address))
      utils.delete(ip_address)

    if (!remove && !utils.exist(ip_address))
      utils.insert(ip_address)

    return { mutated: true }
  },

  records() {
    return utils.getAllrecords()
  }
}


export default methods