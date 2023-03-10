import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryAccountRequest is request type for the Query/Account RPC method */

export interface QueryAccountsRequest {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequest;
}
/** QueryAccountRequest is request type for the Query/Account RPC method */

export interface QueryAccountsRequestSDKType {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */

export interface QueryAccountsResponse {
  accounts: Account[];
  pagination?: PageResponse;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */

export interface QueryAccountsResponseSDKType {
  accounts: AccountSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */

export interface QueryPaymentsRequest {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination?: PageRequest;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */

export interface QueryPaymentsRequestSDKType {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination?: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */

export interface QueryPaymentsResponse {
  payments: FractionalPayment[];
  pagination?: PageResponse;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */

export interface QueryPaymentsResponseSDKType {
  payments: FractionalPaymentSDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    scope: "",
    xid: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}

export const QueryAccountsRequest = {
  encode(message: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }

    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;

        case 2:
          message.xid = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        case 4:
          message.state = reader.string();
          break;

        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}

export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
  return {
    scope: "",
    xid: "",
    id: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}

export const QueryPaymentsRequest = {
  encode(message: QueryPaymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }

    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }

    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;

        case 2:
          message.xid = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.owner = reader.string();
          break;

        case 5:
          message.state = reader.string();
          break;

        case 6:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPaymentsRequest>): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
  return {
    payments: [],
    pagination: undefined
  };
}

export const QueryPaymentsResponse = {
  encode(message: QueryPaymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payments) {
      FractionalPayment.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.payments.push(FractionalPayment.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPaymentsResponse>): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => FractionalPayment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};