<template>
  <div>
    <h1>{{ msg }}</h1>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
  </div>
</template>

<script>


export default {
  name: 'record',
  data() {
    return {
      msg: 'Welcome to laidian'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
