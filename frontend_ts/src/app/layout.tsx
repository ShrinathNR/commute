import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Wallet } from './Wallet'
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wallet>
          <h1 className='text-2xl'>market place</h1>
          {children}
        </Wallet>
        </body>
    </html>
  )
}
