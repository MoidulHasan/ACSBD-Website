<template>
  <div class="container">
    <table style="width: 100%">
      <tr>
        <th>S.L</th>
        <th>Descriptions</th>
        <th>Unit</th>
        <th>Price (tk)</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>1250</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
        <td>924</td>
      </tr>
      <tr>
        <td>1500</td>
        <td>Jack</td>
        <td>94</td>
        <td>934</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  tr {
    th {
      background: #f2f2f2;
      padding: 3px 20px;
      text-align: start;
      border: 1px solid #f2f2f2;
      color: #565656;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;

      &:nth-child(2) {
        width: 60%;
      }
      &:nth-child(4) {
        width: 20%;
      }
    }
    td {
      border: 1px solid #f2f2f2;
      padding: 3px 20px;
      color: #565656;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
