<template>
  <div class="container">
    <div class="l-list-box">
      <h4 @click="handleClickShow">
        {{ title }}
        <i :class="show ? 'active' : ''"></i>
      </h4>
      <star-transition v-model="show" duration="0.5s">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <span @click="go(`/${type}/${item.link}`)">{{ item.title }}</span>
          </li>
        </ul>
      </star-transition>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'ListBox',
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
  setup() {
    const show = ref(false);
    const handleClickShow = () => {
      show.value = !show.value;
    };
    const router = useRouter();
    const go = (link) => {
      if (link) {
        router.push(link);
      }
    };
    return {
      show,
      handleClickShow,
      go,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 15px auto;
  width: 95%;
  background: #fff;
  .l-list-box {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    h4 {
      position: relative;
      margin: 0;
      height: 50px;
      font-weight: 400;
      line-height: 50px;
      padding: 0 15px;
      i {
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -5px;
        height: 10px;
        width: 10px;
        transform: rotate(0deg);
        background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23848484' viewBox='0 0 30 11'%3E%3Cpath d='M15 7.757L27.737.21a1.5 1.5 0 011.53 2.58c-4.5 2.668-9 5.334-13.5 8a1.503 1.503 0 01-1.53 0c-4.5-2.666-9-5.332-13.5-8A1.5 1.5 0 112.266.21C6.51 2.726 10.756 5.24 15 7.757' fill-rule='evenodd'/%3E%3C/svg%3E")
          no-repeat 50%;
        background-size: contain;
        transition: transform 0.3s;
        &.active {
          transform: rotate(-90deg);
        }
      }
      &:active {
        background-color: hsla(0, 0%, 78.4%, 0.1);
      }
    }
    ul {
      li {
        overflow: hidden;
        border-top: 1px solid #edeef1;
        border-radius: 2px;
        &:active {
          background-color: hsla(0, 0%, 78.4%, 0.1);
        }
        span {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 20px 10px;
          text-decoration: none;
          color: #2e2d2d;
        }
      }
    }
  }
}
</style>
