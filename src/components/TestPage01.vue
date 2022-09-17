<template>
    <p>This is Test Page 01</p>
</template>

<script>
const url = new URL('http://www.google.com/')
url.username = 'john'
url.password = 'password'
url.port = 8080
url.search = '?a=x&b=y'
console.log(url)

const params = {
    keyword: "keyword",
    tag: "tag"
}
const urlSearchParam =  new URLSearchParams(params).toString();
// keyword=keyword&tag=tag

window.location.href = "/?" + urlSearchParam
</script>
