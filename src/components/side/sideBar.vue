<template>
  <div class="sidebar flex">
    <n-space vertical>
      <n-layout has-sider>
        <n-layout-sider bordered :width="240">
          <user-info></user-info>
          <n-menu :options="menuOptions" default-value="currentValue" />
        </n-layout-sider>
      </n-layout>
    </n-space>
  </div>
</template>
<script>
import userInfo from "./userInfo.vue";
import { h, defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { NIcon } from "naive-ui";
import {
  HomeOutline as HomeIcon,
  PlanetOutline as PlanetIcon,
  RocketOutline as RocketIcon,
  VideocamOutline as MvIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "home",
          },
        },
        { default: () => "首页" }
      ),
    key: "1",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "musicList",
          },
        },
        { default: () => "音乐馆" }
      ),
    key: "2",
    icon: renderIcon(PlanetIcon),
    disabled: false,
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "ranking",
          },
        },
        { default: () => "排行榜" }
      ),
    key: "3",
    icon: renderIcon(RocketIcon),
    disabled: false,
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "MV",
          },
        },
        { default: () => "MV" }
      ),
    key: "4",
    icon: renderIcon(MvIcon),
  },
];

export default defineComponent({
  setup() {
    return {
      menuOptions,
    };
  },
  components: {
    userInfo,
  },
});
</script>
<style lang="scss">
.sidebar {
  width: 250px;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.n-layout-sider-scroll-container {
  .n-menu {
    .n-menu-item {
      margin-top: 10px;
      .n-menu-item-content {
        .n-menu-item-content__icon {
          margin-left: 30px;
        }
        .n-menu-item-content-header {
          display: flex;
          justify-content: left;
          a {
            font-size: 25px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
