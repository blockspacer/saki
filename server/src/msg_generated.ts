// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum
 */
export enum Any{
  NONE= 0,
  Query= 1,
  Auth= 2,
  AuthRes= 3,
  QueryRes= 4,
  Insert= 5,
  InsertRes= 6
};

/**
 * @enum
 */
export enum AuthType{
  unauthenticated= 0,
  login= 1,
  signup= 2,
  token= 3
};

/**
 * @constructor
 */
export class Query {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Query}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Query {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Query=} obj
 * @returns {Query}
 */
static getRootAsQuery(bb:flatbuffers.ByteBuffer, obj?:Query):Query {
  return (obj || new Query).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
collection():string|null
collection(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
collection(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
limit():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
selector():string|null
selector(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
selector(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {boolean}
 */
single():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startQuery(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} collectionOffset
 */
static addCollection(builder:flatbuffers.Builder, collectionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, collectionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} limit
 */
static addLimit(builder:flatbuffers.Builder, limit:number) {
  builder.addFieldInt32(1, limit, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} selectorOffset
 */
static addSelector(builder:flatbuffers.Builder, selectorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, selectorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} single
 */
static addSingle(builder:flatbuffers.Builder, single:boolean) {
  builder.addFieldInt8(3, +single, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endQuery(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class Insert {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Insert}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Insert {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Insert=} obj
 * @returns {Insert}
 */
static getRootAsInsert(bb:flatbuffers.ByteBuffer, obj?:Insert):Insert {
  return (obj || new Insert).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @returns {number}
 */
data(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
dataLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
dataArray():Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startInsert(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
static addData(builder:flatbuffers.Builder, dataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
static createDataVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startDataVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endInsert(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class InsertRes {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {InsertRes}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):InsertRes {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {InsertRes=} obj
 * @returns {InsertRes}
 */
static getRootAsInsertRes(bb:flatbuffers.ByteBuffer, obj?:InsertRes):InsertRes {
  return (obj || new InsertRes).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {boolean}
 */
done():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startInsertRes(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} done
 */
static addDone(builder:flatbuffers.Builder, done:boolean) {
  builder.addFieldInt8(0, +done, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endInsertRes(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class QueryRes {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {QueryRes}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):QueryRes {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {QueryRes=} obj
 * @returns {QueryRes}
 */
static getRootAsQueryRes(bb:flatbuffers.ByteBuffer, obj?:QueryRes):QueryRes {
  return (obj || new QueryRes).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {boolean}
 */
done():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {number} index
 * @returns {number}
 */
data(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
dataLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
dataArray():Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
error():string|null
error(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
error(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startQueryRes(builder:flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} done
 */
static addDone(builder:flatbuffers.Builder, done:boolean) {
  builder.addFieldInt8(0, +done, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
static addData(builder:flatbuffers.Builder, dataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
static createDataVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startDataVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} errorOffset
 */
static addError(builder:flatbuffers.Builder, errorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, errorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endQueryRes(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class Auth {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Auth}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Auth {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Auth=} obj
 * @returns {Auth}
 */
static getRootAsAuth(bb:flatbuffers.ByteBuffer, obj?:Auth):Auth {
  return (obj || new Auth).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {AuthType}
 */
type():AuthType {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? /** @type {AuthType} */ (this.bb!.readInt8(this.bb_pos + offset)) : AuthType.unauthenticated;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
username():string|null
username(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
username(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
password():string|null
password(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
password(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
token():string|null
token(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
token(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startAuth(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {AuthType} type
 */
static addType(builder:flatbuffers.Builder, type:AuthType) {
  builder.addFieldInt8(0, type, AuthType.unauthenticated);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} usernameOffset
 */
static addUsername(builder:flatbuffers.Builder, usernameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, usernameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} passwordOffset
 */
static addPassword(builder:flatbuffers.Builder, passwordOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, passwordOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} tokenOffset
 */
static addToken(builder:flatbuffers.Builder, tokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, tokenOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endAuth(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class AuthRes {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {AuthRes}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):AuthRes {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {AuthRes=} obj
 * @returns {AuthRes}
 */
static getRootAsAuthRes(bb:flatbuffers.ByteBuffer, obj?:AuthRes):AuthRes {
  return (obj || new AuthRes).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
username():string|null
username(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
username(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
token():string|null
token(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
token(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
error():string|null
error(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
error(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startAuthRes(builder:flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} usernameOffset
 */
static addUsername(builder:flatbuffers.Builder, usernameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, usernameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} tokenOffset
 */
static addToken(builder:flatbuffers.Builder, tokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, tokenOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} errorOffset
 */
static addError(builder:flatbuffers.Builder, errorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, errorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endAuthRes(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
/**
 * @constructor
 */
export class Base {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Base}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Base {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Base=} obj
 * @returns {Base}
 */
static getRootAsBase(bb:flatbuffers.ByteBuffer, obj?:Base):Base {
  return (obj || new Base).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {Any}
 */
msgType():Any {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? /** @type {Any} */ (this.bb!.readUint8(this.bb_pos + offset)) : Any.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
msg<T extends flatbuffers.Table>(obj:T):T|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
user():string|null
user(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
user(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
requestId():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startBase(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Any} msgType
 */
static addMsgType(builder:flatbuffers.Builder, msgType:Any) {
  builder.addFieldInt8(0, msgType, Any.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} msgOffset
 */
static addMsg(builder:flatbuffers.Builder, msgOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, msgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userOffset
 */
static addUser(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, userOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} requestId
 */
static addRequestId(builder:flatbuffers.Builder, requestId:number) {
  builder.addFieldInt32(3, requestId, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endBase(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
static finishBaseBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

}
