const metrics = {
    cpu: {
      temp: number,
      isMining: boolean,
      currentAlgorithm: string,
      mode: string // is the CPU using a minimum of electricity? (throttling / power-save mode)
    },
    gpu: [
      {
        name: string,
        temp: number,
        isMining: boolean,
        currentAlgorithm: ?string,
      }
    ],
    uptime: string,
    caseTemperature: number,
    free: {
      memory: string,
      disk: string,
    }
}
