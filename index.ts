const numArray: number[] = [1, 2, 3, 4, 5]
const numArray2: Array<number> = [1, 2, 3, 4, 5]
const words: string[] = ['1', '2']
let variable: any = 42

const contact: [string, number] = ['Alex', 22]

const func = (name: string): string => {
  return name
}

type Login = string
const login: Login = 'Admin'

type ID = string | number
const id: ID = 2

type SomeType = string | null | undefined

interface User {
  readonly id: number
  name?: string
  age: number
  friends: string[]
}

const user: User = {
  id: 22,
  name: 'Alex',
  age: 22,
  friends: ['Alex', 'Joe']
}

const user2 = {} as User

interface UserAdmin extends User {
  isAdmin: boolean
  getId: () => number
}

const userAdmin: UserAdmin = {
  id: 22,
  isAdmin: true,
  age: 24,
  friends: [],
  getId(): number {
    return this.id
  }
}

interface Clock {
  time: Date
  getTime(): Date
}

class Clock2 implements Clock {
  time = new Date()

  getTime(): Date {
    return this.time
  }
}

const clock = new Clock2()

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid #000',
  color: 'red',
  margin: '10px'
}

enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[Membership.Standart]

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const instagram = SocialMedia.INSTAGRAM

const add = (a: number, b: number): number => a + b
const toUpperCase = (str: string): string => str.trim().toUpperCase()

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

const position = (): MyPosition => {
  return {
    x: 1,
    y: 2
  }
}

class Good {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }
class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {}
}

class Animal {
  protected voice = 'da'
  private color = 'black'
  // По умолчанию все свойства public

  go(): void {
    console.log(this.color)
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}

class MyResponse {
  header: 'response header'
  result: 'response result'
}

class MyError {
  header: 'error header'
  message: 'error result'
}

const handle = (res: MyResponse | MyError): object => {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  }
  return {
    info: res.header + res.message
  }
}

type AlertType = 'succsess' | 'danger' | 'warning'

const setAlertType = (type: AlertType): string => 'Hello'

setAlertType('succsess')
setAlertType('danger')
// setAlertType('some')

const arrayOgNumbers: number[] = [1, 1, 2, 3, 5]

const reverse = <T>(array: T[]): T[] => array

interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

const myName: PersonKeys = 'name'

type Test = {
  _id: number
  name: string
  email: string
}

// type TestKeysNoMeta = Exclude<keyof Test, '_id' | 'email'>
// type TestKeysNoMeta2 = Pick<Test, 'name' | 'email'>
