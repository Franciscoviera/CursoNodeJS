import net from 'node:net' // usa net para evitar agregar cosas innecesarias con http, mas liviano

export function encontrarPuertoDisponible(puertoDeseado) {
  return new Promise((resolve, reject) => {
    const servidor = net.createServer()

    servidor.listen(puertoDeseado, () => {
      const { port } = servidor.address() //addres devuelve un objeto con mas informacion y yo solo quiero el numero de puerto, por eso desestructuro usando port
      servidor.close(() => {
        resolve(port) //cierra el servidor q era solo para probar q este disponible y devuelve el puerto
      })
    })

    servidor.on('error', (err) => {
      if (err.code === "EADDRINUSE") {
        encontrarPuertoDisponible(0).then(puerto => resolve(puerto)) //si el puerto deseado estaba ocupado atrapa el error y vuelve a llamar a la funcion con 0 para que asigne cualquiera que este libre
      } else {
        reject(err)
      }
    })
  })
}

export function encontrarPuertoDisponibleAsync(puertoDeseado) {
  return new Promise((resolve, reject) => {
    const servidor = net.createServer()

    servidor.listen(puertoDeseado, () => {
      const { port } = servidor.address() //address devuelve un objeto con mas informacion y yo solo quiero el numero de puerto, por eso desestructuro usando port
      servidor.close(() => {
        resolve(port) //cierra el servidor q era solo para probar q este disponible y devuelve el puerto
      })
    })

    servidor.on('error', (err) => {
      if (err.code === "EADDRINUSE") {
        return encontrarPuertoDisponibleAsync(0).then(puerto => resolve(puerto)) //si el puerto deseado estaba ocupado atrapa el error y vuelve a llamar a la funcion con 0 para que asigne cualquiera que este libre
      } else {
        reject(err)
      }
    })
  })
}

