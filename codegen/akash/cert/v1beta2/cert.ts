import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** State is an enum which refers to state of deployment */

export enum Certificate_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,

  /** valid - CertificateValid denotes state for deployment active */
  valid = 1,

  /** revoked - CertificateRevoked denotes state for deployment closed */
  revoked = 2,
  UNRECOGNIZED = -1,
}
export const Certificate_StateSDKType = Certificate_State;
export function certificate_StateFromJSON(object: any): Certificate_State {
  switch (object) {
    case 0:
    case "invalid":
      return Certificate_State.invalid;

    case 1:
    case "valid":
      return Certificate_State.valid;

    case 2:
    case "revoked":
      return Certificate_State.revoked;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Certificate_State.UNRECOGNIZED;
  }
}
export function certificate_StateToJSON(object: Certificate_State): string {
  switch (object) {
    case Certificate_State.invalid:
      return "invalid";

    case Certificate_State.valid:
      return "valid";

    case Certificate_State.revoked:
      return "revoked";

    case Certificate_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CertificateID stores owner and sequence number */

export interface CertificateID {
  owner: string;
  serial: string;
}
/** CertificateID stores owner and sequence number */

export interface CertificateIDSDKType {
  owner: string;
  serial: string;
}
/** Certificate stores state, certificate and it's public key */

export interface Certificate {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** Certificate stores state, certificate and it's public key */

export interface CertificateSDKType {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */

export interface CertificateFilter {
  owner: string;
  serial: string;
  state: string;
}
/** CertificateFilter defines filters used to filter certificates */

export interface CertificateFilterSDKType {
  owner: string;
  serial: string;
  state: string;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */

export interface MsgCreateCertificate {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */

export interface MsgCreateCertificateSDKType {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */

export interface MsgCreateCertificateResponse {}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */

export interface MsgCreateCertificateResponseSDKType {}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */

export interface MsgRevokeCertificate {
  id?: CertificateID;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */

export interface MsgRevokeCertificateSDKType {
  id?: CertificateIDSDKType;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */

export interface MsgRevokeCertificateResponse {}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */

export interface MsgRevokeCertificateResponseSDKType {}

function createBaseCertificateID(): CertificateID {
  return {
    owner: "",
    serial: ""
  };
}

export const CertificateID = {
  encode(message: CertificateID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.serial = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CertificateID>): CertificateID {
    const message = createBaseCertificateID();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    return message;
  }

};

function createBaseCertificate(): Certificate {
  return {
    state: 0,
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}

export const Certificate = {
  encode(message: Certificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }

    if (message.cert.length !== 0) {
      writer.uint32(26).bytes(message.cert);
    }

    if (message.pubkey.length !== 0) {
      writer.uint32(34).bytes(message.pubkey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.state = (reader.int32() as any);
          break;

        case 3:
          message.cert = reader.bytes();
          break;

        case 4:
          message.pubkey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.state = object.state ?? 0;
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  }

};

function createBaseCertificateFilter(): CertificateFilter {
  return {
    owner: "",
    serial: "",
    state: ""
  };
}

export const CertificateFilter = {
  encode(message: CertificateFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }

    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateFilter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.serial = reader.string();
          break;

        case 3:
          message.state = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CertificateFilter>): CertificateFilter {
    const message = createBaseCertificateFilter();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    message.state = object.state ?? "";
    return message;
  }

};

function createBaseMsgCreateCertificate(): MsgCreateCertificate {
  return {
    owner: "",
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}

export const MsgCreateCertificate = {
  encode(message: MsgCreateCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }

    if (message.pubkey.length !== 0) {
      writer.uint32(26).bytes(message.pubkey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.cert = reader.bytes();
          break;

        case 3:
          message.pubkey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.owner = object.owner ?? "";
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return {};
}

export const MsgCreateCertificateResponse = {
  encode(_: MsgCreateCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificateResponse();

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

  fromPartial(_: DeepPartial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  }

};

function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return {
    id: undefined
  };
}

export const MsgRevokeCertificate = {
  encode(message: MsgRevokeCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = CertificateID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.id = object.id !== undefined && object.id !== null ? CertificateID.fromPartial(object.id) : undefined;
    return message;
  }

};

function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}

export const MsgRevokeCertificateResponse = {
  encode(_: MsgRevokeCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificateResponse();

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

  fromPartial(_: DeepPartial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  }

};