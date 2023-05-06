import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'edb232aaadmsh16e0d11b0f79242p143fe9jsnd5d953b55740',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
}

fetch(
  'https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'edb232aaadmsh16e0d11b0f79242p143fe9jsnd5d953b55740'
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getRecSong: builder.query({
      query: () => '/songs/list-recommendations?key=484129036',
      transformResponse: (response) => response.tracks,
    }),
  }),
})

export const { useGetRecSongQuery } = shazamCoreApi
