import { ExtractPropTypes } from 'vue'


export const fooProps = {
    msg: {
        type: String,
        required: true,
        default: ''
    },
    btnText: {
        type: String,
        default: '提交'
    }
}

export type FooTypes = ExtractPropTypes<typeof fooProps>