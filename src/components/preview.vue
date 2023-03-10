<template>
    <div class="pre-code-box">
        <transition name="slide-fade">
            <pre v-if="showCode" v-highlight>
                <code class="language-html">{{ sourceCode }}</code>
            </pre>
        </transition>

        <div class="showCode" @click="showOrHideCode">
            <span>{{ showCode? "隐藏代码": "显示代码" }}</span>
        </div>

    </div>

</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
const props = defineProps({
    compName: {
        type: String,
        default: "",
        require: true
    },
    demoName: {
        type: String,
        default: "",
        require: true
    }
})

const showCode = ref(false);
const border = ref("1px solid rgba(0,0,0,.06");
const showOrHideCode = () => {
    showCode.value = !showCode.value;
    if (showCode.value) {
        border.value = "0";
    } else {
        border.value = "1px solid rgba(0,0,0,.06)";
    }
};

const sourceCode = ref("");
async function getSourceCode() {
    const isDev = import.meta.env.MODE === "development";
    if (isDev) {
        sourceCode.value = (
            await import(
                    /* @vite-ignore */ `/packages/${props.compName}/doc/${props.demoName}.vue?raw`
            )
        ).default;
    } else {
        sourceCode.value = await fetch(
            `/packages/${props.compName}/doc/${props.demoName}.vue`
        ).then((res) => res.text());
    }

}

onMounted(() => {
    getSourceCode();
});
</script>

<style scoped lang="less">
#inputcopy {
    opacity: 0;
    border: 0;
    outline: none;
    height: 0;
    position: fixed;
    z-index: -99999;
}

.slide-fade-enter-active {
    transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0.5;
}

.pre-code-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-top: 0;
    margin: 0 0 15px 0;
    position: relative;
    transition: all 0.15s ease-out;

    .m-copy {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;

        i {
            font-size: 22px;
            color: #b7b3b3;

            &:hover {
                color: #000;
            }
        }
    }

    .showCode {
        width: 100%;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f9f9f9;
        border-radius: 4px;
        box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
        color: #505050;
        cursor: pointer;

        i {
            margin-left: 10px;
        }

        i.rotate {
            transform: rotate(180deg);
        }

        &:hover {
            background: #f9f9f9;
            color: #0e80eb;
        }
    }

    &:hover {
        box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    }
}

.language-html {
    font-size: 15px
}
</style>