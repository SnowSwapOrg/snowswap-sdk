import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 44,
  TESTNET = 256,
  DARWINIA = 46,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x36ABF1A7851fBF9ae9D79dc3E39C1227068158B3',
  [ChainId.TESTNET]: '0x36ABF1A7851fBF9ae9D79dc3E39C1227068158B3',
  [ChainId.DARWINIA]: '0x5669a449D892f03B4c541A321926f18e272c64A2',
}

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x2a3eebed007578fadb94fc416a8002f6bcef7ee2aae9680a5616e2fb4e407a51',
  [ChainId.TESTNET]: '0x2a3eebed007578fadb94fc416a8002f6bcef7ee2aae9680a5616e2fb4e407a51',
  [ChainId.DARWINIA]: '0x14ec7cfedb33feaea422f80584a6907c850fbd72f4c3d01995ea175ed4b2ed67'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
