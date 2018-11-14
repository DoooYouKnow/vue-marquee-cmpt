<template>
    <div>
        <vue-marquee-cmpt :width="330" :content="content"></vue-marquee-cmpt>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: '这是一条很长很长的通知消息啊，你收到了吗？',
        }
    }
}
</script>

