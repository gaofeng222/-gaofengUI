/*
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 08:55:03
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 08:57:44
 * @FilePath: \@gaofengUI\packages\foo\src\types.ts
 * @Description: 
 */
import { ExtractPropTypes } from 'vue'


export const fooProps = {
    msg: {
        type: String,
        required: true,
        default: ''
    }
}

export type FooTypes = ExtractPropTypes<typeof fooProps>