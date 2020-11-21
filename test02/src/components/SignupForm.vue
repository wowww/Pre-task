<template>
  <form id="signup-form" v-on:submit.prevent="submit">
    <div class="row">
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Full Name <span class="text-danger">*</span></label>
        <input type="text" v-model.trim="$v.fullname.$model" :class="{'is-invalid': validationStatus($v.fullname)}" class="form-control is-invalid form-control-lg">
        <div v-if="!$v.fullname.required" class="invalid-feedback">The full name is required.</div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
        <input type="email" v-model.trim="email" :class="{'is-invalid': validationStatus($v.email)}" class="form-control form-control-lg">
        <div v-if="!$v.email.required" class="invalid-feedback">The email is required.</div>
        <div v-if="!$v.email.email" class="invalid-feedback">The email is not required.</div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Country <span class="text-danger">*</span></label>
        <select v-model.trim="country" :class="{'is-invalid': validationStatus($v.country)}" class="form-control form-control-lg" name="" id="">
          <div v-if="!$v.country.required" class="invalid-feedback">The country is required.</div>
          <option value="">Select Country</option>
          <option :value="c.iso" :key="c.iso" v-for="c in countryList">{{ c.country }}</option>
        </select>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Password <span class="text-danger">*</span></label>
        <input type="password" v-model.trim="password" :class="{'is-invalid': validationStatus($v.password)}" class="form-control form-control-lg">
        <div v-if="!$v.password.required" class="invalid-feedback">The password is required.</div>
        <div v-if="!$v.password.minLength" class="invalid-feedback">You must have at least {{ $v.password.$params.minLength.min }} letters.</div>
        <div v-if="!$v.password.maxLength" class="invalid-feedback">You must not have greater then {{ $v.password.$params.maxLength.max }} letters.</div>
      </div>
      <div class="col-12 form-group text-center">
        <button class="btn btn-vue btn-lg col-4">Signup</button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'SignupForm',
  data: function() {
    return {
      fullname: '',
      email: '',
      country: '',
      password: '',
      countryList: []
    }
  },

  validations: {
    fullname: {required},
    email: {required, email},
    country: {required},
    password: {required, minLength: minLength(6), maxLength: maxLength(20)}
  },

  mounted: function() {
    var v = this;
    v.$http.get(`http://localhost:4600/countries`)
    .then(function(resp) {
      v.countryList = resp.data;
    })
    .catch(function(err) {
      console.log(err)
    })
  },

  methods: {
    resetData: function() {
      this.fullname = '';
      this.email = '';
      this.country = '';
      this.password = '';
    },
    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit: function() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.error) return;

      alert('Data Submit');
      this.$v.$reset();
      this.resetData();
    }
  }
}
</script>

<style>
.btn-vue {
  color: #31485d;
  background-color: #53b985;
  font-weight: 600;
}
</style>