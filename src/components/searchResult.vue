<template>
  <tr>
    <td>
      <a class="pointer word-wrap">{{card.front}}</a>
      <br>
      <small>{{card.back}}</small>
      </td>
      <td class="text-right">
        <input type="checkbox" class="pointer">
      </td>
  </tr>
</template>

<script>

export default {
  name: 'searchResult',
  props: {
    card: Object,
  },
}
</script>
