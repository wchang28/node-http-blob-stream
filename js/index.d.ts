/// <reference types="node" />
import { ApiCallOptions, ReadableContent } from 'rest-api-interfaces';
import { Readable } from 'stream';
export declare type Options = ApiCallOptions;
export declare function get(url: string, options?: Options): Promise<ReadableContent<Readable>>;
