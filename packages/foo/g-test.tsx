import { defineComponent, h } from 'vue'
import { fooProps } from './types'
import { testLog } from '@gaofeng-ui/utils'
const NAME = 'gaofeng-foo'


export default defineComponent({
    name: NAME,
    props: fooProps,
    setup(props, context) {
        console.log("🚀 ~ file: index.tsx:10 ~ setup ~ props,context:", props, context)
        const onBtnClick = () => {
            console.log('按钮被点击了, ' + props.msg)
            testLog(props.msg)
        }
        return () => (
            <div class={NAME}>
                <h1>gaofengUI Foo2222</h1>
                <p class={NAME + '__description'}>msg is: {props.msg}</p>
                <button onClick={onBtnClick}>点击</button>
            </div>
        )
        // return () => h('div', null)
    }
})