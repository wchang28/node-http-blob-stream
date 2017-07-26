import {ApiCallOptions, ReadableContent} from 'rest-api-interfaces';
import * as $node from 'rest-node';
import {Readable} from 'stream';

export type Options = ApiCallOptions;
 
export function get(url: string, options?: Options) : Promise<ReadableContent<Readable>> {
	return $node.get().$B(url, {}, options)
	.then((ret: $node.RESTReturn) => {
		let type = ret.headers["content-type"];
		let contentLength = ret.headers["content-length"];
		let size = (contentLength ? parseInt(contentLength) : null);
		let readable: Readable = ret.data;
		return {info: {type, size}, readable};
	});
}