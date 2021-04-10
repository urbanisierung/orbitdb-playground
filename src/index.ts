import IPFS from 'ipfs'
import OrbitDB from 'orbit-db'

async function main() {
  // Create IPFS instance
  const ipfsOptions = { repo: './ipfs' }
  const ipfs = await IPFS.create(ipfsOptions)

  // Create OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs)

  // Create database instance
  // eslint-disable-next-line id-length
  const db = await orbitdb.keyvalue('first-database')

  const address = db.address
  console.log(address)

  await db.put('name', 'hello')
  const value = await db.get('name')
  console.log(value)
}
main()
