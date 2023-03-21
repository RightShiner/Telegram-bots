import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { UniswapV3CeloTypes } from './sources/uniswap-v3-celo/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
};
export type Account = {
    /**  { Account address }  */
    id: Scalars['Bytes'];
    /**  Number of positions this account has  */
    positionCount: Scalars['Int'];
    /**  All positions that belong to this account  */
    positions: Array<Position>;
    /**  Number of open positions this account has  */
    openPositionCount: Scalars['Int'];
    /**  Number of closed positions this account has  */
    closedPositionCount: Scalars['Int'];
    /**  Number of deposits this account made  */
    depositCount: Scalars['Int'];
    /**  All deposit events of this account  */
    deposits: Array<Deposit>;
    /**  Number of withdrawals this account made  */
    withdrawCount: Scalars['Int'];
    /**  All withdraw events of this account  */
    withdraws: Array<Withdraw>;
    /**  Number of times this account has traded/swapped */
    swapCount: Scalars['Int'];
    /**  All swap events of this account  */
    swaps: Array<Swap>;
    _newUser?: Maybe<Scalars['Boolean']>;
};
export type AccountpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
};
export type AccountdepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Deposit_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Deposit_filter>;
};
export type AccountwithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Withdraw_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Withdraw_filter>;
};
export type AccountswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Swap_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Swap_filter>;
};
export type Account_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    positionCount?: InputMaybe<Scalars['Int']>;
    positionCount_not?: InputMaybe<Scalars['Int']>;
    positionCount_gt?: InputMaybe<Scalars['Int']>;
    positionCount_lt?: InputMaybe<Scalars['Int']>;
    positionCount_gte?: InputMaybe<Scalars['Int']>;
    positionCount_lte?: InputMaybe<Scalars['Int']>;
    positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    positions_?: InputMaybe<Position_filter>;
    openPositionCount?: InputMaybe<Scalars['Int']>;
    openPositionCount_not?: InputMaybe<Scalars['Int']>;
    openPositionCount_gt?: InputMaybe<Scalars['Int']>;
    openPositionCount_lt?: InputMaybe<Scalars['Int']>;
    openPositionCount_gte?: InputMaybe<Scalars['Int']>;
    openPositionCount_lte?: InputMaybe<Scalars['Int']>;
    openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount?: InputMaybe<Scalars['Int']>;
    closedPositionCount_not?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    depositCount?: InputMaybe<Scalars['Int']>;
    depositCount_not?: InputMaybe<Scalars['Int']>;
    depositCount_gt?: InputMaybe<Scalars['Int']>;
    depositCount_lt?: InputMaybe<Scalars['Int']>;
    depositCount_gte?: InputMaybe<Scalars['Int']>;
    depositCount_lte?: InputMaybe<Scalars['Int']>;
    depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    deposits_?: InputMaybe<Deposit_filter>;
    withdrawCount?: InputMaybe<Scalars['Int']>;
    withdrawCount_not?: InputMaybe<Scalars['Int']>;
    withdrawCount_gt?: InputMaybe<Scalars['Int']>;
    withdrawCount_lt?: InputMaybe<Scalars['Int']>;
    withdrawCount_gte?: InputMaybe<Scalars['Int']>;
    withdrawCount_lte?: InputMaybe<Scalars['Int']>;
    withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    withdraws_?: InputMaybe<Withdraw_filter>;
    swapCount?: InputMaybe<Scalars['Int']>;
    swapCount_not?: InputMaybe<Scalars['Int']>;
    swapCount_gt?: InputMaybe<Scalars['Int']>;
    swapCount_lt?: InputMaybe<Scalars['Int']>;
    swapCount_gte?: InputMaybe<Scalars['Int']>;
    swapCount_lte?: InputMaybe<Scalars['Int']>;
    swapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    swapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    swaps_?: InputMaybe<Swap_filter>;
    _newUser?: InputMaybe<Scalars['Boolean']>;
    _newUser_not?: InputMaybe<Scalars['Boolean']>;
    _newUser_in?: InputMaybe<Array<Scalars['Boolean']>>;
    _newUser_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};
export type Account_orderBy = 'id' | 'positionCount' | 'positions' | 'openPositionCount' | 'closedPositionCount' | 'depositCount' | 'deposits' | 'withdrawCount' | 'withdraws' | 'swapCount' | 'swaps' | '_newUser';
export type ActiveAccount = {
    /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
    id: Scalars['Bytes'];
};
export type ActiveAccount_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ActiveAccount_filter>>>;
    or?: InputMaybe<Array<InputMaybe<ActiveAccount_filter>>>;
};
export type ActiveAccount_orderBy = 'id';
export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};
export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};
/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Deposit = {
    /**  { Transaction hash }-{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
    /**  Nonce of the transaction that emitted this event  */
    nonce: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  Gas limit of the transaction that emitted this event  */
    gasLimit?: Maybe<Scalars['BigInt']>;
    /**  Gas used in this transaction. (Optional because not every chain will support this)  */
    gasUsed?: Maybe<Scalars['BigInt']>;
    /**  Gas price of the transaction that emitted this event  */
    gasPrice?: Maybe<Scalars['BigInt']>;
    /**  The protocol this transaction belongs to  */
    protocol: DexAmmProtocol;
    /**  Account that emitted this event  */
    account: Account;
    /**  The user position changed by this event  */
    position?: Maybe<Position>;
    /**  The pool involving this event  */
    pool: LiquidityPool;
    /**  lower tick of position  */
    tickLower?: Maybe<Scalars['BigInt']>;
    /**  upper tick of position  */
    tickUpper?: Maybe<Scalars['BigInt']>;
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  Amount of liquidity minted  */
    liquidity: Scalars['BigInt'];
    /**  Input tokens of the pool. E.g. WETH and USDC to a WETH-USDC pool  */
    inputTokens: Array<Token>;
    /**  Amount of input tokens in the token's native unit  */
    inputTokenAmounts: Array<Scalars['BigInt']>;
    /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens deposited into a pool)  */
    amountUSD: Scalars['BigDecimal'];
};
/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type DepositinputTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
};
export type Deposit_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
    nonce?: InputMaybe<Scalars['BigInt']>;
    nonce_not?: InputMaybe<Scalars['BigInt']>;
    nonce_gt?: InputMaybe<Scalars['BigInt']>;
    nonce_lt?: InputMaybe<Scalars['BigInt']>;
    nonce_gte?: InputMaybe<Scalars['BigInt']>;
    nonce_lte?: InputMaybe<Scalars['BigInt']>;
    nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
    nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    gasLimit?: InputMaybe<Scalars['BigInt']>;
    gasLimit_not?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed?: InputMaybe<Scalars['BigInt']>;
    gasUsed_not?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice?: InputMaybe<Scalars['BigInt']>;
    gasPrice_not?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<Account_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    tickLower?: InputMaybe<Scalars['BigInt']>;
    tickLower_not?: InputMaybe<Scalars['BigInt']>;
    tickLower_gt?: InputMaybe<Scalars['BigInt']>;
    tickLower_lt?: InputMaybe<Scalars['BigInt']>;
    tickLower_gte?: InputMaybe<Scalars['BigInt']>;
    tickLower_lte?: InputMaybe<Scalars['BigInt']>;
    tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tickUpper?: InputMaybe<Scalars['BigInt']>;
    tickUpper_not?: InputMaybe<Scalars['BigInt']>;
    tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
    tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
    tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
    tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
    tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidity?: InputMaybe<Scalars['BigInt']>;
    liquidity_not?: InputMaybe<Scalars['BigInt']>;
    liquidity_gt?: InputMaybe<Scalars['BigInt']>;
    liquidity_lt?: InputMaybe<Scalars['BigInt']>;
    liquidity_gte?: InputMaybe<Scalars['BigInt']>;
    liquidity_lte?: InputMaybe<Scalars['BigInt']>;
    liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokens?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_?: InputMaybe<Token_filter>;
    inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUSD?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
};
export type Deposit_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasLimit' | 'gasUsed' | 'gasPrice' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__swapCount' | 'account___newUser' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__liquidityTokenType' | 'position__liquidity' | 'position__liquidityUSD' | 'position__cumulativeDepositUSD' | 'position__cumulativeWithdrawUSD' | 'position__depositCount' | 'position__withdrawCount' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'tickLower' | 'tickUpper' | 'blockNumber' | 'timestamp' | 'liquidity' | 'inputTokens' | 'inputTokenAmounts' | 'amountUSD';
export type DexAmmProtocol = Protocol & {
    /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
    id: Scalars['Bytes'];
    /**  Name of the protocol, including version. e.g. Uniswap v3  */
    name: Scalars['String'];
    /**  Slug of protocol, including version. e.g. uniswap-v3  */
    slug: Scalars['String'];
    /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
    schemaVersion: Scalars['String'];
    /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
    subgraphVersion: Scalars['String'];
    /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
    methodologyVersion: Scalars['String'];
    /**  The blockchain network this subgraph is indexing on  */
    network: Network;
    /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
    type: ProtocolType;
    /**  Current TVL (Total Value Locked) of the entire protocol  */
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  The sum of all active and non-active liquidity in USD for this pool.  */
    totalLiquidityUSD: Scalars['BigDecimal'];
    /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidityUSD: Scalars['BigDecimal'];
    /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
    uncollectedProtocolSideValueUSD: Scalars['BigDecimal'];
    /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
    uncollectedSupplySideValueUSD: Scalars['BigDecimal'];
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
    /**  All historical volume in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal'];
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  Number of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int'];
    /**  Number of cumulative liquidity providers  */
    cumulativeUniqueLPs: Scalars['Int'];
    /**  Number of cumulative traders  */
    cumulativeUniqueTraders: Scalars['Int'];
    /**  Total number of pools  */
    totalPoolCount: Scalars['Int'];
    /**  Total number of open positions  */
    openPositionCount: Scalars['Int'];
    /**  Total number of positions (open and closed)  */
    cumulativePositionCount: Scalars['Int'];
    /**  Day ID of the most recent daily snapshot  */
    lastSnapshotDayID: Scalars['Int'];
    /**  Timestamp of the last time this entity was updated  */
    lastUpdateTimestamp: Scalars['BigInt'];
    /**  Block number of the last time this entity was updated  */
    lastUpdateBlockNumber: Scalars['BigInt'];
    /**  Daily usage metrics for this protocol  */
    dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
    /**  Hourly usage metrics for this protocol  */
    hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
    /**  Daily financial metrics for this protocol  */
    financialMetrics: Array<FinancialsDailySnapshot>;
    /**  All pools that belong to this protocol  */
    pools: Array<LiquidityPool>;
    /**  This is a boolean to indicate whether or not the pools have been instantiated the were initialized before Optimism regenesis  */
    _regenesis: Scalars['Boolean'];
};
export type DexAmmProtocoldailyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};
export type DexAmmProtocolhourlyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};
export type DexAmmProtocolfinancialMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<FinancialsDailySnapshot_filter>;
};
export type DexAmmProtocolpoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPool_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPool_filter>;
};
export type DexAmmProtocol_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    name?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    slug_not?: InputMaybe<Scalars['String']>;
    slug_gt?: InputMaybe<Scalars['String']>;
    slug_lt?: InputMaybe<Scalars['String']>;
    slug_gte?: InputMaybe<Scalars['String']>;
    slug_lte?: InputMaybe<Scalars['String']>;
    slug_in?: InputMaybe<Array<Scalars['String']>>;
    slug_not_in?: InputMaybe<Array<Scalars['String']>>;
    slug_contains?: InputMaybe<Scalars['String']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']>;
    slug_not_contains?: InputMaybe<Scalars['String']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
    slug_starts_with?: InputMaybe<Scalars['String']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
    slug_not_starts_with?: InputMaybe<Scalars['String']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    slug_ends_with?: InputMaybe<Scalars['String']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion?: InputMaybe<Scalars['String']>;
    schemaVersion_not?: InputMaybe<Scalars['String']>;
    schemaVersion_gt?: InputMaybe<Scalars['String']>;
    schemaVersion_lt?: InputMaybe<Scalars['String']>;
    schemaVersion_gte?: InputMaybe<Scalars['String']>;
    schemaVersion_lte?: InputMaybe<Scalars['String']>;
    schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
    schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    schemaVersion_contains?: InputMaybe<Scalars['String']>;
    schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
    schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
    schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
    schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion?: InputMaybe<Scalars['String']>;
    subgraphVersion_not?: InputMaybe<Scalars['String']>;
    subgraphVersion_gt?: InputMaybe<Scalars['String']>;
    subgraphVersion_lt?: InputMaybe<Scalars['String']>;
    subgraphVersion_gte?: InputMaybe<Scalars['String']>;
    subgraphVersion_lte?: InputMaybe<Scalars['String']>;
    subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
    subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    subgraphVersion_contains?: InputMaybe<Scalars['String']>;
    subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion?: InputMaybe<Scalars['String']>;
    methodologyVersion_not?: InputMaybe<Scalars['String']>;
    methodologyVersion_gt?: InputMaybe<Scalars['String']>;
    methodologyVersion_lt?: InputMaybe<Scalars['String']>;
    methodologyVersion_gte?: InputMaybe<Scalars['String']>;
    methodologyVersion_lte?: InputMaybe<Scalars['String']>;
    methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
    methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    methodologyVersion_contains?: InputMaybe<Scalars['String']>;
    methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    network?: InputMaybe<Network>;
    network_not?: InputMaybe<Network>;
    network_in?: InputMaybe<Array<Network>>;
    network_not_in?: InputMaybe<Array<Network>>;
    type?: InputMaybe<ProtocolType>;
    type_not?: InputMaybe<ProtocolType>;
    type_in?: InputMaybe<Array<ProtocolType>>;
    type_not_in?: InputMaybe<Array<ProtocolType>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValueUSD?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValueUSD?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueLPs?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueLPs_not?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueLPs_gt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueLPs_lt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueLPs_gte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueLPs_lte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueLPs_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueLPs_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueTraders?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueTraders_not?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueTraders_gt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueTraders_lt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueTraders_gte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueTraders_lte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueTraders_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueTraders_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPoolCount?: InputMaybe<Scalars['Int']>;
    totalPoolCount_not?: InputMaybe<Scalars['Int']>;
    totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
    totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
    totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
    totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
    totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount?: InputMaybe<Scalars['Int']>;
    openPositionCount_not?: InputMaybe<Scalars['Int']>;
    openPositionCount_gt?: InputMaybe<Scalars['Int']>;
    openPositionCount_lt?: InputMaybe<Scalars['Int']>;
    openPositionCount_gte?: InputMaybe<Scalars['Int']>;
    openPositionCount_lte?: InputMaybe<Scalars['Int']>;
    openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativePositionCount?: InputMaybe<Scalars['Int']>;
    cumulativePositionCount_not?: InputMaybe<Scalars['Int']>;
    cumulativePositionCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativePositionCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativePositionCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativePositionCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativePositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativePositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotDayID?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_not?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>;
    hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
    financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>;
    pools_?: InputMaybe<LiquidityPool_filter>;
    _regenesis?: InputMaybe<Scalars['Boolean']>;
    _regenesis_not?: InputMaybe<Scalars['Boolean']>;
    _regenesis_in?: InputMaybe<Array<Scalars['Boolean']>>;
    _regenesis_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DexAmmProtocol_filter>>>;
    or?: InputMaybe<Array<InputMaybe<DexAmmProtocol_filter>>>;
};
export type DexAmmProtocol_orderBy = 'id' | 'name' | 'slug' | 'schemaVersion' | 'subgraphVersion' | 'methodologyVersion' | 'network' | 'type' | 'totalValueLockedUSD' | 'totalLiquidityUSD' | 'activeLiquidityUSD' | 'uncollectedProtocolSideValueUSD' | 'uncollectedSupplySideValueUSD' | 'protocolControlledValueUSD' | 'cumulativeVolumeUSD' | 'cumulativeSupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'cumulativeUniqueUsers' | 'cumulativeUniqueLPs' | 'cumulativeUniqueTraders' | 'totalPoolCount' | 'openPositionCount' | 'cumulativePositionCount' | 'lastSnapshotDayID' | 'lastUpdateTimestamp' | 'lastUpdateBlockNumber' | 'dailyUsageMetrics' | 'hourlyUsageMetrics' | 'financialMetrics' | 'pools' | '_regenesis';
export type FinancialsDailySnapshot = {
    /**  ID is # of days since Unix epoch time  */
    id: Scalars['Bytes'];
    /**  Number of days since Unix epoch time  */
    day: Scalars['Int'];
    /**  Protocol this snapshot is associated with  */
    protocol: DexAmmProtocol;
    /**  Current TVL (Total Value Locked) of the entire protocol  */
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  The sum of all active and non-active liquidity in USD for this pool.  */
    totalLiquidityUSD: Scalars['BigDecimal'];
    /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidityUSD: Scalars['BigDecimal'];
    /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
    uncollectedProtocolSideValueUSD: Scalars['BigDecimal'];
    /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
    uncollectedSupplySideValueUSD: Scalars['BigDecimal'];
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
    /**  All trade volume occurred in a given day, in USD  */
    dailyVolumeUSD: Scalars['BigDecimal'];
    /**  All historical trade volume in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal'];
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    dailySupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    dailyTotalRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    timestamp: Scalars['BigInt'];
    /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    blockNumber: Scalars['BigInt'];
};
export type FinancialsDailySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['Int']>;
    day_not?: InputMaybe<Scalars['Int']>;
    day_gt?: InputMaybe<Scalars['Int']>;
    day_lt?: InputMaybe<Scalars['Int']>;
    day_gte?: InputMaybe<Scalars['Int']>;
    day_lte?: InputMaybe<Scalars['Int']>;
    day_in?: InputMaybe<Array<Scalars['Int']>>;
    day_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValueUSD?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedProtocolSideValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValueUSD?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    uncollectedSupplySideValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
};
export type FinancialsDailySnapshot_orderBy = 'id' | 'day' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'totalValueLockedUSD' | 'totalLiquidityUSD' | 'activeLiquidityUSD' | 'uncollectedProtocolSideValueUSD' | 'uncollectedSupplySideValueUSD' | 'protocolControlledValueUSD' | 'dailyVolumeUSD' | 'cumulativeVolumeUSD' | 'dailySupplySideRevenueUSD' | 'cumulativeSupplySideRevenueUSD' | 'dailyProtocolSideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'dailyTotalRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'timestamp' | 'blockNumber';
export type LiquidityPool = {
    /**  Smart contract address of the pool  */
    id: Scalars['Bytes'];
    /**  The protocol this pool belongs to  */
    protocol: DexAmmProtocol;
    /**  Name of liquidity pool (e.g. Curve.fi DAI/USDC/USDT)  */
    name?: Maybe<Scalars['String']>;
    /**  Symbol of liquidity pool (e.g. 3CRV)  */
    symbol?: Maybe<Scalars['String']>;
    /**  Token that is to represent ownership of liquidity  */
    liquidityToken?: Maybe<Token>;
    /**  Type of token used to track liquidity  */
    liquidityTokenType?: Maybe<TokenType>;
    /**  Tokens that need to be deposited to take a position in protocol. e.g. WETH and USDC to deposit into the WETH-USDC pool. Array to account for multi-asset pools like Curve and Balancer  */
    inputTokens: Array<Token>;
    /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
    rewardTokens?: Maybe<Array<RewardToken>>;
    /**  Fees per trade incurred to the user. Should include all fees that apply to a pool (e.g. Curve has a trading fee AND an admin fee, which is a portion of the trading fee. Uniswap only has a trading fee and no protocol fee. )  */
    fees: Array<LiquidityPoolFee>;
    /**  Whether this pool is single-sided (e.g. Bancor, Platypus's Alternative Pool). The specifics of the implementation depends on the protocol.  */
    isSingleSided: Scalars['Boolean'];
    /**  Creation timestamp  */
    createdTimestamp: Scalars['BigInt'];
    /**  Creation block number  */
    createdBlockNumber: Scalars['BigInt'];
    /**  Current tick representing the price of token0/token1  */
    tick?: Maybe<Scalars['BigInt']>;
    /**  Current TVL (Total Value Locked) of this pool in USD  */
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  The sum of all active and non-active liquidity for this pool.  */
    totalLiquidity: Scalars['BigInt'];
    /**  The sum of all active and non-active liquidity in USD for this pool.  */
    totalLiquidityUSD: Scalars['BigDecimal'];
    /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidity: Scalars['BigInt'];
    /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidityUSD: Scalars['BigDecimal'];
    /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
    uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']>;
    /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
    uncollectedProtocolSideValuesUSD: Array<Scalars['BigDecimal']>;
    /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
    uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']>;
    /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
    uncollectedSupplySideValuesUSD: Array<Scalars['BigDecimal']>;
    /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the liquidity pool.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  All trade volume occurred for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
    cumulativeVolumeTokenAmounts: Array<Scalars['BigInt']>;
    /**  All trade volume occurred for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
    cumulativeVolumesUSD: Array<Scalars['BigDecimal']>;
    /**  All historical trade volume occurred in this pool, in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal'];
    /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalances: Array<Scalars['BigInt']>;
    /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalancesUSD: Array<Scalars['BigDecimal']>;
    /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
    inputTokenWeights: Array<Scalars['BigDecimal']>;
    /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
    /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  Total number of deposits (add liquidity)  */
    cumulativeDepositCount: Scalars['Int'];
    /**  Total number of withdrawals (remove liquidity)  */
    cumulativeWithdrawCount: Scalars['Int'];
    /**  Total number of trades (swaps)  */
    cumulativeSwapCount: Scalars['Int'];
    /**  All positions in this market  */
    positions: Array<Position>;
    /**  Number of positions in this market  */
    positionCount: Scalars['Int'];
    /**  Number of open positions in this market  */
    openPositionCount: Scalars['Int'];
    /**  Number of closed positions in this market  */
    closedPositionCount: Scalars['Int'];
    /**  Day ID of the most recent daily snapshot  */
    lastSnapshotDayID: Scalars['Int'];
    /**  Hour ID of the most recent hourly snapshot  */
    lastSnapshotHourID: Scalars['Int'];
    /**  Timestamp of the last time this entity was updated  */
    lastUpdateTimestamp: Scalars['BigInt'];
    /**  Block number of the last time this entity was updated  */
    lastUpdateBlockNumber: Scalars['BigInt'];
    /**  Liquidity pool daily snapshots  */
    dailySnapshots: Array<LiquidityPoolDailySnapshot>;
    /**  Liquidity pool hourly snapshots  */
    hourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
    /**  All deposit (add liquidity) events occurred in this pool  */
    deposits: Array<Deposit>;
    /**  All withdraw (remove liquidity) events occurred in this pool  */
    withdraws: Array<Withdraw>;
    /**  All trade (swap) events occurred in this pool  */
    swaps: Array<Swap>;
};
export type LiquidityPoolinputTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
};
export type LiquidityPoolrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RewardToken_filter>;
};
export type LiquidityPoolfeesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolFee_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolFee_filter>;
};
export type LiquidityPoolpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
};
export type LiquidityPooldailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
};
export type LiquidityPoolhourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
};
export type LiquidityPooldepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Deposit_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Deposit_filter>;
};
export type LiquidityPoolwithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Withdraw_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Withdraw_filter>;
};
export type LiquidityPoolswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Swap_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Swap_filter>;
};
export type LiquidityPoolDailySnapshot = {
    /**  { Smart contract address of the pool }-{ # of days since Unix epoch time }  */
    id: Scalars['Bytes'];
    /**  Number of days since Unix epoch time  */
    day: Scalars['Int'];
    /**  The protocol this snapshot belongs to  */
    protocol: DexAmmProtocol;
    /**  The pool this snapshot belongs to  */
    pool: LiquidityPool;
    /**  Current tick representing the price of token0/token1  */
    tick?: Maybe<Scalars['BigInt']>;
    /**  Current TVL (Total Value Locked) of this pool  */
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  The sum of all active and non-active liquidity for this pool.  */
    totalLiquidity: Scalars['BigInt'];
    /**  The sum of all active and non-active liquidity in USD for this pool.  */
    totalLiquidityUSD: Scalars['BigDecimal'];
    /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidity: Scalars['BigInt'];
    /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidityUSD: Scalars['BigDecimal'];
    /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
    uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']>;
    /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
    uncollectedProtocolSideValuesUSD: Array<Scalars['BigDecimal']>;
    /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
    uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']>;
    /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
    uncollectedSupplySideValuesUSD: Array<Scalars['BigDecimal']>;
    /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  Daily revenue generated by the liquidity pool, accrued to the supply side.  */
    dailySupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  Daily revenue generated by the liquidity pool, accrued to the protocol.  */
    dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the liquidity pool.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  Daily revenue generated by the liquidity pool.  */
    dailyTotalRevenueUSD: Scalars['BigDecimal'];
    /**  All historical trade volume occurred in this pool, in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal'];
    /**  All trade volume occurred in a given day, in USD  */
    dailyTotalVolumeUSD: Scalars['BigDecimal'];
    /**  All trade volume , in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
    cumulativeVolumeTokenAmounts: Array<Scalars['BigInt']>;
    /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
    dailyVolumeTokenAmounts: Array<Scalars['BigInt']>;
    /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
    cumulativeVolumesUSD: Array<Scalars['BigDecimal']>;
    /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
    dailyVolumesUSD: Array<Scalars['BigDecimal']>;
    /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalances: Array<Scalars['BigInt']>;
    /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalancesUSD: Array<Scalars['BigDecimal']>;
    /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
    inputTokenWeights: Array<Scalars['BigDecimal']>;
    /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
    /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  Total number of deposits (add liquidity)  */
    cumulativeDepositCount: Scalars['Int'];
    /**  Total number of deposits (add liquidity) in a day  */
    dailyDepositCount: Scalars['Int'];
    /**  Total number of withdrawals (remove liquidity)  */
    cumulativeWithdrawCount: Scalars['Int'];
    /**  Total number of withdrawals (remove liquidity) in a day  */
    dailyWithdrawCount: Scalars['Int'];
    /**  Total number of trades (swaps)  */
    cumulativeSwapCount: Scalars['Int'];
    /**  Total number of trades (swaps) in a day  */
    dailySwapCount: Scalars['Int'];
    /**  Number of positions in this market  */
    positionCount: Scalars['Int'];
    /**  Number of open positions in this market  */
    openPositionCount: Scalars['Int'];
    /**  Number of closed positions in this market  */
    closedPositionCount: Scalars['Int'];
    /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    timestamp: Scalars['BigInt'];
    /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    blockNumber: Scalars['BigInt'];
};
export type LiquidityPoolDailySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['Int']>;
    day_not?: InputMaybe<Scalars['Int']>;
    day_gt?: InputMaybe<Scalars['Int']>;
    day_lt?: InputMaybe<Scalars['Int']>;
    day_gte?: InputMaybe<Scalars['Int']>;
    day_lte?: InputMaybe<Scalars['Int']>;
    day_in?: InputMaybe<Array<Scalars['Int']>>;
    day_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    tick?: InputMaybe<Scalars['BigInt']>;
    tick_not?: InputMaybe<Scalars['BigInt']>;
    tick_gt?: InputMaybe<Scalars['BigInt']>;
    tick_lt?: InputMaybe<Scalars['BigInt']>;
    tick_gte?: InputMaybe<Scalars['BigInt']>;
    tick_lte?: InputMaybe<Scalars['BigInt']>;
    tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidity?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_not?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTotalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTotalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTotalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyVolumeTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyVolumeTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyVolumeTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyVolumeTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyVolumeTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyVolumesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalancesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositCount?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyDepositCount?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_not?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_gt?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_lt?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_gte?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_lte?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeWithdrawCount?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyWithdrawCount?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeSwapCount?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailySwapCount?: InputMaybe<Scalars['Int']>;
    dailySwapCount_not?: InputMaybe<Scalars['Int']>;
    dailySwapCount_gt?: InputMaybe<Scalars['Int']>;
    dailySwapCount_lt?: InputMaybe<Scalars['Int']>;
    dailySwapCount_gte?: InputMaybe<Scalars['Int']>;
    dailySwapCount_lte?: InputMaybe<Scalars['Int']>;
    dailySwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    positionCount?: InputMaybe<Scalars['Int']>;
    positionCount_not?: InputMaybe<Scalars['Int']>;
    positionCount_gt?: InputMaybe<Scalars['Int']>;
    positionCount_lt?: InputMaybe<Scalars['Int']>;
    positionCount_gte?: InputMaybe<Scalars['Int']>;
    positionCount_lte?: InputMaybe<Scalars['Int']>;
    positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount?: InputMaybe<Scalars['Int']>;
    openPositionCount_not?: InputMaybe<Scalars['Int']>;
    openPositionCount_gt?: InputMaybe<Scalars['Int']>;
    openPositionCount_lt?: InputMaybe<Scalars['Int']>;
    openPositionCount_gte?: InputMaybe<Scalars['Int']>;
    openPositionCount_lte?: InputMaybe<Scalars['Int']>;
    openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount?: InputMaybe<Scalars['Int']>;
    closedPositionCount_not?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_filter>>>;
};
export type LiquidityPoolDailySnapshot_orderBy = 'id' | 'day' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'tick' | 'totalValueLockedUSD' | 'totalLiquidity' | 'totalLiquidityUSD' | 'activeLiquidity' | 'activeLiquidityUSD' | 'uncollectedProtocolSideTokenAmounts' | 'uncollectedProtocolSideValuesUSD' | 'uncollectedSupplySideTokenAmounts' | 'uncollectedSupplySideValuesUSD' | 'cumulativeSupplySideRevenueUSD' | 'dailySupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'dailyProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'dailyTotalRevenueUSD' | 'cumulativeVolumeUSD' | 'dailyTotalVolumeUSD' | 'cumulativeVolumeTokenAmounts' | 'dailyVolumeTokenAmounts' | 'cumulativeVolumesUSD' | 'dailyVolumesUSD' | 'inputTokenBalances' | 'inputTokenBalancesUSD' | 'inputTokenWeights' | 'stakedOutputTokenAmount' | 'rewardTokenEmissionsAmount' | 'rewardTokenEmissionsUSD' | 'cumulativeDepositCount' | 'dailyDepositCount' | 'cumulativeWithdrawCount' | 'dailyWithdrawCount' | 'cumulativeSwapCount' | 'dailySwapCount' | 'positionCount' | 'openPositionCount' | 'closedPositionCount' | 'timestamp' | 'blockNumber';
export type LiquidityPoolFee = {
    /**  { Fee type }-{ Pool address }  */
    id: Scalars['Bytes'];
    /**  Fee as a percentage of the trade (swap) amount. Does not always apply  */
    feePercentage?: Maybe<Scalars['BigDecimal']>;
    /**  Type of fee this pool uses  */
    feeType: LiquidityPoolFeeType;
};
export type LiquidityPoolFeeType = 
/**  Total fixed fee paid by the user per trade, as a percentage of the traded amount. e.g. 0.3% for Uniswap v2, 0.3% for Sushiswap, 0.04% for Curve v1.  */
'FIXED_TRADING_FEE'
/**  Some protocols use tiered fees instead of fixed fee (e.g. DYDX, DODO). Set `feePercentage` as 0 but handle the tiered fees in the mapping code.  */
 | 'TIERED_TRADING_FEE'
/**  Some protocols use dynamic fees instead of fixed fee (e.g. Balancer v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
 | 'DYNAMIC_TRADING_FEE'
/**  Fixed fee that's paid to the LP, as a percentage of the traded amount. e.g. 0.25% for Sushiswap, 0.02% for Curve v1.  */
 | 'FIXED_LP_FEE'
/**  Some protocols use dynamic LP fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
 | 'DYNAMIC_LP_FEE'
/**  Fixed fee that's paid to the protocol, as a percentage of the traded amount. e.g. 0.05% for Sushiswap, 0.02% for Curve v1.  */
 | 'FIXED_PROTOCOL_FEE'
/**  Some protocols use dynamic protocol fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
 | 'DYNAMIC_PROTOCOL_FEE'
/**  One-time fee charged by the protocol during deposit, in percentages of the deposit token  */
 | 'DEPOSIT_FEE'
/**  One-time fee charged by the protocol (e.g. Bancor v3) during withdrawal, in percentages of the withdrawal token  */
 | 'WITHDRAWAL_FEE';
export type LiquidityPoolFee_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    feePercentage?: InputMaybe<Scalars['BigDecimal']>;
    feePercentage_not?: InputMaybe<Scalars['BigDecimal']>;
    feePercentage_gt?: InputMaybe<Scalars['BigDecimal']>;
    feePercentage_lt?: InputMaybe<Scalars['BigDecimal']>;
    feePercentage_gte?: InputMaybe<Scalars['BigDecimal']>;
    feePercentage_lte?: InputMaybe<Scalars['BigDecimal']>;
    feePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    feePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    feeType?: InputMaybe<LiquidityPoolFeeType>;
    feeType_not?: InputMaybe<LiquidityPoolFeeType>;
    feeType_in?: InputMaybe<Array<LiquidityPoolFeeType>>;
    feeType_not_in?: InputMaybe<Array<LiquidityPoolFeeType>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_filter>>>;
    or?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_filter>>>;
};
export type LiquidityPoolFee_orderBy = 'id' | 'feePercentage' | 'feeType';
export type LiquidityPoolHourlySnapshot = {
    /**  { Smart contract address of the pool }-{ # of hours since Unix epoch time }  */
    id: Scalars['Bytes'];
    /**  Number of hours since Unix epoch time  */
    hour: Scalars['Int'];
    /**  The protocol this snapshot belongs to  */
    protocol: DexAmmProtocol;
    /**  The pool this snapshot belongs to  */
    pool: LiquidityPool;
    /**  Current tick representing the price of token0/token1  */
    tick?: Maybe<Scalars['BigInt']>;
    /**  Current TVL (Total Value Locked) of this pool  */
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  The sum of all active and non-active liquidity for this pool.  */
    totalLiquidity: Scalars['BigInt'];
    /**  The sum of all active and non-active liquidity in USD for this pool.  */
    totalLiquidityUSD: Scalars['BigDecimal'];
    /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidity: Scalars['BigInt'];
    /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
    activeLiquidityUSD: Scalars['BigDecimal'];
    /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
    uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']>;
    /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
    uncollectedProtocolSideValuesUSD: Array<Scalars['BigDecimal']>;
    /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
    uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']>;
    /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
    uncollectedSupplySideValuesUSD: Array<Scalars['BigDecimal']>;
    /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  Hourly revenue generated by the liquidity pool, accrued to the supply side.  */
    hourlySupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  Hourly revenue generated by the liquidity pool, accrued to the protocol.  */
    hourlyProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the liquidity pool.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  Hourly revenue generated by the liquidity pool.  */
    hourlyTotalRevenueUSD: Scalars['BigDecimal'];
    /**  All historical trade volume occurred in this pool, in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal'];
    /**  All trade volume occurred in a given day, in USD  */
    hourlyTotalVolumeUSD: Scalars['BigDecimal'];
    /**  All trade volume , in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
    cumulativeVolumeTokenAmounts: Array<Scalars['BigInt']>;
    /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
    hourlyVolumeTokenAmounts: Array<Scalars['BigInt']>;
    /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
    cumulativeVolumesUSD: Array<Scalars['BigDecimal']>;
    /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
    hourlyVolumesUSD: Array<Scalars['BigDecimal']>;
    /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalances: Array<Scalars['BigInt']>;
    /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalancesUSD: Array<Scalars['BigDecimal']>;
    /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
    inputTokenWeights: Array<Scalars['BigDecimal']>;
    /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
    /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
    /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  Total number of deposits (add liquidity)  */
    cumulativeDepositCount: Scalars['Int'];
    /**  Total number of deposits (add liquidity) in an hour  */
    hourlyDepositCount: Scalars['Int'];
    /**  Total number of withdrawals (remove liquidity)  */
    cumulativeWithdrawCount: Scalars['Int'];
    /**  Total number of withdrawals (remove liquidity) in an hour  */
    hourlyWithdrawCount: Scalars['Int'];
    /**  Total number of trades (swaps)  */
    cumulativeSwapCount: Scalars['Int'];
    /**  Total number of trades (swaps) in an hour  */
    hourlySwapCount: Scalars['Int'];
    /**  Number of positions in this market  */
    positionCount: Scalars['Int'];
    /**  Number of open positions in this market  */
    openPositionCount: Scalars['Int'];
    /**  Number of closed positions in this market  */
    closedPositionCount: Scalars['Int'];
    /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    timestamp: Scalars['BigInt'];
    /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    blockNumber: Scalars['BigInt'];
};
export type LiquidityPoolHourlySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hour?: InputMaybe<Scalars['Int']>;
    hour_not?: InputMaybe<Scalars['Int']>;
    hour_gt?: InputMaybe<Scalars['Int']>;
    hour_lt?: InputMaybe<Scalars['Int']>;
    hour_gte?: InputMaybe<Scalars['Int']>;
    hour_lte?: InputMaybe<Scalars['Int']>;
    hour_in?: InputMaybe<Array<Scalars['Int']>>;
    hour_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    tick?: InputMaybe<Scalars['BigInt']>;
    tick_not?: InputMaybe<Scalars['BigInt']>;
    tick_gt?: InputMaybe<Scalars['BigInt']>;
    tick_lt?: InputMaybe<Scalars['BigInt']>;
    tick_gte?: InputMaybe<Scalars['BigInt']>;
    tick_lte?: InputMaybe<Scalars['BigInt']>;
    tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidity?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_not?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyTotalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTotalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyTotalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyVolumeTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyVolumeTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyVolumeTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyVolumeTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyVolumeTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyVolumesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalancesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositCount?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyDepositCount?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_not?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeWithdrawCount?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyWithdrawCount?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeSwapCount?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlySwapCount?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_not?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_gt?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_lt?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_gte?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_lte?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    positionCount?: InputMaybe<Scalars['Int']>;
    positionCount_not?: InputMaybe<Scalars['Int']>;
    positionCount_gt?: InputMaybe<Scalars['Int']>;
    positionCount_lt?: InputMaybe<Scalars['Int']>;
    positionCount_gte?: InputMaybe<Scalars['Int']>;
    positionCount_lte?: InputMaybe<Scalars['Int']>;
    positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount?: InputMaybe<Scalars['Int']>;
    openPositionCount_not?: InputMaybe<Scalars['Int']>;
    openPositionCount_gt?: InputMaybe<Scalars['Int']>;
    openPositionCount_lt?: InputMaybe<Scalars['Int']>;
    openPositionCount_gte?: InputMaybe<Scalars['Int']>;
    openPositionCount_lte?: InputMaybe<Scalars['Int']>;
    openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount?: InputMaybe<Scalars['Int']>;
    closedPositionCount_not?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_filter>>>;
};
export type LiquidityPoolHourlySnapshot_orderBy = 'id' | 'hour' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'tick' | 'totalValueLockedUSD' | 'totalLiquidity' | 'totalLiquidityUSD' | 'activeLiquidity' | 'activeLiquidityUSD' | 'uncollectedProtocolSideTokenAmounts' | 'uncollectedProtocolSideValuesUSD' | 'uncollectedSupplySideTokenAmounts' | 'uncollectedSupplySideValuesUSD' | 'cumulativeSupplySideRevenueUSD' | 'hourlySupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'hourlyProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'hourlyTotalRevenueUSD' | 'cumulativeVolumeUSD' | 'hourlyTotalVolumeUSD' | 'cumulativeVolumeTokenAmounts' | 'hourlyVolumeTokenAmounts' | 'cumulativeVolumesUSD' | 'hourlyVolumesUSD' | 'inputTokenBalances' | 'inputTokenBalancesUSD' | 'inputTokenWeights' | 'stakedOutputTokenAmount' | 'rewardTokenEmissionsAmount' | 'rewardTokenEmissionsUSD' | 'cumulativeDepositCount' | 'hourlyDepositCount' | 'cumulativeWithdrawCount' | 'hourlyWithdrawCount' | 'cumulativeSwapCount' | 'hourlySwapCount' | 'positionCount' | 'openPositionCount' | 'closedPositionCount' | 'timestamp' | 'blockNumber';
export type LiquidityPool_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    name?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol?: InputMaybe<Scalars['String']>;
    symbol_not?: InputMaybe<Scalars['String']>;
    symbol_gt?: InputMaybe<Scalars['String']>;
    symbol_lt?: InputMaybe<Scalars['String']>;
    symbol_gte?: InputMaybe<Scalars['String']>;
    symbol_lte?: InputMaybe<Scalars['String']>;
    symbol_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_contains?: InputMaybe<Scalars['String']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_contains?: InputMaybe<Scalars['String']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_starts_with?: InputMaybe<Scalars['String']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_ends_with?: InputMaybe<Scalars['String']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken?: InputMaybe<Scalars['String']>;
    liquidityToken_not?: InputMaybe<Scalars['String']>;
    liquidityToken_gt?: InputMaybe<Scalars['String']>;
    liquidityToken_lt?: InputMaybe<Scalars['String']>;
    liquidityToken_gte?: InputMaybe<Scalars['String']>;
    liquidityToken_lte?: InputMaybe<Scalars['String']>;
    liquidityToken_in?: InputMaybe<Array<Scalars['String']>>;
    liquidityToken_not_in?: InputMaybe<Array<Scalars['String']>>;
    liquidityToken_contains?: InputMaybe<Scalars['String']>;
    liquidityToken_contains_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_not_contains?: InputMaybe<Scalars['String']>;
    liquidityToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_starts_with?: InputMaybe<Scalars['String']>;
    liquidityToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_not_starts_with?: InputMaybe<Scalars['String']>;
    liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_ends_with?: InputMaybe<Scalars['String']>;
    liquidityToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_not_ends_with?: InputMaybe<Scalars['String']>;
    liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_?: InputMaybe<Token_filter>;
    liquidityTokenType?: InputMaybe<TokenType>;
    liquidityTokenType_not?: InputMaybe<TokenType>;
    liquidityTokenType_in?: InputMaybe<Array<TokenType>>;
    liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>;
    inputTokens?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_?: InputMaybe<Token_filter>;
    rewardTokens?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_?: InputMaybe<RewardToken_filter>;
    fees?: InputMaybe<Array<Scalars['String']>>;
    fees_not?: InputMaybe<Array<Scalars['String']>>;
    fees_contains?: InputMaybe<Array<Scalars['String']>>;
    fees_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    fees_not_contains?: InputMaybe<Array<Scalars['String']>>;
    fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    fees_?: InputMaybe<LiquidityPoolFee_filter>;
    isSingleSided?: InputMaybe<Scalars['Boolean']>;
    isSingleSided_not?: InputMaybe<Scalars['Boolean']>;
    isSingleSided_in?: InputMaybe<Array<Scalars['Boolean']>>;
    isSingleSided_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    createdTimestamp?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tick?: InputMaybe<Scalars['BigInt']>;
    tick_not?: InputMaybe<Scalars['BigInt']>;
    tick_gt?: InputMaybe<Scalars['BigInt']>;
    tick_lt?: InputMaybe<Scalars['BigInt']>;
    tick_gte?: InputMaybe<Scalars['BigInt']>;
    tick_lte?: InputMaybe<Scalars['BigInt']>;
    tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_not?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
    totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidity?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_not?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_gt?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_lt?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_gte?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_lte?: InputMaybe<Scalars['BigInt']>;
    activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumeTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeVolumesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenBalancesUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
    stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositCount?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeWithdrawCount?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeSwapCount?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_not?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']>;
    cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    positions_?: InputMaybe<Position_filter>;
    positionCount?: InputMaybe<Scalars['Int']>;
    positionCount_not?: InputMaybe<Scalars['Int']>;
    positionCount_gt?: InputMaybe<Scalars['Int']>;
    positionCount_lt?: InputMaybe<Scalars['Int']>;
    positionCount_gte?: InputMaybe<Scalars['Int']>;
    positionCount_lte?: InputMaybe<Scalars['Int']>;
    positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount?: InputMaybe<Scalars['Int']>;
    openPositionCount_not?: InputMaybe<Scalars['Int']>;
    openPositionCount_gt?: InputMaybe<Scalars['Int']>;
    openPositionCount_lt?: InputMaybe<Scalars['Int']>;
    openPositionCount_gte?: InputMaybe<Scalars['Int']>;
    openPositionCount_lte?: InputMaybe<Scalars['Int']>;
    openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount?: InputMaybe<Scalars['Int']>;
    closedPositionCount_not?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lt?: InputMaybe<Scalars['Int']>;
    closedPositionCount_gte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_lte?: InputMaybe<Scalars['Int']>;
    closedPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotDayID?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_not?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotHourID?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_not?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_gt?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_lt?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_gte?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_lte?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailySnapshots_?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
    hourlySnapshots_?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
    deposits_?: InputMaybe<Deposit_filter>;
    withdraws_?: InputMaybe<Withdraw_filter>;
    swaps_?: InputMaybe<Swap_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<LiquidityPool_filter>>>;
    or?: InputMaybe<Array<InputMaybe<LiquidityPool_filter>>>;
};
export type LiquidityPool_orderBy = 'id' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'name' | 'symbol' | 'liquidityToken' | 'liquidityToken__id' | 'liquidityToken__name' | 'liquidityToken__symbol' | 'liquidityToken__decimals' | 'liquidityToken__lastPriceUSD' | 'liquidityToken__lastPriceBlockNumber' | 'liquidityTokenType' | 'inputTokens' | 'rewardTokens' | 'fees' | 'isSingleSided' | 'createdTimestamp' | 'createdBlockNumber' | 'tick' | 'totalValueLockedUSD' | 'totalLiquidity' | 'totalLiquidityUSD' | 'activeLiquidity' | 'activeLiquidityUSD' | 'uncollectedProtocolSideTokenAmounts' | 'uncollectedProtocolSideValuesUSD' | 'uncollectedSupplySideTokenAmounts' | 'uncollectedSupplySideValuesUSD' | 'cumulativeSupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'cumulativeVolumeTokenAmounts' | 'cumulativeVolumesUSD' | 'cumulativeVolumeUSD' | 'inputTokenBalances' | 'inputTokenBalancesUSD' | 'inputTokenWeights' | 'stakedOutputTokenAmount' | 'rewardTokenEmissionsAmount' | 'rewardTokenEmissionsUSD' | 'cumulativeDepositCount' | 'cumulativeWithdrawCount' | 'cumulativeSwapCount' | 'positions' | 'positionCount' | 'openPositionCount' | 'closedPositionCount' | 'lastSnapshotDayID' | 'lastSnapshotHourID' | 'lastUpdateTimestamp' | 'lastUpdateBlockNumber' | 'dailySnapshots' | 'hourlySnapshots' | 'deposits' | 'withdraws' | 'swaps';
export type Network = 'ARBITRUM_ONE' | 'ARWEAVE_MAINNET' | 'AURORA' | 'AVALANCHE' | 'BOBA' | 'BSC' | 'CELO' | 'COSMOS' | 'CRONOS' | 'MAINNET' | 'FANTOM' | 'FUSE' | 'HARMONY' | 'JUNO' | 'MOONBEAM' | 'MOONRIVER' | 'NEAR_MAINNET' | 'OPTIMISM' | 'OSMOSIS' | 'MATIC' | 'XDAI';
/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';
export type Position = {
    /**  { Account address }-{ Market address }-{ Count }  */
    id: Scalars['Bytes'];
    /**  Account that owns this position  */
    account: Account;
    /**  The liquidity pool in which this position was opened  */
    pool: LiquidityPool;
    /**  The hash of the transaction that opened this position  */
    hashOpened: Scalars['Bytes'];
    /**  The hash of the transaction that closed this position  */
    hashClosed?: Maybe<Scalars['Bytes']>;
    /**  Block number of when the position was opened  */
    blockNumberOpened: Scalars['BigInt'];
    /**  Timestamp when the position was opened  */
    timestampOpened: Scalars['BigInt'];
    /**  Block number of when the position was closed (0 if still open)  */
    blockNumberClosed?: Maybe<Scalars['BigInt']>;
    /**  Timestamp when the position was closed (0 if still open)  */
    timestampClosed?: Maybe<Scalars['BigInt']>;
    /**  lower tick of the position  */
    tickLower?: Maybe<Tick>;
    /**  upper tick of the position  */
    tickUpper?: Maybe<Tick>;
    /**  Token that is to represent ownership of liquidity  */
    liquidityToken?: Maybe<Token>;
    /**  Type of token used to track liquidity  */
    liquidityTokenType?: Maybe<TokenType>;
    /**  total position liquidity  */
    liquidity: Scalars['BigInt'];
    /**  total position liquidity in USD  */
    liquidityUSD: Scalars['BigDecimal'];
    /**  amount of tokens ever deposited to position  */
    cumulativeDepositTokenAmounts: Array<Scalars['BigInt']>;
    /**  amount of tokens in USD deposited to position  */
    cumulativeDepositUSD: Scalars['BigDecimal'];
    /**  amount of tokens ever withdrawn from position (without fees)  */
    cumulativeWithdrawTokenAmounts: Array<Scalars['BigInt']>;
    /**  amount of tokens in USD withdrawn from position (without fees)  */
    cumulativeWithdrawUSD: Scalars['BigDecimal'];
    /**  Total reward token accumulated under this position, in USD  */
    cumulativeRewardUSD?: Maybe<Array<Scalars['BigInt']>>;
    /**  Number of deposits related to this position  */
    depositCount: Scalars['Int'];
    /**  All deposit events of this position  */
    deposits: Array<Deposit>;
    /**  Number of withdrawals related to this position  */
    withdrawCount: Scalars['Int'];
    /**  All withdraw events of this position  */
    withdraws: Array<Withdraw>;
    /**  Position daily snapshots for open positions  */
    snapshots: Array<PositionSnapshot>;
};
export type PositiondepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Deposit_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Deposit_filter>;
};
export type PositionwithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Withdraw_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Withdraw_filter>;
};
export type PositionsnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionSnapshot_filter>;
};
export type PositionSnapshot = {
    /**  { Position ID }-{ Transaction hash }-{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that triggered this snapshot  */
    hash: Scalars['Bytes'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  Nonce of the transaction that triggered this snapshot  */
    nonce: Scalars['BigInt'];
    /**  Position of this snapshot  */
    position: Position;
    /**  Type of token used to track liquidity  */
    liquidityTokenType?: Maybe<TokenType>;
    /**  total position liquidity  */
    liquidity?: Maybe<Scalars['BigInt']>;
    /**  total position liquidity in USD  */
    liquidityUSD?: Maybe<Scalars['BigDecimal']>;
    /**  amount of tokens ever deposited to position  */
    cumulativeDepositTokenAmounts: Array<Scalars['BigInt']>;
    /**  amount of tokens in USD deposited to position  */
    cumulativeDepositUSD: Scalars['BigDecimal'];
    /**  amount of tokens ever withdrawn from position (without fees)  */
    cumulativeWithdrawTokenAmounts: Array<Scalars['BigInt']>;
    /**  amount of tokens in USD withdrawn from position (without fees)  */
    cumulativeWithdrawUSD: Scalars['BigDecimal'];
    /**  Total reward token accumulated under this position, in native amounts  */
    cumulativeRewardTokenAmounts?: Maybe<Array<Scalars['BigInt']>>;
    /**  Total reward token accumulated under this position, in USD  */
    cumulativeRewardUSD?: Maybe<Array<Scalars['BigInt']>>;
    /**  Number of deposits related to this position  */
    depositCount: Scalars['Int'];
    /**  Number of withdrawals related to this position  */
    withdrawCount: Scalars['Int'];
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt'];
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt'];
};
export type PositionSnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    nonce?: InputMaybe<Scalars['BigInt']>;
    nonce_not?: InputMaybe<Scalars['BigInt']>;
    nonce_gt?: InputMaybe<Scalars['BigInt']>;
    nonce_lt?: InputMaybe<Scalars['BigInt']>;
    nonce_gte?: InputMaybe<Scalars['BigInt']>;
    nonce_lte?: InputMaybe<Scalars['BigInt']>;
    nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
    nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    liquidityTokenType?: InputMaybe<TokenType>;
    liquidityTokenType_not?: InputMaybe<TokenType>;
    liquidityTokenType_in?: InputMaybe<Array<TokenType>>;
    liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>;
    liquidity?: InputMaybe<Scalars['BigInt']>;
    liquidity_not?: InputMaybe<Scalars['BigInt']>;
    liquidity_gt?: InputMaybe<Scalars['BigInt']>;
    liquidity_lt?: InputMaybe<Scalars['BigInt']>;
    liquidity_gte?: InputMaybe<Scalars['BigInt']>;
    liquidity_lte?: InputMaybe<Scalars['BigInt']>;
    liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeWithdrawUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeRewardTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    depositCount?: InputMaybe<Scalars['Int']>;
    depositCount_not?: InputMaybe<Scalars['Int']>;
    depositCount_gt?: InputMaybe<Scalars['Int']>;
    depositCount_lt?: InputMaybe<Scalars['Int']>;
    depositCount_gte?: InputMaybe<Scalars['Int']>;
    depositCount_lte?: InputMaybe<Scalars['Int']>;
    depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawCount?: InputMaybe<Scalars['Int']>;
    withdrawCount_not?: InputMaybe<Scalars['Int']>;
    withdrawCount_gt?: InputMaybe<Scalars['Int']>;
    withdrawCount_lt?: InputMaybe<Scalars['Int']>;
    withdrawCount_gte?: InputMaybe<Scalars['Int']>;
    withdrawCount_lte?: InputMaybe<Scalars['Int']>;
    withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
};
export type PositionSnapshot_orderBy = 'id' | 'hash' | 'logIndex' | 'nonce' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__liquidityTokenType' | 'position__liquidity' | 'position__liquidityUSD' | 'position__cumulativeDepositUSD' | 'position__cumulativeWithdrawUSD' | 'position__depositCount' | 'position__withdrawCount' | 'liquidityTokenType' | 'liquidity' | 'liquidityUSD' | 'cumulativeDepositTokenAmounts' | 'cumulativeDepositUSD' | 'cumulativeWithdrawTokenAmounts' | 'cumulativeWithdrawUSD' | 'cumulativeRewardTokenAmounts' | 'cumulativeRewardUSD' | 'depositCount' | 'withdrawCount' | 'blockNumber' | 'timestamp';
export type Position_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<Account_filter>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    hashOpened?: InputMaybe<Scalars['Bytes']>;
    hashOpened_not?: InputMaybe<Scalars['Bytes']>;
    hashOpened_gt?: InputMaybe<Scalars['Bytes']>;
    hashOpened_lt?: InputMaybe<Scalars['Bytes']>;
    hashOpened_gte?: InputMaybe<Scalars['Bytes']>;
    hashOpened_lte?: InputMaybe<Scalars['Bytes']>;
    hashOpened_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashOpened_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashOpened_contains?: InputMaybe<Scalars['Bytes']>;
    hashOpened_not_contains?: InputMaybe<Scalars['Bytes']>;
    hashClosed?: InputMaybe<Scalars['Bytes']>;
    hashClosed_not?: InputMaybe<Scalars['Bytes']>;
    hashClosed_gt?: InputMaybe<Scalars['Bytes']>;
    hashClosed_lt?: InputMaybe<Scalars['Bytes']>;
    hashClosed_gte?: InputMaybe<Scalars['Bytes']>;
    hashClosed_lte?: InputMaybe<Scalars['Bytes']>;
    hashClosed_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashClosed_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashClosed_contains?: InputMaybe<Scalars['Bytes']>;
    hashClosed_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumberOpened?: InputMaybe<Scalars['BigInt']>;
    blockNumberOpened_not?: InputMaybe<Scalars['BigInt']>;
    blockNumberOpened_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumberOpened_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumberOpened_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumberOpened_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumberOpened_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumberOpened_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestampOpened?: InputMaybe<Scalars['BigInt']>;
    timestampOpened_not?: InputMaybe<Scalars['BigInt']>;
    timestampOpened_gt?: InputMaybe<Scalars['BigInt']>;
    timestampOpened_lt?: InputMaybe<Scalars['BigInt']>;
    timestampOpened_gte?: InputMaybe<Scalars['BigInt']>;
    timestampOpened_lte?: InputMaybe<Scalars['BigInt']>;
    timestampOpened_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestampOpened_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumberClosed?: InputMaybe<Scalars['BigInt']>;
    blockNumberClosed_not?: InputMaybe<Scalars['BigInt']>;
    blockNumberClosed_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumberClosed_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumberClosed_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumberClosed_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumberClosed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumberClosed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestampClosed?: InputMaybe<Scalars['BigInt']>;
    timestampClosed_not?: InputMaybe<Scalars['BigInt']>;
    timestampClosed_gt?: InputMaybe<Scalars['BigInt']>;
    timestampClosed_lt?: InputMaybe<Scalars['BigInt']>;
    timestampClosed_gte?: InputMaybe<Scalars['BigInt']>;
    timestampClosed_lte?: InputMaybe<Scalars['BigInt']>;
    timestampClosed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestampClosed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tickLower?: InputMaybe<Scalars['String']>;
    tickLower_not?: InputMaybe<Scalars['String']>;
    tickLower_gt?: InputMaybe<Scalars['String']>;
    tickLower_lt?: InputMaybe<Scalars['String']>;
    tickLower_gte?: InputMaybe<Scalars['String']>;
    tickLower_lte?: InputMaybe<Scalars['String']>;
    tickLower_in?: InputMaybe<Array<Scalars['String']>>;
    tickLower_not_in?: InputMaybe<Array<Scalars['String']>>;
    tickLower_contains?: InputMaybe<Scalars['String']>;
    tickLower_contains_nocase?: InputMaybe<Scalars['String']>;
    tickLower_not_contains?: InputMaybe<Scalars['String']>;
    tickLower_not_contains_nocase?: InputMaybe<Scalars['String']>;
    tickLower_starts_with?: InputMaybe<Scalars['String']>;
    tickLower_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tickLower_not_starts_with?: InputMaybe<Scalars['String']>;
    tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tickLower_ends_with?: InputMaybe<Scalars['String']>;
    tickLower_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tickLower_not_ends_with?: InputMaybe<Scalars['String']>;
    tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tickLower_?: InputMaybe<Tick_filter>;
    tickUpper?: InputMaybe<Scalars['String']>;
    tickUpper_not?: InputMaybe<Scalars['String']>;
    tickUpper_gt?: InputMaybe<Scalars['String']>;
    tickUpper_lt?: InputMaybe<Scalars['String']>;
    tickUpper_gte?: InputMaybe<Scalars['String']>;
    tickUpper_lte?: InputMaybe<Scalars['String']>;
    tickUpper_in?: InputMaybe<Array<Scalars['String']>>;
    tickUpper_not_in?: InputMaybe<Array<Scalars['String']>>;
    tickUpper_contains?: InputMaybe<Scalars['String']>;
    tickUpper_contains_nocase?: InputMaybe<Scalars['String']>;
    tickUpper_not_contains?: InputMaybe<Scalars['String']>;
    tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']>;
    tickUpper_starts_with?: InputMaybe<Scalars['String']>;
    tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tickUpper_not_starts_with?: InputMaybe<Scalars['String']>;
    tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tickUpper_ends_with?: InputMaybe<Scalars['String']>;
    tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tickUpper_not_ends_with?: InputMaybe<Scalars['String']>;
    tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tickUpper_?: InputMaybe<Tick_filter>;
    liquidityToken?: InputMaybe<Scalars['String']>;
    liquidityToken_not?: InputMaybe<Scalars['String']>;
    liquidityToken_gt?: InputMaybe<Scalars['String']>;
    liquidityToken_lt?: InputMaybe<Scalars['String']>;
    liquidityToken_gte?: InputMaybe<Scalars['String']>;
    liquidityToken_lte?: InputMaybe<Scalars['String']>;
    liquidityToken_in?: InputMaybe<Array<Scalars['String']>>;
    liquidityToken_not_in?: InputMaybe<Array<Scalars['String']>>;
    liquidityToken_contains?: InputMaybe<Scalars['String']>;
    liquidityToken_contains_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_not_contains?: InputMaybe<Scalars['String']>;
    liquidityToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_starts_with?: InputMaybe<Scalars['String']>;
    liquidityToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_not_starts_with?: InputMaybe<Scalars['String']>;
    liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_ends_with?: InputMaybe<Scalars['String']>;
    liquidityToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_not_ends_with?: InputMaybe<Scalars['String']>;
    liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    liquidityToken_?: InputMaybe<Token_filter>;
    liquidityTokenType?: InputMaybe<TokenType>;
    liquidityTokenType_not?: InputMaybe<TokenType>;
    liquidityTokenType_in?: InputMaybe<Array<TokenType>>;
    liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>;
    liquidity?: InputMaybe<Scalars['BigInt']>;
    liquidity_not?: InputMaybe<Scalars['BigInt']>;
    liquidity_gt?: InputMaybe<Scalars['BigInt']>;
    liquidity_lt?: InputMaybe<Scalars['BigInt']>;
    liquidity_gte?: InputMaybe<Scalars['BigInt']>;
    liquidity_lte?: InputMaybe<Scalars['BigInt']>;
    liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeWithdrawUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeWithdrawUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeRewardUSD?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_not?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeRewardUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    depositCount?: InputMaybe<Scalars['Int']>;
    depositCount_not?: InputMaybe<Scalars['Int']>;
    depositCount_gt?: InputMaybe<Scalars['Int']>;
    depositCount_lt?: InputMaybe<Scalars['Int']>;
    depositCount_gte?: InputMaybe<Scalars['Int']>;
    depositCount_lte?: InputMaybe<Scalars['Int']>;
    depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    deposits_?: InputMaybe<Deposit_filter>;
    withdrawCount?: InputMaybe<Scalars['Int']>;
    withdrawCount_not?: InputMaybe<Scalars['Int']>;
    withdrawCount_gt?: InputMaybe<Scalars['Int']>;
    withdrawCount_lt?: InputMaybe<Scalars['Int']>;
    withdrawCount_gte?: InputMaybe<Scalars['Int']>;
    withdrawCount_lte?: InputMaybe<Scalars['Int']>;
    withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    withdraws_?: InputMaybe<Withdraw_filter>;
    snapshots_?: InputMaybe<PositionSnapshot_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Position_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Position_filter>>>;
};
export type Position_orderBy = 'id' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__swapCount' | 'account___newUser' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'hashOpened' | 'hashClosed' | 'blockNumberOpened' | 'timestampOpened' | 'blockNumberClosed' | 'timestampClosed' | 'tickLower' | 'tickLower__id' | 'tickLower__index' | 'tickLower__createdTimestamp' | 'tickLower__createdBlockNumber' | 'tickLower__liquidityGross' | 'tickLower__liquidityGrossUSD' | 'tickLower__liquidityNet' | 'tickLower__liquidityNetUSD' | 'tickLower__lastSnapshotDayID' | 'tickLower__lastSnapshotHourID' | 'tickLower__lastUpdateTimestamp' | 'tickLower__lastUpdateBlockNumber' | 'tickUpper' | 'tickUpper__id' | 'tickUpper__index' | 'tickUpper__createdTimestamp' | 'tickUpper__createdBlockNumber' | 'tickUpper__liquidityGross' | 'tickUpper__liquidityGrossUSD' | 'tickUpper__liquidityNet' | 'tickUpper__liquidityNetUSD' | 'tickUpper__lastSnapshotDayID' | 'tickUpper__lastSnapshotHourID' | 'tickUpper__lastUpdateTimestamp' | 'tickUpper__lastUpdateBlockNumber' | 'liquidityToken' | 'liquidityToken__id' | 'liquidityToken__name' | 'liquidityToken__symbol' | 'liquidityToken__decimals' | 'liquidityToken__lastPriceUSD' | 'liquidityToken__lastPriceBlockNumber' | 'liquidityTokenType' | 'liquidity' | 'liquidityUSD' | 'cumulativeDepositTokenAmounts' | 'cumulativeDepositUSD' | 'cumulativeWithdrawTokenAmounts' | 'cumulativeWithdrawUSD' | 'cumulativeRewardUSD' | 'depositCount' | 'deposits' | 'withdrawCount' | 'withdraws' | 'snapshots';
export type Protocol = {
    /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
    id: Scalars['Bytes'];
    /**  Name of the protocol, including version. e.g. Uniswap v3  */
    name: Scalars['String'];
    /**  Slug of protocol, including version. e.g. uniswap-v3  */
    slug: Scalars['String'];
    /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
    schemaVersion: Scalars['String'];
    /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
    subgraphVersion: Scalars['String'];
    /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
    methodologyVersion: Scalars['String'];
    /**  The blockchain network this subgraph is indexing on  */
    network: Network;
    /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
    type: ProtocolType;
    /**  Current TVL (Total Value Locked) of the entire protocol  */
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  Number of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int'];
    /**  Total number of pools  */
    totalPoolCount: Scalars['Int'];
    /**  Daily usage metrics for this protocol  */
    dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
    /**  Hourly usage metrics for this protocol  */
    hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
    /**  Daily financial metrics for this protocol  */
    financialMetrics: Array<FinancialsDailySnapshot>;
};
export type ProtocoldailyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};
export type ProtocolhourlyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};
export type ProtocolfinancialMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<FinancialsDailySnapshot_filter>;
};
export type ProtocolType = 'EXCHANGE' | 'LENDING' | 'YIELD' | 'BRIDGE' | 'GENERIC';
export type Protocol_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    name?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    slug_not?: InputMaybe<Scalars['String']>;
    slug_gt?: InputMaybe<Scalars['String']>;
    slug_lt?: InputMaybe<Scalars['String']>;
    slug_gte?: InputMaybe<Scalars['String']>;
    slug_lte?: InputMaybe<Scalars['String']>;
    slug_in?: InputMaybe<Array<Scalars['String']>>;
    slug_not_in?: InputMaybe<Array<Scalars['String']>>;
    slug_contains?: InputMaybe<Scalars['String']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']>;
    slug_not_contains?: InputMaybe<Scalars['String']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
    slug_starts_with?: InputMaybe<Scalars['String']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
    slug_not_starts_with?: InputMaybe<Scalars['String']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    slug_ends_with?: InputMaybe<Scalars['String']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion?: InputMaybe<Scalars['String']>;
    schemaVersion_not?: InputMaybe<Scalars['String']>;
    schemaVersion_gt?: InputMaybe<Scalars['String']>;
    schemaVersion_lt?: InputMaybe<Scalars['String']>;
    schemaVersion_gte?: InputMaybe<Scalars['String']>;
    schemaVersion_lte?: InputMaybe<Scalars['String']>;
    schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
    schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    schemaVersion_contains?: InputMaybe<Scalars['String']>;
    schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
    schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
    schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
    schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion?: InputMaybe<Scalars['String']>;
    subgraphVersion_not?: InputMaybe<Scalars['String']>;
    subgraphVersion_gt?: InputMaybe<Scalars['String']>;
    subgraphVersion_lt?: InputMaybe<Scalars['String']>;
    subgraphVersion_gte?: InputMaybe<Scalars['String']>;
    subgraphVersion_lte?: InputMaybe<Scalars['String']>;
    subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
    subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    subgraphVersion_contains?: InputMaybe<Scalars['String']>;
    subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion?: InputMaybe<Scalars['String']>;
    methodologyVersion_not?: InputMaybe<Scalars['String']>;
    methodologyVersion_gt?: InputMaybe<Scalars['String']>;
    methodologyVersion_lt?: InputMaybe<Scalars['String']>;
    methodologyVersion_gte?: InputMaybe<Scalars['String']>;
    methodologyVersion_lte?: InputMaybe<Scalars['String']>;
    methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
    methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    methodologyVersion_contains?: InputMaybe<Scalars['String']>;
    methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    network?: InputMaybe<Network>;
    network_not?: InputMaybe<Network>;
    network_in?: InputMaybe<Array<Network>>;
    network_not_in?: InputMaybe<Array<Network>>;
    type?: InputMaybe<ProtocolType>;
    type_not?: InputMaybe<ProtocolType>;
    type_in?: InputMaybe<Array<ProtocolType>>;
    type_not_in?: InputMaybe<Array<ProtocolType>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPoolCount?: InputMaybe<Scalars['Int']>;
    totalPoolCount_not?: InputMaybe<Scalars['Int']>;
    totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
    totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
    totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
    totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
    totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>;
    hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
    financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
};
export type Protocol_orderBy = 'id' | 'name' | 'slug' | 'schemaVersion' | 'subgraphVersion' | 'methodologyVersion' | 'network' | 'type' | 'totalValueLockedUSD' | 'protocolControlledValueUSD' | 'cumulativeSupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'cumulativeUniqueUsers' | 'totalPoolCount' | 'dailyUsageMetrics' | 'hourlyUsageMetrics' | 'financialMetrics';
export type Query = {
    token?: Maybe<Token>;
    tokens: Array<Token>;
    rewardToken?: Maybe<RewardToken>;
    rewardTokens: Array<RewardToken>;
    liquidityPoolFee?: Maybe<LiquidityPoolFee>;
    liquidityPoolFees: Array<LiquidityPoolFee>;
    dexAmmProtocol?: Maybe<DexAmmProtocol>;
    dexAmmProtocols: Array<DexAmmProtocol>;
    usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
    usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
    usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
    usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
    financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
    financialsDailySnapshots: Array<FinancialsDailySnapshot>;
    liquidityPool?: Maybe<LiquidityPool>;
    liquidityPools: Array<LiquidityPool>;
    liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>;
    liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>;
    liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>;
    liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
    tick?: Maybe<Tick>;
    ticks: Array<Tick>;
    tickDailySnapshot?: Maybe<TickDailySnapshot>;
    tickDailySnapshots: Array<TickDailySnapshot>;
    tickHourlySnapshot?: Maybe<TickHourlySnapshot>;
    tickHourlySnapshots: Array<TickHourlySnapshot>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    position?: Maybe<Position>;
    positions: Array<Position>;
    positionSnapshot?: Maybe<PositionSnapshot>;
    positionSnapshots: Array<PositionSnapshot>;
    deposit?: Maybe<Deposit>;
    deposits: Array<Deposit>;
    withdraw?: Maybe<Withdraw>;
    withdraws: Array<Withdraw>;
    swap?: Maybe<Swap>;
    swaps: Array<Swap>;
    activeAccount?: Maybe<ActiveAccount>;
    activeAccounts: Array<ActiveAccount>;
    liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>;
    liquidityPoolAmounts: Array<_LiquidityPoolAmount>;
    helperStore?: Maybe<_HelperStore>;
    helperStores: Array<_HelperStore>;
    tokenWhitelist?: Maybe<_TokenWhitelist>;
    tokenWhitelists: Array<_TokenWhitelist>;
    protocol?: Maybe<Protocol>;
    protocols: Array<Protocol>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type QuerytokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryrewardTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RewardToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolFeeArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolFeesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolFee_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolFee_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydexAmmProtocolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydexAmmProtocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DexAmmProtocol_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DexAmmProtocol_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryusageMetricsDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryusageMetricsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryusageMetricsHourlySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryusageMetricsHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryfinancialsDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryfinancialsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<FinancialsDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPool_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPool_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolHourlySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytickArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryticksArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Tick_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Tick_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytickDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytickDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TickDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TickDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytickHourlySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytickHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TickHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TickHourlySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryaccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Account_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Account_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerypositionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerypositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerypositionSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerypositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydepositArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Deposit_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Deposit_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerywithdrawArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerywithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Withdraw_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Withdraw_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryswapArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Swap_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Swap_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryactiveAccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ActiveAccount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ActiveAccount_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolAmountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryliquidityPoolAmountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_LiquidityPoolAmount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_LiquidityPoolAmount_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryhelperStoreArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryhelperStoresArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_HelperStore_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_HelperStore_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytokenWhitelistArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytokenWhitelistsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_TokenWhitelist_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_TokenWhitelist_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryprotocolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryprotocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Protocol_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Protocol_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type RewardToken = {
    /**  { Reward token type }-{ Smart contract address of the reward token }  */
    id: Scalars['Bytes'];
    /**  Reference to the actual token  */
    token: Token;
    /**  The type of the reward token  */
    type: RewardTokenType;
};
export type RewardTokenType = 
/**  For reward tokens awarded to LPs/lenders  */
'DEPOSIT'
/**  For reward tokens awarded to borrowers  */
 | 'BORROW';
export type RewardToken_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    token?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_?: InputMaybe<Token_filter>;
    type?: InputMaybe<RewardTokenType>;
    type_not?: InputMaybe<RewardTokenType>;
    type_in?: InputMaybe<Array<RewardTokenType>>;
    type_not_in?: InputMaybe<Array<RewardTokenType>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<RewardToken_filter>>>;
    or?: InputMaybe<Array<InputMaybe<RewardToken_filter>>>;
};
export type RewardToken_orderBy = 'id' | 'token' | 'token__id' | 'token__name' | 'token__symbol' | 'token__decimals' | 'token__lastPriceUSD' | 'token__lastPriceBlockNumber' | 'type';
export type Subscription = {
    token?: Maybe<Token>;
    tokens: Array<Token>;
    rewardToken?: Maybe<RewardToken>;
    rewardTokens: Array<RewardToken>;
    liquidityPoolFee?: Maybe<LiquidityPoolFee>;
    liquidityPoolFees: Array<LiquidityPoolFee>;
    dexAmmProtocol?: Maybe<DexAmmProtocol>;
    dexAmmProtocols: Array<DexAmmProtocol>;
    usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
    usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
    usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
    usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
    financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
    financialsDailySnapshots: Array<FinancialsDailySnapshot>;
    liquidityPool?: Maybe<LiquidityPool>;
    liquidityPools: Array<LiquidityPool>;
    liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>;
    liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>;
    liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>;
    liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
    tick?: Maybe<Tick>;
    ticks: Array<Tick>;
    tickDailySnapshot?: Maybe<TickDailySnapshot>;
    tickDailySnapshots: Array<TickDailySnapshot>;
    tickHourlySnapshot?: Maybe<TickHourlySnapshot>;
    tickHourlySnapshots: Array<TickHourlySnapshot>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    position?: Maybe<Position>;
    positions: Array<Position>;
    positionSnapshot?: Maybe<PositionSnapshot>;
    positionSnapshots: Array<PositionSnapshot>;
    deposit?: Maybe<Deposit>;
    deposits: Array<Deposit>;
    withdraw?: Maybe<Withdraw>;
    withdraws: Array<Withdraw>;
    swap?: Maybe<Swap>;
    swaps: Array<Swap>;
    activeAccount?: Maybe<ActiveAccount>;
    activeAccounts: Array<ActiveAccount>;
    liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>;
    liquidityPoolAmounts: Array<_LiquidityPoolAmount>;
    helperStore?: Maybe<_HelperStore>;
    helperStores: Array<_HelperStore>;
    tokenWhitelist?: Maybe<_TokenWhitelist>;
    tokenWhitelists: Array<_TokenWhitelist>;
    protocol?: Maybe<Protocol>;
    protocols: Array<Protocol>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type SubscriptiontokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionrewardTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RewardToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolFeeArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolFeesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolFee_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolFee_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondexAmmProtocolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondexAmmProtocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DexAmmProtocol_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DexAmmProtocol_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionusageMetricsDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionusageMetricsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionusageMetricsHourlySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionusageMetricsHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionfinancialsDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionfinancialsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<FinancialsDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPool_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPool_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolHourlySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontickArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionticksArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Tick_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Tick_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontickDailySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontickDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TickDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TickDailySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontickHourlySnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontickHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TickHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TickHourlySnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionaccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Account_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Account_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionpositionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionpositionSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionpositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondepositArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Deposit_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Deposit_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionwithdrawArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionwithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Withdraw_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Withdraw_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionswapArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Swap_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Swap_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionactiveAccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ActiveAccount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ActiveAccount_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolAmountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionliquidityPoolAmountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_LiquidityPoolAmount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_LiquidityPoolAmount_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionhelperStoreArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionhelperStoresArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_HelperStore_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_HelperStore_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontokenWhitelistArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontokenWhitelistsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_TokenWhitelist_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_TokenWhitelist_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionprotocolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionprotocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Protocol_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Protocol_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type Swap = {
    /**  { Transaction hash }-{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
    /**  Nonce of the transaction that emitted this event  */
    nonce: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  Gas limit of the transaction that emitted this event  */
    gasLimit?: Maybe<Scalars['BigInt']>;
    /**  Gas used in this transaction. (Optional because not every chain will support this)  */
    gasUsed?: Maybe<Scalars['BigInt']>;
    /**  Gas price of the transaction that emitted this event  */
    gasPrice?: Maybe<Scalars['BigInt']>;
    /**  The protocol this transaction belongs to  */
    protocol: DexAmmProtocol;
    /**  Account that emitted this event  */
    account: Account;
    /**  The pool involving this event  */
    pool: LiquidityPool;
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  the tick after the swap  */
    tick?: Maybe<Scalars['BigInt']>;
    /**  Token deposited into pool  */
    tokenIn: Token;
    /**  Amount of token deposited into pool in native units  */
    amountIn: Scalars['BigInt'];
    /**  Amount of token deposited into pool in USD  */
    amountInUSD: Scalars['BigDecimal'];
    /**  Token withdrawn from pool  */
    tokenOut: Token;
    /**  Amount of token withdrawn from pool in native units  */
    amountOut: Scalars['BigInt'];
    /**  Amount of token withdrawn from pool in USD  */
    amountOutUSD: Scalars['BigDecimal'];
};
export type Swap_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
    nonce?: InputMaybe<Scalars['BigInt']>;
    nonce_not?: InputMaybe<Scalars['BigInt']>;
    nonce_gt?: InputMaybe<Scalars['BigInt']>;
    nonce_lt?: InputMaybe<Scalars['BigInt']>;
    nonce_gte?: InputMaybe<Scalars['BigInt']>;
    nonce_lte?: InputMaybe<Scalars['BigInt']>;
    nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
    nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    gasLimit?: InputMaybe<Scalars['BigInt']>;
    gasLimit_not?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed?: InputMaybe<Scalars['BigInt']>;
    gasUsed_not?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice?: InputMaybe<Scalars['BigInt']>;
    gasPrice_not?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<Account_filter>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tick?: InputMaybe<Scalars['BigInt']>;
    tick_not?: InputMaybe<Scalars['BigInt']>;
    tick_gt?: InputMaybe<Scalars['BigInt']>;
    tick_lt?: InputMaybe<Scalars['BigInt']>;
    tick_gte?: InputMaybe<Scalars['BigInt']>;
    tick_lte?: InputMaybe<Scalars['BigInt']>;
    tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tokenIn?: InputMaybe<Scalars['String']>;
    tokenIn_not?: InputMaybe<Scalars['String']>;
    tokenIn_gt?: InputMaybe<Scalars['String']>;
    tokenIn_lt?: InputMaybe<Scalars['String']>;
    tokenIn_gte?: InputMaybe<Scalars['String']>;
    tokenIn_lte?: InputMaybe<Scalars['String']>;
    tokenIn_in?: InputMaybe<Array<Scalars['String']>>;
    tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>;
    tokenIn_contains?: InputMaybe<Scalars['String']>;
    tokenIn_contains_nocase?: InputMaybe<Scalars['String']>;
    tokenIn_not_contains?: InputMaybe<Scalars['String']>;
    tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
    tokenIn_starts_with?: InputMaybe<Scalars['String']>;
    tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tokenIn_not_starts_with?: InputMaybe<Scalars['String']>;
    tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tokenIn_ends_with?: InputMaybe<Scalars['String']>;
    tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tokenIn_not_ends_with?: InputMaybe<Scalars['String']>;
    tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tokenIn_?: InputMaybe<Token_filter>;
    amountIn?: InputMaybe<Scalars['BigInt']>;
    amountIn_not?: InputMaybe<Scalars['BigInt']>;
    amountIn_gt?: InputMaybe<Scalars['BigInt']>;
    amountIn_lt?: InputMaybe<Scalars['BigInt']>;
    amountIn_gte?: InputMaybe<Scalars['BigInt']>;
    amountIn_lte?: InputMaybe<Scalars['BigInt']>;
    amountIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountInUSD?: InputMaybe<Scalars['BigDecimal']>;
    amountInUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    amountInUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountInUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountInUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountInUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountInUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountInUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tokenOut?: InputMaybe<Scalars['String']>;
    tokenOut_not?: InputMaybe<Scalars['String']>;
    tokenOut_gt?: InputMaybe<Scalars['String']>;
    tokenOut_lt?: InputMaybe<Scalars['String']>;
    tokenOut_gte?: InputMaybe<Scalars['String']>;
    tokenOut_lte?: InputMaybe<Scalars['String']>;
    tokenOut_in?: InputMaybe<Array<Scalars['String']>>;
    tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>;
    tokenOut_contains?: InputMaybe<Scalars['String']>;
    tokenOut_contains_nocase?: InputMaybe<Scalars['String']>;
    tokenOut_not_contains?: InputMaybe<Scalars['String']>;
    tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>;
    tokenOut_starts_with?: InputMaybe<Scalars['String']>;
    tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tokenOut_not_starts_with?: InputMaybe<Scalars['String']>;
    tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tokenOut_ends_with?: InputMaybe<Scalars['String']>;
    tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tokenOut_not_ends_with?: InputMaybe<Scalars['String']>;
    tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tokenOut_?: InputMaybe<Token_filter>;
    amountOut?: InputMaybe<Scalars['BigInt']>;
    amountOut_not?: InputMaybe<Scalars['BigInt']>;
    amountOut_gt?: InputMaybe<Scalars['BigInt']>;
    amountOut_lt?: InputMaybe<Scalars['BigInt']>;
    amountOut_gte?: InputMaybe<Scalars['BigInt']>;
    amountOut_lte?: InputMaybe<Scalars['BigInt']>;
    amountOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountOutUSD?: InputMaybe<Scalars['BigDecimal']>;
    amountOutUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    amountOutUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountOutUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountOutUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountOutUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountOutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountOutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
};
export type Swap_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasLimit' | 'gasUsed' | 'gasPrice' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__swapCount' | 'account___newUser' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'blockNumber' | 'timestamp' | 'tick' | 'tokenIn' | 'tokenIn__id' | 'tokenIn__name' | 'tokenIn__symbol' | 'tokenIn__decimals' | 'tokenIn__lastPriceUSD' | 'tokenIn__lastPriceBlockNumber' | 'amountIn' | 'amountInUSD' | 'tokenOut' | 'tokenOut__id' | 'tokenOut__name' | 'tokenOut__symbol' | 'tokenOut__decimals' | 'tokenOut__lastPriceUSD' | 'tokenOut__lastPriceBlockNumber' | 'amountOut' | 'amountOutUSD';
export type Tick = {
    /**  { pool address }-{ tick index }  */
    id: Scalars['Bytes'];
    /**  tick index  */
    index: Scalars['BigInt'];
    /**  Liquidity pool this tick belongs to  */
    pool: LiquidityPool;
    /**  Creation timestamp  */
    createdTimestamp: Scalars['BigInt'];
    /**  Creation block number  */
    createdBlockNumber: Scalars['BigInt'];
    /**  calculated price of token0 of tick within this pool - constant  */
    prices: Array<Scalars['BigDecimal']>;
    /**  total liquidity pool has as tick lower or upper  */
    liquidityGross: Scalars['BigInt'];
    /**  total liquidity in USD pool has as tick lower or upper  */
    liquidityGrossUSD: Scalars['BigDecimal'];
    /**  how much liquidity changes when tick crossed  */
    liquidityNet: Scalars['BigInt'];
    /**  how much liquidity in USD changes when tick crossed  */
    liquidityNetUSD: Scalars['BigDecimal'];
    /**  Day ID of the most recent daily snapshot  */
    lastSnapshotDayID: Scalars['Int'];
    /**  Hour ID of the most recent hourly snapshot  */
    lastSnapshotHourID: Scalars['Int'];
    /**  Timestamp of the last time this entity was updated  */
    lastUpdateTimestamp: Scalars['BigInt'];
    /**  Block number of the last time this entity was updated  */
    lastUpdateBlockNumber: Scalars['BigInt'];
};
export type TickDailySnapshot = {
    /**  { pool address }-{ tick index }-{ day ID }  */
    id: Scalars['Bytes'];
    /**  Number of days since Unix epoch time  */
    day: Scalars['Int'];
    /**  tick index  */
    tick: Tick;
    /**  liquidity pool this tick belongs to  */
    pool: LiquidityPool;
    /**  total liquidity pool has as tick lower or upper  */
    liquidityGross: Scalars['BigInt'];
    /**  total liquidity in USD pool has as tick lower or upper  */
    liquidityGrossUSD: Scalars['BigDecimal'];
    /**  how much liquidity changes when tick crossed  */
    liquidityNet: Scalars['BigInt'];
    /**  how much liquidity in USD changes when tick crossed  */
    liquidityNetUSD: Scalars['BigDecimal'];
    /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    timestamp: Scalars['BigInt'];
    /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    blockNumber: Scalars['BigInt'];
};
export type TickDailySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['Int']>;
    day_not?: InputMaybe<Scalars['Int']>;
    day_gt?: InputMaybe<Scalars['Int']>;
    day_lt?: InputMaybe<Scalars['Int']>;
    day_gte?: InputMaybe<Scalars['Int']>;
    day_lte?: InputMaybe<Scalars['Int']>;
    day_in?: InputMaybe<Array<Scalars['Int']>>;
    day_not_in?: InputMaybe<Array<Scalars['Int']>>;
    tick?: InputMaybe<Scalars['String']>;
    tick_not?: InputMaybe<Scalars['String']>;
    tick_gt?: InputMaybe<Scalars['String']>;
    tick_lt?: InputMaybe<Scalars['String']>;
    tick_gte?: InputMaybe<Scalars['String']>;
    tick_lte?: InputMaybe<Scalars['String']>;
    tick_in?: InputMaybe<Array<Scalars['String']>>;
    tick_not_in?: InputMaybe<Array<Scalars['String']>>;
    tick_contains?: InputMaybe<Scalars['String']>;
    tick_contains_nocase?: InputMaybe<Scalars['String']>;
    tick_not_contains?: InputMaybe<Scalars['String']>;
    tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
    tick_starts_with?: InputMaybe<Scalars['String']>;
    tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tick_not_starts_with?: InputMaybe<Scalars['String']>;
    tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tick_ends_with?: InputMaybe<Scalars['String']>;
    tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tick_not_ends_with?: InputMaybe<Scalars['String']>;
    tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tick_?: InputMaybe<Tick_filter>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    liquidityGross?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityGrossUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityNet?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityNetUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<TickDailySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<TickDailySnapshot_filter>>>;
};
export type TickDailySnapshot_orderBy = 'id' | 'day' | 'tick' | 'tick__id' | 'tick__index' | 'tick__createdTimestamp' | 'tick__createdBlockNumber' | 'tick__liquidityGross' | 'tick__liquidityGrossUSD' | 'tick__liquidityNet' | 'tick__liquidityNetUSD' | 'tick__lastSnapshotDayID' | 'tick__lastSnapshotHourID' | 'tick__lastUpdateTimestamp' | 'tick__lastUpdateBlockNumber' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'liquidityGross' | 'liquidityGrossUSD' | 'liquidityNet' | 'liquidityNetUSD' | 'timestamp' | 'blockNumber';
export type TickHourlySnapshot = {
    /**  { pool address }-{ tick index }-{ hour ID }  */
    id: Scalars['Bytes'];
    /**  Number of hours since Unix epoch time  */
    hour: Scalars['Int'];
    /**  tick index  */
    tick: Tick;
    /**  liquidity pool this tick belongs to  */
    pool: LiquidityPool;
    /**  total liquidity pool has as tick lower or upper  */
    liquidityGross: Scalars['BigInt'];
    /**  total liquidity in USD pool has as tick lower or upper  */
    liquidityGrossUSD: Scalars['BigDecimal'];
    /**  how much liquidity changes when tick crossed  */
    liquidityNet: Scalars['BigInt'];
    /**  how much liquidity in USD changes when tick crossed  */
    liquidityNetUSD: Scalars['BigDecimal'];
    /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    timestamp: Scalars['BigInt'];
    /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    blockNumber: Scalars['BigInt'];
};
export type TickHourlySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hour?: InputMaybe<Scalars['Int']>;
    hour_not?: InputMaybe<Scalars['Int']>;
    hour_gt?: InputMaybe<Scalars['Int']>;
    hour_lt?: InputMaybe<Scalars['Int']>;
    hour_gte?: InputMaybe<Scalars['Int']>;
    hour_lte?: InputMaybe<Scalars['Int']>;
    hour_in?: InputMaybe<Array<Scalars['Int']>>;
    hour_not_in?: InputMaybe<Array<Scalars['Int']>>;
    tick?: InputMaybe<Scalars['String']>;
    tick_not?: InputMaybe<Scalars['String']>;
    tick_gt?: InputMaybe<Scalars['String']>;
    tick_lt?: InputMaybe<Scalars['String']>;
    tick_gte?: InputMaybe<Scalars['String']>;
    tick_lte?: InputMaybe<Scalars['String']>;
    tick_in?: InputMaybe<Array<Scalars['String']>>;
    tick_not_in?: InputMaybe<Array<Scalars['String']>>;
    tick_contains?: InputMaybe<Scalars['String']>;
    tick_contains_nocase?: InputMaybe<Scalars['String']>;
    tick_not_contains?: InputMaybe<Scalars['String']>;
    tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
    tick_starts_with?: InputMaybe<Scalars['String']>;
    tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tick_not_starts_with?: InputMaybe<Scalars['String']>;
    tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    tick_ends_with?: InputMaybe<Scalars['String']>;
    tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tick_not_ends_with?: InputMaybe<Scalars['String']>;
    tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    tick_?: InputMaybe<Tick_filter>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    liquidityGross?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityGrossUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityNet?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityNetUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<TickHourlySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<TickHourlySnapshot_filter>>>;
};
export type TickHourlySnapshot_orderBy = 'id' | 'hour' | 'tick' | 'tick__id' | 'tick__index' | 'tick__createdTimestamp' | 'tick__createdBlockNumber' | 'tick__liquidityGross' | 'tick__liquidityGrossUSD' | 'tick__liquidityNet' | 'tick__liquidityNetUSD' | 'tick__lastSnapshotDayID' | 'tick__lastSnapshotHourID' | 'tick__lastUpdateTimestamp' | 'tick__lastUpdateBlockNumber' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'liquidityGross' | 'liquidityGrossUSD' | 'liquidityNet' | 'liquidityNetUSD' | 'timestamp' | 'blockNumber';
export type Tick_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    createdTimestamp?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdBlockNumber?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    prices?: InputMaybe<Array<Scalars['BigDecimal']>>;
    prices_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    prices_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    prices_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    prices_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    prices_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityGross?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
    liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityGrossUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityGrossUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityNet?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
    liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidityNetUSD?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidityNetUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastSnapshotDayID?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_not?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']>;
    lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotHourID?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_not?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_gt?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_lt?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_gte?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_lte?: InputMaybe<Scalars['Int']>;
    lastSnapshotHourID_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
};
export type Tick_orderBy = 'id' | 'index' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'createdTimestamp' | 'createdBlockNumber' | 'prices' | 'liquidityGross' | 'liquidityGrossUSD' | 'liquidityNet' | 'liquidityNetUSD' | 'lastSnapshotDayID' | 'lastSnapshotHourID' | 'lastUpdateTimestamp' | 'lastUpdateBlockNumber';
export type Token = {
    /**  Smart contract address of the token  */
    id: Scalars['Bytes'];
    /**  Name of the token, mirrored from the smart contract  */
    name: Scalars['String'];
    /**  Symbol of the token, mirrored from the smart contract  */
    symbol: Scalars['String'];
    /**  The number of decimal places this token uses, default to 18  */
    decimals: Scalars['Int'];
    /**  Optional field to track the price of a token, mostly for caching purposes  */
    lastPriceUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Optional field to track the block number of the last token price  */
    lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
};
export type TokenType = 'MULTIPLE' | 'UNKNOWN' | 'ERC20' | 'ERC721' | 'ERC1155' | 'BEP20' | 'BEP721' | 'BEP1155';
export type Token_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    name?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol?: InputMaybe<Scalars['String']>;
    symbol_not?: InputMaybe<Scalars['String']>;
    symbol_gt?: InputMaybe<Scalars['String']>;
    symbol_lt?: InputMaybe<Scalars['String']>;
    symbol_gte?: InputMaybe<Scalars['String']>;
    symbol_lte?: InputMaybe<Scalars['String']>;
    symbol_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_contains?: InputMaybe<Scalars['String']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_contains?: InputMaybe<Scalars['String']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_starts_with?: InputMaybe<Scalars['String']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_ends_with?: InputMaybe<Scalars['String']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    decimals?: InputMaybe<Scalars['Int']>;
    decimals_not?: InputMaybe<Scalars['Int']>;
    decimals_gt?: InputMaybe<Scalars['Int']>;
    decimals_lt?: InputMaybe<Scalars['Int']>;
    decimals_gte?: InputMaybe<Scalars['Int']>;
    decimals_lte?: InputMaybe<Scalars['Int']>;
    decimals_in?: InputMaybe<Array<Scalars['Int']>>;
    decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};
export type Token_orderBy = 'id' | 'name' | 'symbol' | 'decimals' | 'lastPriceUSD' | 'lastPriceBlockNumber';
export type UsageMetricsDailySnapshot = {
    /**  ID is # of days since Unix epoch time  */
    id: Scalars['Bytes'];
    /**  Number of days since Unix epoch time  */
    day: Scalars['Int'];
    /**  Protocol this snapshot is associated with  */
    protocol: DexAmmProtocol;
    /**  Number of unique daily active users  */
    dailyActiveUsers: Scalars['Int'];
    /**  Number of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int'];
    /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
    dailyTransactionCount: Scalars['Int'];
    /**  Total number of pools  */
    totalPoolCount: Scalars['Int'];
    /**  Total number of deposits (add liquidity) in an day  */
    dailyDepositCount: Scalars['Int'];
    /**  Total number of withdrawals (remove liquidity) in an day  */
    dailyWithdrawCount: Scalars['Int'];
    /**  Total number of trades (swaps) in an day  */
    dailySwapCount: Scalars['Int'];
    /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    timestamp: Scalars['BigInt'];
    /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    blockNumber: Scalars['BigInt'];
};
export type UsageMetricsDailySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['Int']>;
    day_not?: InputMaybe<Scalars['Int']>;
    day_gt?: InputMaybe<Scalars['Int']>;
    day_lt?: InputMaybe<Scalars['Int']>;
    day_gte?: InputMaybe<Scalars['Int']>;
    day_lte?: InputMaybe<Scalars['Int']>;
    day_in?: InputMaybe<Array<Scalars['Int']>>;
    day_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    dailyActiveUsers?: InputMaybe<Scalars['Int']>;
    dailyActiveUsers_not?: InputMaybe<Scalars['Int']>;
    dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
    dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
    dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
    dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
    dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyTransactionCount?: InputMaybe<Scalars['Int']>;
    dailyTransactionCount_not?: InputMaybe<Scalars['Int']>;
    dailyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
    dailyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
    dailyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
    dailyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
    dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPoolCount?: InputMaybe<Scalars['Int']>;
    totalPoolCount_not?: InputMaybe<Scalars['Int']>;
    totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
    totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
    totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
    totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
    totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyDepositCount?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_not?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_gt?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_lt?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_gte?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_lte?: InputMaybe<Scalars['Int']>;
    dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyWithdrawCount?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
    dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailySwapCount?: InputMaybe<Scalars['Int']>;
    dailySwapCount_not?: InputMaybe<Scalars['Int']>;
    dailySwapCount_gt?: InputMaybe<Scalars['Int']>;
    dailySwapCount_lt?: InputMaybe<Scalars['Int']>;
    dailySwapCount_gte?: InputMaybe<Scalars['Int']>;
    dailySwapCount_lte?: InputMaybe<Scalars['Int']>;
    dailySwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
};
export type UsageMetricsDailySnapshot_orderBy = 'id' | 'day' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'dailyActiveUsers' | 'cumulativeUniqueUsers' | 'dailyTransactionCount' | 'totalPoolCount' | 'dailyDepositCount' | 'dailyWithdrawCount' | 'dailySwapCount' | 'timestamp' | 'blockNumber';
export type UsageMetricsHourlySnapshot = {
    /**  { # of hours since Unix epoch time }  */
    id: Scalars['Bytes'];
    /**  Number of hours since Unix epoch time  */
    hour: Scalars['Int'];
    /**  Protocol this snapshot is associated with  */
    protocol: DexAmmProtocol;
    /**  Number of unique hourly active users  */
    hourlyActiveUsers: Scalars['Int'];
    /**  Number of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int'];
    /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
    hourlyTransactionCount: Scalars['Int'];
    /**  Total number of deposits (add liquidity) in an hour  */
    hourlyDepositCount: Scalars['Int'];
    /**  Total number of withdrawals (remove liquidity) in an hour  */
    hourlyWithdrawCount: Scalars['Int'];
    /**  Total number of trades (swaps) in an hour  */
    hourlySwapCount: Scalars['Int'];
    /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    timestamp: Scalars['BigInt'];
    /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
    blockNumber: Scalars['BigInt'];
};
export type UsageMetricsHourlySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hour?: InputMaybe<Scalars['Int']>;
    hour_not?: InputMaybe<Scalars['Int']>;
    hour_gt?: InputMaybe<Scalars['Int']>;
    hour_lt?: InputMaybe<Scalars['Int']>;
    hour_gte?: InputMaybe<Scalars['Int']>;
    hour_lte?: InputMaybe<Scalars['Int']>;
    hour_in?: InputMaybe<Array<Scalars['Int']>>;
    hour_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    hourlyActiveUsers?: InputMaybe<Scalars['Int']>;
    hourlyActiveUsers_not?: InputMaybe<Scalars['Int']>;
    hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
    hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
    hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
    hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
    hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyTransactionCount?: InputMaybe<Scalars['Int']>;
    hourlyTransactionCount_not?: InputMaybe<Scalars['Int']>;
    hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
    hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
    hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
    hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
    hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyDepositCount?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_not?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>;
    hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyWithdrawCount?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
    hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlySwapCount?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_not?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_gt?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_lt?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_gte?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_lte?: InputMaybe<Scalars['Int']>;
    hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_filter>>>;
};
export type UsageMetricsHourlySnapshot_orderBy = 'id' | 'hour' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'hourlyActiveUsers' | 'cumulativeUniqueUsers' | 'hourlyTransactionCount' | 'hourlyDepositCount' | 'hourlyWithdrawCount' | 'hourlySwapCount' | 'timestamp' | 'blockNumber';
export type Withdraw = {
    /**  { Transaction hash }-{ Log index } */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
    /**  Nonce of the transaction that emitted this event  */
    nonce: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  Gas limit of the transaction that emitted this event  */
    gasLimit?: Maybe<Scalars['BigInt']>;
    /**  Gas used in this transaction. (Optional because not every chain will support this)  */
    gasUsed?: Maybe<Scalars['BigInt']>;
    /**  Gas price of the transaction that emitted this event  */
    gasPrice?: Maybe<Scalars['BigInt']>;
    /**  The protocol this transaction belongs to  */
    protocol: DexAmmProtocol;
    /**  Account that emitted this event  */
    account: Account;
    /**  The user position changed by this event  */
    position?: Maybe<Position>;
    /**  lower tick of position  */
    tickLower?: Maybe<Scalars['BigInt']>;
    /**  upper tick of position  */
    tickUpper?: Maybe<Scalars['BigInt']>;
    /**  The pool involving this event  */
    pool: LiquidityPool;
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  Amount of liquidity burned  */
    liquidity: Scalars['BigInt'];
    /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
    inputTokens: Array<Token>;
    /**  Amount of input tokens in the token's native unit  */
    inputTokenAmounts: Array<Scalars['BigInt']>;
    /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens withdrawn from a pool)  */
    amountUSD: Scalars['BigDecimal'];
};
export type WithdrawinputTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
};
export type Withdraw_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
    nonce?: InputMaybe<Scalars['BigInt']>;
    nonce_not?: InputMaybe<Scalars['BigInt']>;
    nonce_gt?: InputMaybe<Scalars['BigInt']>;
    nonce_lt?: InputMaybe<Scalars['BigInt']>;
    nonce_gte?: InputMaybe<Scalars['BigInt']>;
    nonce_lte?: InputMaybe<Scalars['BigInt']>;
    nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
    nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    gasLimit?: InputMaybe<Scalars['BigInt']>;
    gasLimit_not?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed?: InputMaybe<Scalars['BigInt']>;
    gasUsed_not?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice?: InputMaybe<Scalars['BigInt']>;
    gasPrice_not?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<DexAmmProtocol_filter>;
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<Account_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    tickLower?: InputMaybe<Scalars['BigInt']>;
    tickLower_not?: InputMaybe<Scalars['BigInt']>;
    tickLower_gt?: InputMaybe<Scalars['BigInt']>;
    tickLower_lt?: InputMaybe<Scalars['BigInt']>;
    tickLower_gte?: InputMaybe<Scalars['BigInt']>;
    tickLower_lte?: InputMaybe<Scalars['BigInt']>;
    tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tickUpper?: InputMaybe<Scalars['BigInt']>;
    tickUpper_not?: InputMaybe<Scalars['BigInt']>;
    tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
    tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
    tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
    tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
    tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pool?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<LiquidityPool_filter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidity?: InputMaybe<Scalars['BigInt']>;
    liquidity_not?: InputMaybe<Scalars['BigInt']>;
    liquidity_gt?: InputMaybe<Scalars['BigInt']>;
    liquidity_lt?: InputMaybe<Scalars['BigInt']>;
    liquidity_gte?: InputMaybe<Scalars['BigInt']>;
    liquidity_lte?: InputMaybe<Scalars['BigInt']>;
    liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokens?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_?: InputMaybe<Token_filter>;
    inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUSD?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
};
export type Withdraw_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasLimit' | 'gasUsed' | 'gasPrice' | 'protocol' | 'protocol__id' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__totalValueLockedUSD' | 'protocol__totalLiquidityUSD' | 'protocol__activeLiquidityUSD' | 'protocol__uncollectedProtocolSideValueUSD' | 'protocol__uncollectedSupplySideValueUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeVolumeUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueLPs' | 'protocol__cumulativeUniqueTraders' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__lastSnapshotDayID' | 'protocol__lastUpdateTimestamp' | 'protocol__lastUpdateBlockNumber' | 'protocol___regenesis' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__swapCount' | 'account___newUser' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__liquidityTokenType' | 'position__liquidity' | 'position__liquidityUSD' | 'position__cumulativeDepositUSD' | 'position__cumulativeWithdrawUSD' | 'position__depositCount' | 'position__withdrawCount' | 'tickLower' | 'tickUpper' | 'pool' | 'pool__id' | 'pool__name' | 'pool__symbol' | 'pool__liquidityTokenType' | 'pool__isSingleSided' | 'pool__createdTimestamp' | 'pool__createdBlockNumber' | 'pool__tick' | 'pool__totalValueLockedUSD' | 'pool__totalLiquidity' | 'pool__totalLiquidityUSD' | 'pool__activeLiquidity' | 'pool__activeLiquidityUSD' | 'pool__cumulativeSupplySideRevenueUSD' | 'pool__cumulativeProtocolSideRevenueUSD' | 'pool__cumulativeTotalRevenueUSD' | 'pool__cumulativeVolumeUSD' | 'pool__stakedOutputTokenAmount' | 'pool__cumulativeDepositCount' | 'pool__cumulativeWithdrawCount' | 'pool__cumulativeSwapCount' | 'pool__positionCount' | 'pool__openPositionCount' | 'pool__closedPositionCount' | 'pool__lastSnapshotDayID' | 'pool__lastSnapshotHourID' | 'pool__lastUpdateTimestamp' | 'pool__lastUpdateBlockNumber' | 'blockNumber' | 'timestamp' | 'liquidity' | 'inputTokens' | 'inputTokenAmounts' | 'amountUSD';
export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
};
/**   Used to keep track of the price of Ether/TVL in USD, pool deposit count, and total unique users  */
export type _HelperStore = {
    id: Scalars['Bytes'];
    /**  Token Prices  */
    valueDecimalList?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  price of ETH/TVL in USD  */
    valueDecimal?: Maybe<Scalars['BigDecimal']>;
    /**  # of deposits, # of unique users  */
    valueInt?: Maybe<Scalars['Int']>;
};
export type _HelperStore_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    valueDecimalList?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueDecimalList_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueDecimalList_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueDecimalList_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueDecimalList_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueDecimalList_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueDecimal?: InputMaybe<Scalars['BigDecimal']>;
    valueDecimal_not?: InputMaybe<Scalars['BigDecimal']>;
    valueDecimal_gt?: InputMaybe<Scalars['BigDecimal']>;
    valueDecimal_lt?: InputMaybe<Scalars['BigDecimal']>;
    valueDecimal_gte?: InputMaybe<Scalars['BigDecimal']>;
    valueDecimal_lte?: InputMaybe<Scalars['BigDecimal']>;
    valueDecimal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueDecimal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    valueInt?: InputMaybe<Scalars['Int']>;
    valueInt_not?: InputMaybe<Scalars['Int']>;
    valueInt_gt?: InputMaybe<Scalars['Int']>;
    valueInt_lt?: InputMaybe<Scalars['Int']>;
    valueInt_gte?: InputMaybe<Scalars['Int']>;
    valueInt_lte?: InputMaybe<Scalars['Int']>;
    valueInt_in?: InputMaybe<Array<Scalars['Int']>>;
    valueInt_not_in?: InputMaybe<Array<Scalars['Int']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<_HelperStore_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_HelperStore_filter>>>;
};
export type _HelperStore_orderBy = 'id' | 'valueDecimalList' | 'valueDecimal' | 'valueInt';
export type _LiquidityPoolAmount = {
    /**  Smart contract address of the pool  */
    id: Scalars['Bytes'];
    /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
    inputTokens: Array<Token>;
    /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalances: Array<Scalars['BigDecimal']>;
    tokenPrices: Array<Scalars['BigDecimal']>;
};
export type _LiquidityPoolAmountinputTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
};
export type _LiquidityPoolAmount_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    inputTokens?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    inputTokens_?: InputMaybe<Token_filter>;
    inputTokenBalances?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tokenPrices?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tokenPrices_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tokenPrices_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tokenPrices_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tokenPrices_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    tokenPrices_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_filter>>>;
};
export type _LiquidityPoolAmount_orderBy = 'id' | 'inputTokens' | 'inputTokenBalances' | 'tokenPrices';
/** The type for the top-level _meta field */
export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export type _SubgraphErrorPolicy_ = 
/** Data will be returned even if the subgraph has indexing errors */
'allow'
/** If the subgraph has indexing errors, data will be omitted. The default. */
 | 'deny';
/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelist = {
    /**  Token Address  */
    id: Scalars['Bytes'];
    /**  pools token is in that are white listed for USD pricing  */
    whitelistPools: Array<LiquidityPool>;
};
/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelistwhitelistPoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<LiquidityPool_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<LiquidityPool_filter>;
};
export type _TokenWhitelist_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    whitelistPools?: InputMaybe<Array<Scalars['String']>>;
    whitelistPools_not?: InputMaybe<Array<Scalars['String']>>;
    whitelistPools_contains?: InputMaybe<Array<Scalars['String']>>;
    whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']>>;
    whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    whitelistPools_?: InputMaybe<LiquidityPool_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<_TokenWhitelist_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_TokenWhitelist_filter>>>;
};
export type _TokenWhitelist_orderBy = 'id' | 'whitelistPools';
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Account: ResolverTypeWrapper<Account>;
    Account_filter: Account_filter;
    Account_orderBy: Account_orderBy;
    ActiveAccount: ResolverTypeWrapper<ActiveAccount>;
    ActiveAccount_filter: ActiveAccount_filter;
    ActiveAccount_orderBy: ActiveAccount_orderBy;
    BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
    Deposit: ResolverTypeWrapper<Deposit>;
    Deposit_filter: Deposit_filter;
    Deposit_orderBy: Deposit_orderBy;
    DexAmmProtocol: ResolverTypeWrapper<DexAmmProtocol>;
    DexAmmProtocol_filter: DexAmmProtocol_filter;
    DexAmmProtocol_orderBy: DexAmmProtocol_orderBy;
    FinancialsDailySnapshot: ResolverTypeWrapper<FinancialsDailySnapshot>;
    FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
    FinancialsDailySnapshot_orderBy: FinancialsDailySnapshot_orderBy;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    LiquidityPool: ResolverTypeWrapper<LiquidityPool>;
    LiquidityPoolDailySnapshot: ResolverTypeWrapper<LiquidityPoolDailySnapshot>;
    LiquidityPoolDailySnapshot_filter: LiquidityPoolDailySnapshot_filter;
    LiquidityPoolDailySnapshot_orderBy: LiquidityPoolDailySnapshot_orderBy;
    LiquidityPoolFee: ResolverTypeWrapper<LiquidityPoolFee>;
    LiquidityPoolFeeType: LiquidityPoolFeeType;
    LiquidityPoolFee_filter: LiquidityPoolFee_filter;
    LiquidityPoolFee_orderBy: LiquidityPoolFee_orderBy;
    LiquidityPoolHourlySnapshot: ResolverTypeWrapper<LiquidityPoolHourlySnapshot>;
    LiquidityPoolHourlySnapshot_filter: LiquidityPoolHourlySnapshot_filter;
    LiquidityPoolHourlySnapshot_orderBy: LiquidityPoolHourlySnapshot_orderBy;
    LiquidityPool_filter: LiquidityPool_filter;
    LiquidityPool_orderBy: LiquidityPool_orderBy;
    Network: Network;
    OrderDirection: OrderDirection;
    Position: ResolverTypeWrapper<Position>;
    PositionSnapshot: ResolverTypeWrapper<PositionSnapshot>;
    PositionSnapshot_filter: PositionSnapshot_filter;
    PositionSnapshot_orderBy: PositionSnapshot_orderBy;
    Position_filter: Position_filter;
    Position_orderBy: Position_orderBy;
    Protocol: ResolversTypes['DexAmmProtocol'];
    ProtocolType: ProtocolType;
    Protocol_filter: Protocol_filter;
    Protocol_orderBy: Protocol_orderBy;
    Query: ResolverTypeWrapper<{}>;
    RewardToken: ResolverTypeWrapper<RewardToken>;
    RewardTokenType: RewardTokenType;
    RewardToken_filter: RewardToken_filter;
    RewardToken_orderBy: RewardToken_orderBy;
    String: ResolverTypeWrapper<Scalars['String']>;
    Subscription: ResolverTypeWrapper<{}>;
    Swap: ResolverTypeWrapper<Swap>;
    Swap_filter: Swap_filter;
    Swap_orderBy: Swap_orderBy;
    Tick: ResolverTypeWrapper<Tick>;
    TickDailySnapshot: ResolverTypeWrapper<TickDailySnapshot>;
    TickDailySnapshot_filter: TickDailySnapshot_filter;
    TickDailySnapshot_orderBy: TickDailySnapshot_orderBy;
    TickHourlySnapshot: ResolverTypeWrapper<TickHourlySnapshot>;
    TickHourlySnapshot_filter: TickHourlySnapshot_filter;
    TickHourlySnapshot_orderBy: TickHourlySnapshot_orderBy;
    Tick_filter: Tick_filter;
    Tick_orderBy: Tick_orderBy;
    Token: ResolverTypeWrapper<Token>;
    TokenType: TokenType;
    Token_filter: Token_filter;
    Token_orderBy: Token_orderBy;
    UsageMetricsDailySnapshot: ResolverTypeWrapper<UsageMetricsDailySnapshot>;
    UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
    UsageMetricsDailySnapshot_orderBy: UsageMetricsDailySnapshot_orderBy;
    UsageMetricsHourlySnapshot: ResolverTypeWrapper<UsageMetricsHourlySnapshot>;
    UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
    UsageMetricsHourlySnapshot_orderBy: UsageMetricsHourlySnapshot_orderBy;
    Withdraw: ResolverTypeWrapper<Withdraw>;
    Withdraw_filter: Withdraw_filter;
    Withdraw_orderBy: Withdraw_orderBy;
    _Block_: ResolverTypeWrapper<_Block_>;
    _HelperStore: ResolverTypeWrapper<_HelperStore>;
    _HelperStore_filter: _HelperStore_filter;
    _HelperStore_orderBy: _HelperStore_orderBy;
    _LiquidityPoolAmount: ResolverTypeWrapper<_LiquidityPoolAmount>;
    _LiquidityPoolAmount_filter: _LiquidityPoolAmount_filter;
    _LiquidityPoolAmount_orderBy: _LiquidityPoolAmount_orderBy;
    _Meta_: ResolverTypeWrapper<_Meta_>;
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
    _TokenWhitelist: ResolverTypeWrapper<_TokenWhitelist>;
    _TokenWhitelist_filter: _TokenWhitelist_filter;
    _TokenWhitelist_orderBy: _TokenWhitelist_orderBy;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Account: Account;
    Account_filter: Account_filter;
    ActiveAccount: ActiveAccount;
    ActiveAccount_filter: ActiveAccount_filter;
    BigDecimal: Scalars['BigDecimal'];
    BigInt: Scalars['BigInt'];
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: Scalars['Boolean'];
    Bytes: Scalars['Bytes'];
    Deposit: Deposit;
    Deposit_filter: Deposit_filter;
    DexAmmProtocol: DexAmmProtocol;
    DexAmmProtocol_filter: DexAmmProtocol_filter;
    FinancialsDailySnapshot: FinancialsDailySnapshot;
    FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    Int: Scalars['Int'];
    LiquidityPool: LiquidityPool;
    LiquidityPoolDailySnapshot: LiquidityPoolDailySnapshot;
    LiquidityPoolDailySnapshot_filter: LiquidityPoolDailySnapshot_filter;
    LiquidityPoolFee: LiquidityPoolFee;
    LiquidityPoolFee_filter: LiquidityPoolFee_filter;
    LiquidityPoolHourlySnapshot: LiquidityPoolHourlySnapshot;
    LiquidityPoolHourlySnapshot_filter: LiquidityPoolHourlySnapshot_filter;
    LiquidityPool_filter: LiquidityPool_filter;
    Position: Position;
    PositionSnapshot: PositionSnapshot;
    PositionSnapshot_filter: PositionSnapshot_filter;
    Position_filter: Position_filter;
    Protocol: ResolversParentTypes['DexAmmProtocol'];
    Protocol_filter: Protocol_filter;
    Query: {};
    RewardToken: RewardToken;
    RewardToken_filter: RewardToken_filter;
    String: Scalars['String'];
    Subscription: {};
    Swap: Swap;
    Swap_filter: Swap_filter;
    Tick: Tick;
    TickDailySnapshot: TickDailySnapshot;
    TickDailySnapshot_filter: TickDailySnapshot_filter;
    TickHourlySnapshot: TickHourlySnapshot;
    TickHourlySnapshot_filter: TickHourlySnapshot_filter;
    Tick_filter: Tick_filter;
    Token: Token;
    Token_filter: Token_filter;
    UsageMetricsDailySnapshot: UsageMetricsDailySnapshot;
    UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
    UsageMetricsHourlySnapshot: UsageMetricsHourlySnapshot;
    UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
    Withdraw: Withdraw;
    Withdraw_filter: Withdraw_filter;
    _Block_: _Block_;
    _HelperStore: _HelperStore;
    _HelperStore_filter: _HelperStore_filter;
    _LiquidityPoolAmount: _LiquidityPoolAmount;
    _LiquidityPoolAmount_filter: _LiquidityPoolAmount_filter;
    _Meta_: _Meta_;
    _TokenWhitelist: _TokenWhitelist;
    _TokenWhitelist_filter: _TokenWhitelist_filter;
}>;
export type entityDirectiveArgs = {};
export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type subgraphIdDirectiveArgs = {
    id: Scalars['String'];
};
export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type derivedFromDirectiveArgs = {
    field: Scalars['String'];
};
export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    positionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<AccountpositionsArgs, 'skip' | 'first'>>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    closedPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<AccountdepositsArgs, 'skip' | 'first'>>;
    withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<AccountwithdrawsArgs, 'skip' | 'first'>>;
    swapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<AccountswapsArgs, 'skip' | 'first'>>;
    _newUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActiveAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActiveAccount'] = ResolversParentTypes['ActiveAccount']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
    name: 'BigDecimal';
}
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
    name: 'Bytes';
}
export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    tickLower?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    tickUpper?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<DepositinputTokensArgs, 'skip' | 'first'>>;
    inputTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type DexAmmProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DexAmmProtocol'] = ResolversParentTypes['DexAmmProtocol']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    activeLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    uncollectedProtocolSideValueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    uncollectedSupplySideValueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueLPs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueTraders?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativePositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastSnapshotDayID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    lastUpdateBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<DexAmmProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
    hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<DexAmmProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
    financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<DexAmmProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
    pools?: Resolver<Array<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<DexAmmProtocolpoolsArgs, 'skip' | 'first'>>;
    _regenesis?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type FinancialsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FinancialsDailySnapshot'] = ResolversParentTypes['FinancialsDailySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    day?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    activeLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    uncollectedProtocolSideValueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    uncollectedSupplySideValueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LiquidityPoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPool'] = ResolversParentTypes['LiquidityPool']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    liquidityToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    liquidityTokenType?: Resolver<Maybe<ResolversTypes['TokenType']>, ParentType, ContextType>;
    inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<LiquidityPoolinputTokensArgs, 'skip' | 'first'>>;
    rewardTokens?: Resolver<Maybe<Array<ResolversTypes['RewardToken']>>, ParentType, ContextType, RequireFields<LiquidityPoolrewardTokensArgs, 'skip' | 'first'>>;
    fees?: Resolver<Array<ResolversTypes['LiquidityPoolFee']>, ParentType, ContextType, RequireFields<LiquidityPoolfeesArgs, 'skip' | 'first'>>;
    isSingleSided?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    createdBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    activeLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    activeLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    uncollectedProtocolSideTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    uncollectedProtocolSideValuesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    uncollectedSupplySideTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    uncollectedSupplySideValuesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeVolumeTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    cumulativeVolumesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    inputTokenBalancesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    cumulativeDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeSwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<LiquidityPoolpositionsArgs, 'skip' | 'first'>>;
    positionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    closedPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastSnapshotDayID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastSnapshotHourID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    lastUpdateBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    dailySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolDailySnapshot']>, ParentType, ContextType, RequireFields<LiquidityPooldailySnapshotsArgs, 'skip' | 'first'>>;
    hourlySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolHourlySnapshot']>, ParentType, ContextType, RequireFields<LiquidityPoolhourlySnapshotsArgs, 'skip' | 'first'>>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<LiquidityPooldepositsArgs, 'skip' | 'first'>>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<LiquidityPoolwithdrawsArgs, 'skip' | 'first'>>;
    swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<LiquidityPoolswapsArgs, 'skip' | 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LiquidityPoolDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPoolDailySnapshot'] = ResolversParentTypes['LiquidityPoolDailySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    day?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    activeLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    activeLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    uncollectedProtocolSideTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    uncollectedProtocolSideValuesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    uncollectedSupplySideTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    uncollectedSupplySideValuesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyTotalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeVolumeTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    dailyVolumeTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    cumulativeVolumesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    dailyVolumesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    inputTokenBalancesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    cumulativeDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeSwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    positionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    closedPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LiquidityPoolFeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPoolFee'] = ResolversParentTypes['LiquidityPoolFee']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    feePercentage?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    feeType?: Resolver<ResolversTypes['LiquidityPoolFeeType'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LiquidityPoolHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPoolHourlySnapshot'] = ResolversParentTypes['LiquidityPoolHourlySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    activeLiquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    activeLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    uncollectedProtocolSideTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    uncollectedProtocolSideValuesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    uncollectedSupplySideTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    uncollectedSupplySideValuesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyTotalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeVolumeTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    hourlyVolumeTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    cumulativeVolumesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    hourlyVolumesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    inputTokenBalancesUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    cumulativeDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeSwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    positionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    closedPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    hashOpened?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hashClosed?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    blockNumberOpened?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestampOpened?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumberClosed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    timestampClosed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    tickLower?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType>;
    tickUpper?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType>;
    liquidityToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    liquidityTokenType?: Resolver<Maybe<ResolversTypes['TokenType']>, ParentType, ContextType>;
    liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeDepositTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeWithdrawTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    cumulativeWithdrawUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeRewardUSD?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<PositiondepositsArgs, 'skip' | 'first'>>;
    withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<PositionwithdrawsArgs, 'skip' | 'first'>>;
    snapshots?: Resolver<Array<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<PositionsnapshotsArgs, 'skip' | 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type PositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionSnapshot'] = ResolversParentTypes['PositionSnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
    liquidityTokenType?: Resolver<Maybe<ResolversTypes['TokenType']>, ParentType, ContextType>;
    liquidity?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    liquidityUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeDepositTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeWithdrawTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    cumulativeWithdrawUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeRewardTokenAmounts?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    cumulativeRewardUSD?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = ResolversObject<{
    __resolveType: TypeResolveFn<'DexAmmProtocol', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
    hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<ProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
    financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
}>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
    tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    rewardToken?: Resolver<Maybe<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokenArgs, 'id' | 'subgraphError'>>;
    rewardTokens?: Resolver<Array<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolFee?: Resolver<Maybe<ResolversTypes['LiquidityPoolFee']>, ParentType, ContextType, RequireFields<QueryliquidityPoolFeeArgs, 'id' | 'subgraphError'>>;
    liquidityPoolFees?: Resolver<Array<ResolversTypes['LiquidityPoolFee']>, ParentType, ContextType, RequireFields<QueryliquidityPoolFeesArgs, 'skip' | 'first' | 'subgraphError'>>;
    dexAmmProtocol?: Resolver<Maybe<ResolversTypes['DexAmmProtocol']>, ParentType, ContextType, RequireFields<QuerydexAmmProtocolArgs, 'id' | 'subgraphError'>>;
    dexAmmProtocols?: Resolver<Array<ResolversTypes['DexAmmProtocol']>, ParentType, ContextType, RequireFields<QuerydexAmmProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsDailySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsDailySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsHourlySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsHourlySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    financialsDailySnapshot?: Resolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    financialsDailySnapshots?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPool?: Resolver<Maybe<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<QueryliquidityPoolArgs, 'id' | 'subgraphError'>>;
    liquidityPools?: Resolver<Array<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<QueryliquidityPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolDailySnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPoolDailySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolDailySnapshotArgs, 'id' | 'subgraphError'>>;
    liquidityPoolDailySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolDailySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolHourlySnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPoolHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    liquidityPoolHourlySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tick?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QuerytickArgs, 'id' | 'subgraphError'>>;
    ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QueryticksArgs, 'skip' | 'first' | 'subgraphError'>>;
    tickDailySnapshot?: Resolver<Maybe<ResolversTypes['TickDailySnapshot']>, ParentType, ContextType, RequireFields<QuerytickDailySnapshotArgs, 'id' | 'subgraphError'>>;
    tickDailySnapshots?: Resolver<Array<ResolversTypes['TickDailySnapshot']>, ParentType, ContextType, RequireFields<QuerytickDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tickHourlySnapshot?: Resolver<Maybe<ResolversTypes['TickHourlySnapshot']>, ParentType, ContextType, RequireFields<QuerytickHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    tickHourlySnapshots?: Resolver<Array<ResolversTypes['TickHourlySnapshot']>, ParentType, ContextType, RequireFields<QuerytickHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
    accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionArgs, 'id' | 'subgraphError'>>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
    positionSnapshot?: Resolver<Maybe<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotArgs, 'id' | 'subgraphError'>>;
    positionSnapshots?: Resolver<Array<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
    withdraw?: Resolver<Maybe<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
    swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
    swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
    activeAccount?: Resolver<Maybe<ResolversTypes['ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountArgs, 'id' | 'subgraphError'>>;
    activeAccounts?: Resolver<Array<ResolversTypes['ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolAmount?: Resolver<Maybe<ResolversTypes['_LiquidityPoolAmount']>, ParentType, ContextType, RequireFields<QueryliquidityPoolAmountArgs, 'id' | 'subgraphError'>>;
    liquidityPoolAmounts?: Resolver<Array<ResolversTypes['_LiquidityPoolAmount']>, ParentType, ContextType, RequireFields<QueryliquidityPoolAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    helperStore?: Resolver<Maybe<ResolversTypes['_HelperStore']>, ParentType, ContextType, RequireFields<QueryhelperStoreArgs, 'id' | 'subgraphError'>>;
    helperStores?: Resolver<Array<ResolversTypes['_HelperStore']>, ParentType, ContextType, RequireFields<QueryhelperStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
    tokenWhitelist?: Resolver<Maybe<ResolversTypes['_TokenWhitelist']>, ParentType, ContextType, RequireFields<QuerytokenWhitelistArgs, 'id' | 'subgraphError'>>;
    tokenWhitelists?: Resolver<Array<ResolversTypes['_TokenWhitelist']>, ParentType, ContextType, RequireFields<QuerytokenWhitelistsArgs, 'skip' | 'first' | 'subgraphError'>>;
    protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>>;
    protocols?: Resolver<Array<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;
export type RewardTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RewardToken'] = ResolversParentTypes['RewardToken']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['RewardTokenType'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
    token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
    tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    rewardToken?: SubscriptionResolver<Maybe<ResolversTypes['RewardToken']>, "rewardToken", ParentType, ContextType, RequireFields<SubscriptionrewardTokenArgs, 'id' | 'subgraphError'>>;
    rewardTokens?: SubscriptionResolver<Array<ResolversTypes['RewardToken']>, "rewardTokens", ParentType, ContextType, RequireFields<SubscriptionrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolFee?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPoolFee']>, "liquidityPoolFee", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolFeeArgs, 'id' | 'subgraphError'>>;
    liquidityPoolFees?: SubscriptionResolver<Array<ResolversTypes['LiquidityPoolFee']>, "liquidityPoolFees", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolFeesArgs, 'skip' | 'first' | 'subgraphError'>>;
    dexAmmProtocol?: SubscriptionResolver<Maybe<ResolversTypes['DexAmmProtocol']>, "dexAmmProtocol", ParentType, ContextType, RequireFields<SubscriptiondexAmmProtocolArgs, 'id' | 'subgraphError'>>;
    dexAmmProtocols?: SubscriptionResolver<Array<ResolversTypes['DexAmmProtocol']>, "dexAmmProtocols", ParentType, ContextType, RequireFields<SubscriptiondexAmmProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    financialsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    financialsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPool?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPool']>, "liquidityPool", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolArgs, 'id' | 'subgraphError'>>;
    liquidityPools?: SubscriptionResolver<Array<ResolversTypes['LiquidityPool']>, "liquidityPools", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPoolDailySnapshot']>, "liquidityPoolDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolDailySnapshotArgs, 'id' | 'subgraphError'>>;
    liquidityPoolDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPoolDailySnapshot']>, "liquidityPoolDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPoolHourlySnapshot']>, "liquidityPoolHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    liquidityPoolHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPoolHourlySnapshot']>, "liquidityPoolHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tick?: SubscriptionResolver<Maybe<ResolversTypes['Tick']>, "tick", ParentType, ContextType, RequireFields<SubscriptiontickArgs, 'id' | 'subgraphError'>>;
    ticks?: SubscriptionResolver<Array<ResolversTypes['Tick']>, "ticks", ParentType, ContextType, RequireFields<SubscriptionticksArgs, 'skip' | 'first' | 'subgraphError'>>;
    tickDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['TickDailySnapshot']>, "tickDailySnapshot", ParentType, ContextType, RequireFields<SubscriptiontickDailySnapshotArgs, 'id' | 'subgraphError'>>;
    tickDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['TickDailySnapshot']>, "tickDailySnapshots", ParentType, ContextType, RequireFields<SubscriptiontickDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    tickHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['TickHourlySnapshot']>, "tickHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptiontickHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    tickHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['TickHourlySnapshot']>, "tickHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptiontickHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
    accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    position?: SubscriptionResolver<Maybe<ResolversTypes['Position']>, "position", ParentType, ContextType, RequireFields<SubscriptionpositionArgs, 'id' | 'subgraphError'>>;
    positions?: SubscriptionResolver<Array<ResolversTypes['Position']>, "positions", ParentType, ContextType, RequireFields<SubscriptionpositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
    positionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['PositionSnapshot']>, "positionSnapshot", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotArgs, 'id' | 'subgraphError'>>;
    positionSnapshots?: SubscriptionResolver<Array<ResolversTypes['PositionSnapshot']>, "positionSnapshots", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "deposit", ParentType, ContextType, RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>>;
    deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "deposits", ParentType, ContextType, RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
    withdraw?: SubscriptionResolver<Maybe<ResolversTypes['Withdraw']>, "withdraw", ParentType, ContextType, RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>>;
    withdraws?: SubscriptionResolver<Array<ResolversTypes['Withdraw']>, "withdraws", ParentType, ContextType, RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
    swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
    swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
    activeAccount?: SubscriptionResolver<Maybe<ResolversTypes['ActiveAccount']>, "activeAccount", ParentType, ContextType, RequireFields<SubscriptionactiveAccountArgs, 'id' | 'subgraphError'>>;
    activeAccounts?: SubscriptionResolver<Array<ResolversTypes['ActiveAccount']>, "activeAccounts", ParentType, ContextType, RequireFields<SubscriptionactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidityPoolAmount?: SubscriptionResolver<Maybe<ResolversTypes['_LiquidityPoolAmount']>, "liquidityPoolAmount", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolAmountArgs, 'id' | 'subgraphError'>>;
    liquidityPoolAmounts?: SubscriptionResolver<Array<ResolversTypes['_LiquidityPoolAmount']>, "liquidityPoolAmounts", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    helperStore?: SubscriptionResolver<Maybe<ResolversTypes['_HelperStore']>, "helperStore", ParentType, ContextType, RequireFields<SubscriptionhelperStoreArgs, 'id' | 'subgraphError'>>;
    helperStores?: SubscriptionResolver<Array<ResolversTypes['_HelperStore']>, "helperStores", ParentType, ContextType, RequireFields<SubscriptionhelperStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
    tokenWhitelist?: SubscriptionResolver<Maybe<ResolversTypes['_TokenWhitelist']>, "tokenWhitelist", ParentType, ContextType, RequireFields<SubscriptiontokenWhitelistArgs, 'id' | 'subgraphError'>>;
    tokenWhitelists?: SubscriptionResolver<Array<ResolversTypes['_TokenWhitelist']>, "tokenWhitelists", ParentType, ContextType, RequireFields<SubscriptiontokenWhitelistsArgs, 'skip' | 'first' | 'subgraphError'>>;
    protocol?: SubscriptionResolver<Maybe<ResolversTypes['Protocol']>, "protocol", ParentType, ContextType, RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>>;
    protocols?: SubscriptionResolver<Array<ResolversTypes['Protocol']>, "protocols", ParentType, ContextType, RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;
export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    tokenIn?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amountIn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountInUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    tokenOut?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amountOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountOutUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TickResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tick'] = ResolversParentTypes['Tick']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    index?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    createdBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    prices?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidityGrossUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidityNetUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    lastSnapshotDayID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastSnapshotHourID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    lastUpdateBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TickDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TickDailySnapshot'] = ResolversParentTypes['TickDailySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    day?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidityGrossUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidityNetUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TickHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TickHourlySnapshot'] = ResolversParentTypes['TickHourlySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidityGrossUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidityNetUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    lastPriceBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UsageMetricsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsDailySnapshot'] = ResolversParentTypes['UsageMetricsDailySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    day?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    dailyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UsageMetricsHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsHourlySnapshot'] = ResolversParentTypes['UsageMetricsHourlySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    hourlyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type WithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
    tickLower?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    tickUpper?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<WithdrawinputTokensArgs, 'skip' | 'first'>>;
    inputTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
    hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _HelperStoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_HelperStore'] = ResolversParentTypes['_HelperStore']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    valueDecimalList?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    valueDecimal?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    valueInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _LiquidityPoolAmountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_LiquidityPoolAmount'] = ResolversParentTypes['_LiquidityPoolAmount']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<_LiquidityPoolAmountinputTokensArgs, 'skip' | 'first'>>;
    inputTokenBalances?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    tokenPrices?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
    block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
    deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _TokenWhitelistResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_TokenWhitelist'] = ResolversParentTypes['_TokenWhitelist']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    whitelistPools?: Resolver<Array<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<_TokenWhitelistwhitelistPoolsArgs, 'skip' | 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Account?: AccountResolvers<ContextType>;
    ActiveAccount?: ActiveAccountResolvers<ContextType>;
    BigDecimal?: GraphQLScalarType;
    BigInt?: GraphQLScalarType;
    Bytes?: GraphQLScalarType;
    Deposit?: DepositResolvers<ContextType>;
    DexAmmProtocol?: DexAmmProtocolResolvers<ContextType>;
    FinancialsDailySnapshot?: FinancialsDailySnapshotResolvers<ContextType>;
    LiquidityPool?: LiquidityPoolResolvers<ContextType>;
    LiquidityPoolDailySnapshot?: LiquidityPoolDailySnapshotResolvers<ContextType>;
    LiquidityPoolFee?: LiquidityPoolFeeResolvers<ContextType>;
    LiquidityPoolHourlySnapshot?: LiquidityPoolHourlySnapshotResolvers<ContextType>;
    Position?: PositionResolvers<ContextType>;
    PositionSnapshot?: PositionSnapshotResolvers<ContextType>;
    Protocol?: ProtocolResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    RewardToken?: RewardTokenResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    Swap?: SwapResolvers<ContextType>;
    Tick?: TickResolvers<ContextType>;
    TickDailySnapshot?: TickDailySnapshotResolvers<ContextType>;
    TickHourlySnapshot?: TickHourlySnapshotResolvers<ContextType>;
    Token?: TokenResolvers<ContextType>;
    UsageMetricsDailySnapshot?: UsageMetricsDailySnapshotResolvers<ContextType>;
    UsageMetricsHourlySnapshot?: UsageMetricsHourlySnapshotResolvers<ContextType>;
    Withdraw?: WithdrawResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _HelperStore?: _HelperStoreResolvers<ContextType>;
    _LiquidityPoolAmount?: _LiquidityPoolAmountResolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
    _TokenWhitelist?: _TokenWhitelistResolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    entity?: entityDirectiveResolver<any, any, ContextType>;
    subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
    derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = UniswapV3CeloTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare function getBuiltGraphClient(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
