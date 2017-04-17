import {IError, ApiCallOptions} from 'rest-api-interfaces';
import * as $node from 'rest-node';
import {Readable} from 'stream';

export type Options = ApiCallOptions;
 
export function get(url: string, options?: Options) : Promise<Readable> {
	return new Promise<Readable>((resolve: (value: Readable) => void, reject: (err: any) => void) => {
		$node.get().$B(url, (err:IError, rs:Readable, headers?:{[fld:string]:string}) => {
			if (err)
				reject(err);
			else
				resolve(rs);
		}, options);
	});
}