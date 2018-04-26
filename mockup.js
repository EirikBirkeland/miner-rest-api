const metrics = {
    cpu: {
      temp: number,
      isMining: boolean,
      currentAlgorithm: string,
      mode: string // is it using a minimum of electricity? (throttling)
    },
    gpu: [
      {
        name: string,
        temp: number,
        isMining: boolean,
        currentAlgorithm: string,
      }
    ],
    uptime: string,
    caseTemperature: number,
    free: {
      memory: string,
      disk: string,
    }
}
