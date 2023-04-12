import { ExtractPropTypes } from 'vue'


export const fooProps = {
    msg: {
        type: String,
        required: true,
        default: ''
    }
}

export type FooTypes = ExtractPropTypes<typeof fooProps>