<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Wygrana/Przegrana</th>
        <th>Data/Godzina</th>
        <th>Możliwe ruchy</th>
        <th>Pozostałe ruchy</th>
        <th>Trafienia</th>
        <th>Pozostałe statki</th>
        <th>Oszustwa</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(stat, index) in stats" :key="stat.date">
        <th>{{ index + 1 }}</th>
        <th>{{ formatType(stat.type) }}</th>
        <th>{{ formatDate(stat.date) }}</th>
        <th>{{ stat.hitsCount }}</th>
        <th>{{ stat.hitsRemaining }}</th>
        <th>{{ stat.shipsPartsDestroyed }}</th>
        <th>{{ stat.shipsRemaining }}</th>
        <th>{{ formatCheating(stat.cheating) }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { StorageItem } from "@/Models/Interfaces/StoragePluginInterface";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {}
})
export default class Table extends Vue {
  @Prop() readonly stats!: StorageItem[];

  formatType(type: string): "Wygrana" | "Przegrana" {
    return type === "success" ? "Wygrana" : "Przegrana";
  }

  formatDate(value: number) {
    const date = new Date(value);

    let day = date.getDate().toString();
    if (day.length === 1) {
      day = `0${day}`;
    }
    let month = `${date.getMonth() + 1}`;
    if (month.length === 1) {
      month = `0${month}`;
    }
    const dateString = `${day}.${month}.${date.getFullYear()}`;

    let hours = date.getHours().toString();
    if (hours.length === 1) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes().toString();
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }
    const timeString = `${hours}:${minutes}`;

    return `${dateString} / ${timeString}`;
  }

  formatCheating(value: boolean) {
    return value ? "Tak" : "Nie";
  }
}
</script>

<style lang="scss">
@use './TableStyles' as TableMixin;

@include TableMixin.skeleton;
@include TableMixin.visuals;
</style>
