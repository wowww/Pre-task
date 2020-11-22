<template>
  <div>
    <h1>사내 시스템 개발을 위한 UI 컴포넌트 개발</h1>
    <section>
      <h2>회원가입</h2>
      <Wrapper>
        <div class="mb10">
          <LoginInput type="text" placeholder="아이디" />
        </div>
        <div>
          <LoginInput type="password" placeholder="비밀번호" maxlength="20" />
        </div>
        
        <div class="gender">
          <label for="man">
            <input type="radio" value="man" name="gender" id="man" checked> 
            <span></span>
            <div class="man-text">남자</div>
          </label>

          <label for="woman" class="mb10">
            <input type="radio" value="woman" name="gender" id="woman">
            <span></span>
            <div class="woman-text">여자</div>
          </label>
        </div>

        <div class="birth mb10">
          <label for="birth">생일</label>
          <span class="birth-contents ml60">            
            <LoginSelect id="yy" aria-label="년" required="">
              <option value="">년</option>
              <option value="2000">2000년</option>
              <option value="1999">1999년</option>
              <option value="1998">1998년</option>
              <option value="1997">1997년</option>
              <option value="1996">1996년</option>
              <option value="1995">1995년</option>
              <option value="1994">1994년</option>
              <option value="1993">1993년</option>
            </LoginSelect>
            <LoginSelect id="mm" aria-label="월" required="">
              <option value="">월</option>
              <option value="01">1월</option>
              <option value="02">2월</option>
              <option value="03">3월</option>
              <option value="04">4월</option>
              <option value="05">5월</option>
              <option value="06">6월</option>
              <option value="07">7월</option>
              <option value="08">8월</option>
              <option value="09">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </LoginSelect>
           <LoginSelect id="dd" aria-label="월" required="" class="mr0">
              <option value="">일</option>
              <option value="01">1일</option>
              <option value="02">2일</option>
              <option value="03">3일</option>
              <option value="04">4일</option>
              <option value="05">5일</option>
              <option value="06">6일</option>
              <option value="07">7일</option>
              <option value="08">8일</option>
              <option value="09">9일</option>
              <option value="10">10일</option>
              <option value="11">11일</option>
              <option value="12">12일</option>
              <option value="13">13일</option>
              <option value="14">14일</option>
              <option value="15">15일</option>
              <option value="16">16일</option>
              <option value="17">17일</option>
              <option value="18">18일</option>
              <option value="19">19일</option>
              <option value="20">20일</option>
              <option value="21">21일</option>
              <option value="22">22일</option>
              <option value="23">23일</option>
              <option value="24">24일</option>
              <option value="25">25일</option>
              <option value="26">26일</option>
              <option value="27">27일</option>
              <option value="28">28일</option>
              <option value="29">29일</option>
              <option value="30">30일</option>
              <option value="31">31일</option>
            </LoginSelect>
          </span>
        </div>

        <div class="phone mb10">
          <label for="phone">전화</label>
          <span class="phone-contents ml60">
            <LoginSelect id="phone-number" class="phone-number" aria-label="핸드폰번호 앞자리" required="">
              <option value="">010</option>
              <option value="01">011</option>
              <option value="02">016</option>
              <option value="02">017</option>
            </LoginSelect>
            <LoginInput type="text" maxlength="8" />
            <button type="button">인증</button>
          </span>         
        </div>
      </Wrapper>
      <div class="terms">
        <div class="terms-text">모든 약관 내용에 동의합니다.</div>
        <div class="terms-button">
          <input type="checkbox" id="switch" /><label for="switch"></label>
        </div>
      </div>

      <div class="join">
        <JoinButton type="button">가입하기</JoinButton>
      </div>

    </section>
  </div>
</template>

<script>
import { Wrapper } from './LoginForm.style';
import { LoginInput } from './LoginInput.style';
import { LoginSelect } from './LoginSelect.style'
import { JoinButton } from './JoinButton.style';

export default {
  // name: 'LoginForm',
  components: {
    Wrapper,
    LoginInput,
    LoginSelect,
    JoinButton
  }
}
</script>

<style scoped>
section {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 20px;
}

h1 {
  margin: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  color: transparent;
  text-indent: -9999px;
}

h2 {
  text-align: left;
}

button {
  font-size: 1em;
  height: 40px;
  background-color: #fff;
  outline: 0;
  border: none;
  border-radius: 3px;
  transition: 0.2s;
  cursor: pointer;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}

button:hover {
  color: #fff;
  background-color: rgb(51, 153, 255);
  transition: 0.3s;
}

select {
  background-color: #fff;
  border: none;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

.mr0 {
  margin-right: 0;
}

.mb10 {
  margin-bottom: 10px;
}

.ml60 {
  margin-left: 60px;
}

.gender {
  display: flex;
  position: relative;
}

.gender [type="radio"] {
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
}

.gender label {
  cursor: pointer;
  width: 100%;
}

.gender label div {
  position: absolute;
  top: 45%;
  width: 50%;
}

.gender [type="radio"] + span {
  position: relative;
  width: 100%;
}

.gender [type="radio"] + span:before {
  content: '';
  display: flex;
  width: 100%;
  height: 40px;
  color: #000;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  transition: 0.5s ease all;
  background-color: #f1f1f1;
}

/* the checked style using the :checked pseudo class */
.gender [type="radio"]:checked + span:before {
  content: '';
  width: 100%;
  height: 40px;
  background-color: rgb(51, 153, 255);
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.085);
}

.birth-contents, 
.phone-contents {
  display: flex;
  height: 40px;
}

.birth,
.phone {
  position: relative;
}

.birth label,
.phone label {
  position: absolute;
  top: 10px;
  left: 0;
}

.phone button {
  margin-left: 10px;
  width: 100px;
}

.phone-number {
  width: 30px;
  min-width: 60px;
}

.terms {
  position: relative;
  margin-bottom: 40px;
}

.terms-text {
  text-align: left;
}

.terms-button {
  position: absolute;
  top: -25px;
  right: 0;
}

.terms input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

.terms label {
	cursor: pointer;
	text-indent: -9999px;
	width: 50px;
	height: 30px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
}

.terms label:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width: 20px;
	height: 20px;
	background: #fff;
	border-radius: 20px;
	transition: 0.3s;
}

.terms input:checked + label {
	background: rgb(51, 123, 255);;
}

.terms input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

.terms label:active:after {
	width: 20px;
}


</style>