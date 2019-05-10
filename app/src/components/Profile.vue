<template>
  <div class="pg">
    <el-row class="top">
      <el-row class="logo">
        LOGO
      </el-row >
      <el-col :span="12">
        <i class="el-icon-s-unfold hamburg" @click="openMenu"></i>
      </el-col>
      <el-col :span="12">
        <i class="el-icon-plus addProduct" @click="addProduct"></i>
      </el-col>
    </el-row>
    <div class="menu-modal">
      <div class="addProduct-content">
        <i class="el-icon-close closeSubmit" @click="closeMenu"></i>
        <div class="menuItems">
          <el-row>
            <i  @click="main" class="el-icon-map-location"></i>
            <div> Main </div>
          </el-row>
          <el-row>
            <i class="el-icon-odometer"></i>
            <div> Dashboard </div>
          </el-row>
          <el-button class="input-field" @click="logOut"> Log out </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import router from '../router'
import GoogleMap from '../components/GoogleMap'

export default {
  name: 'Home',
  components: {
    GoogleMap
  },
  data () {
    return {
      url: 'https://i.ibb.co/9hBzZQj/k2kSmall.png',
      imageUrl: '',
      errors: [],
      options: [{
        value: 'Fruit',
        label: 'Fruit'
      }, {
        value: 'Vegtable',
        label: 'Vegtable'
      }, {
        value: 'Baking',
        label: 'Baking'
      }, {
        value: 'Meat',
        label: 'Meat'
      }, {
        value: 'Dairy',
        label: 'Dairy'
      }],
      Search: {
        category: '',
        condition: 0,
        query: ''
      },
      Product: {
        description: '',
        name: '',
        expirationDate: '',
        address: '',
        marker: '',
        category: '',
        condition: 0
      }
    }
  },
  methods: {
    addProduct () {
      document.querySelector('.addProduct-modal').style.display = 'flex'
      document.querySelector('.searchBar').style.display = 'none'
    },
    openMenu () {
      document.querySelector('.menu-modal').style.display = 'flex'
    },
    searchBar () {
      document.querySelector('.searchBar').style.display = 'flex'
    },
    closeAddProduct () {
      document.querySelector('.addProduct-modal').style.display = 'none'
    },
    closeMenu () {
      document.querySelector('.menu-modal').style.display = 'none'
    },
    submit () {
      axios.post('http://localhost:3000/products', { Product: this.Product })
      document.querySelector('.addProduct-modal').style.display = 'none'
    },
    main () {
      router.push({ name: 'main' })
    },
    logOut () {
      router.push({ name: 'home' })
    },
    setPlace (place) {
      const marker = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      this.Product.address = place.formatted_address
      this.Product.marker = marker
    },
    search () {
      // Search Query code in here, leave the line below at the bottom :)
      document.querySelector('.searchBar').style.display = 'none'
    }
  }
}
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 46px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .text {
    padding: 80px;
  }
  .intro-text {
    margin-right: 10px;
    min-height: 200px;
    background-color: #d3dce6;
  }
  .home-button {
    float: bottom;
  }
  .close {
    postition: absolute;
    top: 0;
    right: 14px;
    font-size: 42px;
    transform: rotate(45deg);
  }
  .header {
    position: absolute;
    background-color: #F2F2F2;
    top: 0;
    left: 0;
    height: 75px;
    width: 100%;
  }
  .logo {
    top: 0;
    height: 20px;
  }
  .headerRow {
    margin: -20px -10px -10px -10px;
  }
  .searchInput {
    width: 320px;
  }
  .pg {
    height: 100%;
    max-width: 100%;
  }
  .top {
    height: 12%;
    margin-bottom: 16px;
  }
  .middle {
    height: 80%;
  }
  .hamburg {
    float: left;
  }
</style>
