import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** ProviderInfo */

export interface ProviderInfo {
  email: string;
  website: string;
}
/** ProviderInfo */

export interface ProviderInfoSDKType {
  email: string;
  website: string;
}
/** MsgCreateProvider defines an SDK message for creating a provider */

export interface MsgCreateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}
/** MsgCreateProvider defines an SDK message for creating a provider */

export interface MsgCreateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info?: ProviderInfoSDKType;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */

export interface MsgCreateProviderResponse {}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */

export interface MsgCreateProviderResponseSDKType {}
/** MsgUpdateProvider defines an SDK message for updating a provider */

export interface MsgUpdateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */

export interface MsgUpdateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info?: ProviderInfoSDKType;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */

export interface MsgUpdateProviderResponse {}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */

export interface MsgUpdateProviderResponseSDKType {}
/** MsgDeleteProvider defines an SDK message for deleting a provider */

export interface MsgDeleteProvider {
  owner: string;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */

export interface MsgDeleteProviderSDKType {
  owner: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */

export interface MsgDeleteProviderResponse {}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */

export interface MsgDeleteProviderResponseSDKType {}
/** Provider stores owner and host details */

export interface Provider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}
/** Provider stores owner and host details */

export interface ProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info?: ProviderInfoSDKType;
}

function createBaseProviderInfo(): ProviderInfo {
  return {
    email: "",
    website: ""
  };
}

export const ProviderInfo = {
  encode(message: ProviderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }

    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;

        case 2:
          message.website = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProviderInfo>): ProviderInfo {
    const message = createBaseProviderInfo();
    message.email = object.email ?? "";
    message.website = object.website ?? "";
    return message;
  }

};

function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}

export const MsgCreateProvider = {
  encode(message: MsgCreateProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.hostUri = reader.string();
          break;

        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateProvider>): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  }

};

function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {};
}

export const MsgCreateProviderResponse = {
  encode(_: MsgCreateProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();

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

  fromPartial(_: DeepPartial<MsgCreateProviderResponse>): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  }

};

function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}

export const MsgUpdateProvider = {
  encode(message: MsgUpdateProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.hostUri = reader.string();
          break;

        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateProvider>): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  }

};

function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {};
}

export const MsgUpdateProviderResponse = {
  encode(_: MsgUpdateProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  }

};

function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    owner: ""
  };
}

export const MsgDeleteProvider = {
  encode(message: MsgDeleteProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteProvider>): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}

export const MsgDeleteProviderResponse = {
  encode(_: MsgDeleteProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  }

};

function createBaseProvider(): Provider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined
  };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.hostUri = reader.string();
          break;

        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  }

};