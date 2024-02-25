<template>
  <div class="content">
    <span>Antworten von Dir</span>
    <span>Wenn du Beiträge kommentierst, werden diese hier angezeigt.</span>
  </div>
</template>

<script setup></script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 32px 99px 32px 99px;
  padding: 0px 32px 0px 32px;
}

.content span:first-child {
  font-size: 31px;
  font-weight: 800;
  color: #ffffff;
}

.content span:nth-child(2) {
  font-size: 15px;
  color: #71767b;
}
</style>
