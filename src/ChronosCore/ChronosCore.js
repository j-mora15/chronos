// Chronos Core Class
class Chronos {
  constructor (lang = undefined) {
    // Defined Language
    this.default_language = lang === undefined ? 'es' : lang
    // Lenguajes / Languages
    this.languages = ['es', 'en']
    // Configuracion / Configuration
    this.config = {
      // Configuracion en Español
      es: {
        d: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miercoles',
          'Jueves',
          'Viernes',
          'Sabado'
        ],
        m: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ]
      },
      // English Config
      en: {
        d: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        m: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
      }
    }
    // Constantes / Constants
    this.constNum = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
  }

  _LogConfig () {
    console.log(this.default_language)
    console.log(this.languages)
    console.log(this.config)
    console.log(this.constNum)
    console.log(this.config[this.default_language])
  }

  day () {
    const time = new Date()
    return this.config[this.default_language].d[time.getDay()]
  }

  numberDay () {
    const time = new Date()
    return time.getDate()
  }

  month () {
    const time = new Date()
    return this.config[this.default_language].m[time.getMonth()]
  }

  year () {
    const time = new Date()
    return time.getFullYear()
  }

  hour () {
    const time = new Date()
    return time.getHours() > 12
      ? time.getHours() - 12
      : time.getHours() === 0
        ? 12
        : time.getHours()
  }

  min () {
    const time = new Date()
    return time.getMinutes() < this.constNum.length
      ? this.constNum[time.getMinutes()]
      : time.getMinutes()
  }

  sec () {
    const time = new Date()
    return time.getSeconds() < this.constNum.length
      ? this.constNum[time.getSeconds()]
      : time.getSeconds()
  }

  meridiem () {
    const time = new Date()
    return time.getHours() < 12 ? 'Ante Meridiem' : 'Post Meridiem'
  }
}

export default Chronos
