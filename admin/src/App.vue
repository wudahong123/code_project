<template>
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute;
}

::-webkit-scrollbar-thumb {
  background: #1890ff;
}

::-webkit-scrollbar-track {
  background: #ddd;
}
</style>
