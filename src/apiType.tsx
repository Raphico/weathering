type Api = {
  coord: Object,
  base: String, 
  main: {
    temp: number,
    humidity: Number,
    pressure: Number
  }, 
  visibility: Number,
  clouds: Object,
  cod: Number,
  dt: Number,
  id: Number,
  name: String,
  sys: Object,
  timezone: Number,
  weather: [
    {
      description: String,
      id: Number,
      main: String
    }
  ],
  wind: {
    speed: Number, 
    deg: Number
  }
}

export default Api;