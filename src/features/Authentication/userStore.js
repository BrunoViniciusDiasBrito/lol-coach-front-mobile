import { create } from 'zustand'

const userStore = create((set) => ({
  riotId: '',
  tagline: '',
  gameName: '',
  userName: '',
  email: ''
}))