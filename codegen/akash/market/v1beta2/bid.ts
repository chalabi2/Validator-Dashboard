import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** State is an enum which refers to state of bid */

export enum Bid_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,

  /** open - BidOpen denotes state for bid open */
  open = 1,

  /** active - BidMatched denotes state for bid open */
  active = 2,

  /** lost - BidLost denotes state for bid lost */
  lost = 3,

  /** closed - BidClosed denotes state for bid closed */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Bid_StateSDKType = Bid_State;
export function bid_StateFromJSON(object: any): Bid_State {
  switch (object) {
    case 0:
    case "invalid":
      return Bid_State.invalid;

    case 1:
    case "open":
      return Bid_State.open;

    case 2:
    case "active":
      return Bid_State.active;

    case 3:
    case "lost":
      return Bid_State.lost;

    case 4:
    case "closed":
      return Bid_State.closed;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Bid_State.UNRECOGNIZED;
  }
}
export function bid_StateToJSON(object: Bid_State): string {
  switch (object) {
    case Bid_State.invalid:
      return "invalid";

    case Bid_State.open:
      return "open";

    case Bid_State.active:
      return "active";

    case Bid_State.lost:
      return "lost";

    case Bid_State.closed:
      return "closed";

    case Bid_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateBid defines an SDK message for creating Bid */

export interface MsgCreateBid {
  order?: OrderID;
  provider: string;
  price?: DecCoin;
  deposit?: Coin;
}
/** MsgCreateBid defines an SDK message for creating Bid */

export interface MsgCreateBidSDKType {
  order?: OrderIDSDKType;
  provider: string;
  price?: DecCoinSDKType;
  deposit?: CoinSDKType;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */

export interface MsgCreateBidResponse {}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */

export interface MsgCreateBidResponseSDKType {}
/** MsgCloseBid defines an SDK message for closing bid */

export interface MsgCloseBid {
  bidId?: BidID;
}
/** MsgCloseBid defines an SDK message for closing bid */

export interface MsgCloseBidSDKType {
  bid_id?: BidIDSDKType;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */

export interface MsgCloseBidResponse {}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */

export interface MsgCloseBidResponseSDKType {}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */

export interface BidID {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */

export interface BidIDSDKType {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Bid stores BidID, state of bid and price */

export interface Bid {
  bidId?: BidID;
  state: Bid_State;
  price?: DecCoin;
  createdAt: Long;
}
/** Bid stores BidID, state of bid and price */

export interface BidSDKType {
  bid_id?: BidIDSDKType;
  state: Bid_State;
  price?: DecCoinSDKType;
  created_at: Long;
}
/** BidFilters defines flags for bid list filter */

export interface BidFilters {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
/** BidFilters defines flags for bid list filter */

export interface BidFiltersSDKType {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}

function createBaseMsgCreateBid(): MsgCreateBid {
  return {
    order: undefined,
    provider: "",
    price: undefined,
    deposit: undefined
  };
}

export const MsgCreateBid = {
  encode(message: MsgCreateBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }

    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = OrderID.decode(reader, reader.uint32());
          break;

        case 2:
          message.provider = reader.string();
          break;

        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    message.order = object.order !== undefined && object.order !== null ? OrderID.fromPartial(object.order) : undefined;
    message.provider = object.provider ?? "";
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  }

};

function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
  return {};
}

export const MsgCreateBidResponse = {
  encode(_: MsgCreateBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  }

};

function createBaseMsgCloseBid(): MsgCloseBid {
  return {
    bidId: undefined
  };
}

export const MsgCloseBid = {
  encode(message: MsgCloseBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCloseBid>): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  }

};

function createBaseMsgCloseBidResponse(): MsgCloseBidResponse {
  return {};
}

export const MsgCloseBidResponse = {
  encode(_: MsgCloseBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  }

};

function createBaseBidID(): BidID {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}

export const BidID = {
  encode(message: BidID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }

    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }

    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }

    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
          break;

        case 3:
          message.gseq = reader.uint32();
          break;

        case 4:
          message.oseq = reader.uint32();
          break;

        case 5:
          message.provider = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BidID>): BidID {
    const message = createBaseBidID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  }

};

function createBaseBid(): Bid {
  return {
    bidId: undefined,
    state: 0,
    price: undefined,
    createdAt: Long.ZERO
  };
}

export const Bid = {
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }

    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }

    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;

        case 2:
          message.state = (reader.int32() as any);
          break;

        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.createdAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  }

};

function createBaseBidFilters(): BidFilters {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}

export const BidFilters = {
  encode(message: BidFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }

    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }

    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }

    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }

    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidFilters();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
          break;

        case 3:
          message.gseq = reader.uint32();
          break;

        case 4:
          message.oseq = reader.uint32();
          break;

        case 5:
          message.provider = reader.string();
          break;

        case 6:
          message.state = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BidFilters>): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  }

};