<template>
  <div class="container">
    <el-row>
      <el-col :span="4">
        <div class="grid-content">
          <el-image
            style="width: 150px; height: 75px"
            :src="url">
          </el-image>
        </div>
      </el-col>
      <el-col class="logIn" :span="4">
        <div class="grid-content">
          <el-button type="success center" @click="logIn"> Log In </el-button>
        </div>
      </el-col>
    </el-row>
      <div class="grid-content text">
        <h2>Kitchen 2 Kitchen The Number One In Food Waste Prevention</h2>
      </div>
    <el-row>
      <el-row >
        <el-col :push=7 :span="5">
          <div class="grid-content intro-text">
            Food Safety
          </div>
        </el-col>
        <el-col :push=7 :span="5">
          <div class="grid-content intro-text">
            Community Benefits
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :push=7 :span="10">
          <div class="grid-content intro-text">
            Start Contributing
            <div class="home-button">
              <el-button type="success" class="home-button" @click="signUp"> Sign Up </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <div class="bg-modal">
      <div class="modal-content">
        <i class="el-icon-close closeSubmit" @click="closeSignUp"></i>
        <h2> Sign Up </h2>
        <el-input class="input-field" placeholder="First name" v-model="User.firstName"></el-input>
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

export default {
  name: 'Home',
  data () {
    return {
      url: 'https://i.ibb.co/9hBzZQj/k2kSmall.png',
      errors: [],
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
    signUp () {
      document.querySelector('.bg-modal').style.display = 'flex'
    },
    closeSignUp () {
      document.querySelector('.bg-modal').style.display = 'none'
    },
    submit () {
      axios
        .post('http://localhost:3000/users', { User: this.User })
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
  .bg-modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }
  .modal-content {
    padding: 40px 40px 40px 40px;
    width: 800px;
    height: 500px;
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
  .logIn {
    float: right;
  }
</style>
