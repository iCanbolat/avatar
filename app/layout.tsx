'use client'
import './globals.css'

import { PropsWithChildren } from 'react'
import { lightTheme } from './theme/themes'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import Header from './components/Header'


export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang='en'>
      <head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body id='__next'>
        <CssBaseline />
        <Header />
        {children}
      </body>
    </html>
  )
}
