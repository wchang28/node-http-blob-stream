import {IError, ApiCallOptions} from 'rest-api-interfaces';
import * as $node from 'rest-node';
import {Readable} from 'stream';

export type Options = ApiCallOptions;
 
export function get(url: string, options?: Options) : Promise<Readable> {
	return $node.get().$B(url, {}, options).then((ret: $node.RESTReturn) => <Readable>(ret.data));
}