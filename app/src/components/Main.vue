<template>
  <div class="pg">

    <el-row class="top">
      <el-row class="logo">
        LOGO
      </el-row >
        <el-col :span="8">
          <i class="el-icon-s-unfold hamburg"></i>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Search Query"  size="small" class="searchInput"></el-input>
        </el-col>
        <el-col :span="8">
          <i class="el-icon-plus addProduct" @click="addProduct"></i>
        </el-col>
    </el-row>
    <!-- PUT THE MAP IN THIS DIV -->
    <div class="map">
      <google-map ref="map"/>
    </div>
    <div class="addProduct-modal">
      <div class="modal-content">
        <i class="el-icon-close closeSubmit" @click="closeAddProduct"></i>
        <h2> Add Product </h2>
        <el-input class="input-field" placeholder="Address" v-model="address"></el-input>
        <gmap-autocomplete
            class="addressInput"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
        >
        </gmap-autocomplete>
        <el-input class="input-field" placeholder="Last name" v-model="User.lastName"></el-input>
        <el-input class="input-field" placeholder="Email Address" v-model="User.emailAddress"></el-input>
        <el-input class="input-field" placeholder="Street Address" v-model="User.streetAddress"></el-input>
        <el-input class="input-field" placeholder="Phone Number" v-model="User.phoneNumber">
          <template slot="prepend">+61</template>
        </el-input>
        <el-input class="input-field" placeholder="Password" v-model="User.password" show-password></el-input>
        <el-input class="input-field" placeholder="Confirm password" v-model="User.passwordConfirm" show-password></el-input>
        <el-button @click="submit"> Submit </el-button>
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
      errors: [],
      address: '',
      User: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        streetAddress: '',
        phoneNumber: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    addProduct () {
      document.querySelector('.addProduct-modal').style.display = 'flex'
    },
    closeAddProduct () {
      document.querySelector('.addProduct-modal').style.display = 'none'
    },
    submit () {
      this.$refs.map.addMarker()
      axios.post('http://localhost:3000/users', { User: this.User })
    },
    logIn () {
      router.push({ name: 'main' })
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
  .addProduct-modal {
    width: 20%;
    height: 80%;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }
  .modal-content {
    padding: 40px 40px 40px 40px;
    width: 800px;
    height: 100%;
    background-color: white;
    border-radius: 18px;
  }
  .close {
    postition: absolute;
    top: 0;
    right: 14px;
    font-size: 42px;
    transform: rotate(45deg);
  }
  .closeSubmit {
    float: right;
  }
  .input-field {
    padding: 10px 10px 10px 10px;
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
  .map {
  }
  .searchInput {
    width: 320px;
  }
  .pg {
    height: 100%;
    max-width: 100%;
  }
  .top {
    height: 15%;
    margin-bottom: 0px;
  }
  .middle {
    height: 80%;
  }
  .hamburg {
    float: left;
  }
  .addProduct {
    float: right;
  }
  .addressInput {
    border-radius: 4px;
    margin: 0px 8px;
    width: 100%;
    height: 5%;
  }
</style>
