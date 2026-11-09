import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'EA Sports FC 26',
    genre: 'Sport',
    platform: 'PS5',
    price: 70,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500',
  },
  {
    id: 2,
    title: 'Call of Duty',
    genre: 'Shooter',
    platform: 'PC',
    price: 60,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500',
  },
  {
    id: 3,
    title: 'Minecraft',
    genre: 'Sandbox',
    platform: 'PC',
    price: 30,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500',
  },
  {
    id: 4,
    title: 'GTA V',
    genre: 'Action',
    platform: 'Xbox',
    price: 40,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500',
  },
]

const gamesSlice = createSlice({
  name: 'games',
  initialState: initialState,
  reducers: {
    addGame: (state, action) => {
      state.push(action.payload)
    },
    deleteGame: (state, action) => {
      return state.filter((game) => game.id !== action.payload)
    },
    updateGame: (state, action) => {
      const index = state.findIndex((game) => game.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
  },
})

export const { addGame, deleteGame, updateGame } = gamesSlice.actions
export default gamesSlice.reducer
