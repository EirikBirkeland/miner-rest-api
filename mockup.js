const metrics = {
    cpu: {
      temp: number,
      isMining: boolean,
      currentAlgorithm: string,
      /** is the CPU using a minimum of electricity? (throttling / power-save mode) */
      mode: string
    },
    gpu: [
      {
        name: string,
        temp: number,
        isMining: boolean,
        currentAlgorithm: ?string,
      }
    ],
    /** system uptime */
    uptime: string,
    caseTemperature: number,
    free: {
      memory: string,
      disk: string,
    }
}
