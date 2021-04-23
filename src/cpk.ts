import { ethers, providers } from 'ethers'
import CPK, { EthersAdapter } from 'contract-proxy-kit'

export const getCpk = async () => {
  const { ethereum } = window

  const provider = new providers.Web3Provider(
    ethereum as providers.ExternalProvider,
  )

  await ethereum?.request?.({ method: 'eth_requestAccounts' })

  const signer: providers.JsonRpcSigner = provider.getSigner()

  if (signer) {
    return CPK.create({
      ethLibAdapter: new EthersAdapter({
        ethers,
        signer,
      }),
    })
  }

  return null
}
