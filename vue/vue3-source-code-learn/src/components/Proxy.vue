<script setup>
const data = {
  a: 1,
  b: 2,
};

const proxy = new Proxy(data, {
  get(target, key, reciver) {
    console.log("target", target);
    console.log("key", key);
    console.log("reciver", reciver);
    return target;
  },
});
console.log(proxy.a);
</script>
