import { ethers } from 'ethers'

interface Yoti {
  destroy: () => void
}
declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider & {
      selectedAddress?: string | null
      enable: () => string[]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      on: (event: string, callback: (...args: any[]) => void) => void
      isConnected: () => boolean
    }
  }
}
