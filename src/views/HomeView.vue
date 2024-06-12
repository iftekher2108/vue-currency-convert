<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const siteInfo = reactive({
  title :'Currency Convert',
  background:'#19376D'

})

// clock time start
const time = ref("00:00:00")
onMounted(()=>{
  setInterval(()=>{
    const newTime = new Date()
    time.value = newTime.toLocaleTimeString()
  },500)
})
// clock time end

// current date start
const defaultDate =ref(new Date().toISOString().substring(0, 10))
// current date end

// currency data
const currency = reactive({
  date:"2024-06-11",
  to: 'AFN',
  form: 'AFN',
  amount: 1,
})

// result data
const result = reactive({
  value_data:0,
  date_to: currency.date,
})


// date change show
function date(e) {
  currency.date = e.target.value.toString()
  result.date_to = currency.date
  defaultDate.value = e.target.value.toString()
}


// convert fatch api start 
function convert() {
  axios.get(`https://api.fxratesapi.com/convert?date=${currency.date}&from=${currency.form}&to=${currency.to}&amount=${currency.amount}`)
    .then((res) => {
      result.value_data = res.data.result
      if(!result.value_data == null) {
        is_result.value = 1
      }
    })

}
// convert fatch api end

</script>

<template>
  <main>



    <div class="col-lg-8 col-md-10 col-sm-12 mx-auto px-2 py-5 my-5 overflow-hidden position-relative rounded-2" :style="{background:siteInfo.background }">
      <div style="background:#1679AB;" class="p-3 d-lg-block d-md-block d-none fw-bold text-white rounded-1 position-absolute start-0 top-0">TIME : {{ time }}</div>
    
      <div style="background:#1679AB;" class="p-3 d-lg-block d-md-block d-none fw-bold text-white rounded-1 position-absolute end-0 top-0">DATE : {{ result.date_to }}</div>
      <img src="@/assets/image/logo.jpg" class="d-block rounded-1 mx-auto mb-4" alt="" width="180" height="120">
      <h1 class="display-5 text-primary text-uppercase mb-4 text-center fw-bold">{{ siteInfo.title }}</h1>
      <div class="col-10 mx-auto">
        <div class="mb-3">
          <input type="date" :value="defaultDate" class="form-control" @change="date">
        </div>
        <div class="row g-2 mb-3">
          <div class="col-lg-6">
            <div class="">
              <label for="form">Form</label>
              <select name="" v-model="currency.form" id="form" class="form-select chosen-select">
                <option value="AFN">Afghan Afghani</option>
                <option value="ALL">Albanian Lek</option>
                <option value="AMD">Armenian Dram</option>
                <option value="ANG">NL Antillean Guilder</option>
                <option value="AOA">Angolan Kwanza</option>
                <option value="ARS">Argentine Peso</option>
                <option value="AUD">Australian Dollar</option>
                <option value="AWG">Aruban Florin</option>
                <option value="AZN">Azerbaijani Manat</option>
                <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
                <option value="BBD">Barbadian Dollar</option>
                <option value="BDT">Bangladeshi Taka</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="BIF">Burundian Franc</option>
                <option value="BMD">Bermudan Dollar</option>
                <option value="BND">Brunei Dollar</option>
                <option value="BOB">Bolivian Boliviano</option>
                <option value="BRL">Brazilian Real</option>
                <option value="BSD">Bahamian Dollar</option>
                <option value="BWP">Botswanan Pula</option>
                <option value="BYN">Belarusian ruble</option>
                <option value="BYR">Belarusian Ruble</option>
                <option value="BZD">Belize Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CDF">Congolese Franc</option>
                <option value="CHF">Swiss Franc</option>
                <option value="CLF">Unidad de Fomento</option>
                <option value="CLP">Chilean Peso</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="COP">Coombian Peso</option>
                <option value="CRC">Costa Rican Colón</option>
                <option value="CUC">Cuban Convertible Peso</option>
                <option value="CUP">Cuban Peso</option>
                <option value="CVE">Cape Verdean Escudo</option>
                <option value="CZK">Czech Republic Koruna</option>
                <option value="DJF">Djiboutian Franc</option>
                <option value="DKK">Danish Krone</option>
                <option value="DOP">Dominican Peso</option>
                <option value="DZD">Algerian Dinar</option>
                <option value="ERN">Eritrean Nakfa</option>
                <option value="ETB">Ethiopian Birr</option>
                <option value="EUR">Euro</option>
                <option value="FJD">Fijian Dollar</option>
                <option value="FKP">Falkland Islands Pound</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="GEL">Georgian Lari</option>
                <option value="GGP">Guernsey pound</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="GIP">Gibraltar Pound</option>
                <option value="GMD">Gambian Dalasi</option>
                <option value="GNF">Guinean Franc</option>
                <option value="GTQ">Guatemalan Quetzal</option>
                <option value="GYD">Guyanaese Dollar</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HNL">Honduran Lempira</option>
                <option value="HRK">Croatian Kuna</option>
                <option value="HTG">Haitian Gourde</option>
                <option value="HUF">Hungarian Forint</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="ILS">Israeli New Sheqel</option>
                <option value="IMP">Manx pound</option>
                <option value="IQD">Iraqi Dinar</option>
                <option value="IRR">Iranian Rial</option>
                <option value="ISK">Icelandic Króna</option>
                <option value="JEP">Jersey pound</option>
                <option value="JMD">Jamaican Dollar</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="KGS">Kyrgystani Som</option>
                <option value="KHR">Cambodian Riel</option>
                <option value="KMF">Comorian Franc</option>
                <option value="KPW">North Korean Won</option>
                <option value="KRW">South Korean Won</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="KZT">Kazakhstani Tenge</option>
                <option value="LAK">Laotian Kip</option>
                <option value="LBP">Lebanese Pound</option>
                <option value="LKR">Sri Lankan Rupee</option>
                <option value="LRD">Liberian Dollar</option>
                <option value="LSL">Lesotho Loti</option>
                <option value="LTL">Lithuanian Litas</option>
                <option value="LVL">Latvian Lats</option>
                <option value="MAD">Moroccan Dirham</option>
                <option value="MDL">Moldovan Leu</option>
                <option value="XAG">Silver Ounce</option>
                <option value="XAU">Gold Ounce</option>
                <option value="XCD">East Caribbean Dollar</option>
                <option value="XDR">Special drawing rights</option>
                <option value="XOF">CFA Franc BCEAO</option>
                <option value="XPF">CFP Franc</option>
                <option value="YER">Yemeni Rial</option>
                <option value="ZAR">South African Rand</option>
                <option value="ZMK">Zambian Kwacha</option>
                <option value="ZMW">Zambian Kwacha</option>
                <option value="ZWL">Zimbabwean dollar</option>
                <option value="XPT">Platinum Ounce</option>
                <option value="XPD">Palladium Ounce</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="BNB">Binance</option>
                <option value="XRP">Ripple</option>
                <option value="SOL">Solana</option>
                <option value="DOT">Polkadot</option>
                <option value="AVAX">Avalanche</option>
                <option value="MATIC">Matic Token</option>
                <option value="LTC">Litecoin</option>
                <option value="ADA">Cardano</option>
                <option value="USDT">Tether</option>
                <option value="USDC">USD Coin</option>
                <option value="DAI">Dai</option>
                <option value="BUSD">Binance USD</option>
                <option value="ARB">Arbitrum</option>
                <option value="OP">Optimism</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="BTN">Bhutanese Ngultrum</option>
                <option value="MKD">Macedonian Denar</option>
                <option value="MMK">Myanma Kyat</option>
                <option value="MNT">Mongolian Tugrik</option>
                <option value="MOP">Macanese Pataca</option>
                <option value="MRO">Mauritanian ouguiya</option>
                <option value="MUR">Mauritian Rupee</option>
                <option value="MVR">Maldivian Rufiyaa</option>
                <option value="MWK">Malawian Kwacha</option>
                <option value="MXN">Mexican Peso</option>
                <option value="MZN">Mozambican Metical</option>
                <option value="NAD">Namibian Dollar</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="NIO">Nicaraguan Córdoba</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="NPR">Nepalese Rupee</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="OMR">Omani Rial</option>
                <option value="PAB">Panamanian Balboa</option>
                <option value="PEN">Peruvian Nuevo Sol</option>
                <option value="PGK">Papua New Guinean Kina</option>
                <option value="PHP">Philippine Peso</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="PLN">Polish Zloty</option>
                <option value="PYG">Paraguayan Guarani</option>
                <option value="QAR">Qatari Rial</option>
                <option value="RON">Romanian Leu</option>
                <option value="RSD">Serbian Dinar</option>
                <option value="RUB">Russian Ruble</option>
                <option value="RWF">Rwandan Franc</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="SCR">Seychellois Rupee</option>
                <option value="SDG">Sudanese Pound</option>
                <option value="SEK">Swedish Krona</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="SHP">Saint Helena Pound</option>
                <option value="SLL">Sierra Leonean Leone</option>
                <option value="SOS">Somali Shilling</option>
                <option value="SRD">Surinamese Dollar</option>
                <option value="STD">São Tomé and Príncipe dobra</option>
                <option value="SVC">Salvadoran Colón</option>
                <option value="SYP">Syrian Pound</option>
                <option value="SZL">Swazi Lilangeni</option>
                <option value="THB">Thai Baht</option>
                <option value="TJS">Tajikistani Somoni</option>
                <option value="TMT">Turkmenistani Manat</option>
                <option value="TND">Tunisian Dinar</option>
                <option value="TOP">Tongan Paʻanga</option>
                <option value="TRY">Turkish Lira</option>
                <option value="TTD">Trinidad and Tobago Dollar</option>
                <option value="TWD">New Taiwan Dollar</option>
                <option value="TZS">Tanzanian Shilling</option>
                <option value="UAH">Ukrainian Hryvnia</option>
                <option value="UGX">Ugandan Shilling</option>
                <option value="USD">US Dollar</option>
                <option value="UYU">Uruguayan Peso</option>
                <option value="VEF">Venezuelan Bolívar</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="VUV">Vanuatu Vatu</option>
                <option value="WST">Samoan Tala</option>
                <option value="XAF">CFA Franc BEAC</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="INR">Indian Rupee</option>
                <option value="LYD">Libyan Dinar</option>
                <option value="MGA">Malagasy Ariary</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="SBD">Solomon Islands Dollar</option>
                <option value="UZS">Uzbekistan Som</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="">
              <label for="to">To</label>
              <select name="" id="to" v-model="currency.to" class="form-select chosen-select">
                <option value="AFN" selected>Afghan Afghani</option>
                <option value="ALL">Albanian Lek</option>
                <option value="AMD">Armenian Dram</option>
                <option value="ANG">NL Antillean Guilder</option>
                <option value="AOA">Angolan Kwanza</option>
                <option value="ARS">Argentine Peso</option>
                <option value="AUD">Australian Dollar</option>
                <option value="AWG">Aruban Florin</option>
                <option value="AZN">Azerbaijani Manat</option>
                <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
                <option value="BBD">Barbadian Dollar</option>
                <option value="BDT">Bangladeshi Taka</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="BIF">Burundian Franc</option>
                <option value="BMD">Bermudan Dollar</option>
                <option value="BND">Brunei Dollar</option>
                <option value="BOB">Bolivian Boliviano</option>
                <option value="BRL">Brazilian Real</option>
                <option value="BSD">Bahamian Dollar</option>
                <option value="BWP">Botswanan Pula</option>
                <option value="BYN">Belarusian ruble</option>
                <option value="BYR">Belarusian Ruble</option>
                <option value="BZD">Belize Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CDF">Congolese Franc</option>
                <option value="CHF">Swiss Franc</option>
                <option value="CLF">Unidad de Fomento</option>
                <option value="CLP">Chilean Peso</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="COP">Coombian Peso</option>
                <option value="CRC">Costa Rican Colón</option>
                <option value="CUC">Cuban Convertible Peso</option>
                <option value="CUP">Cuban Peso</option>
                <option value="CVE">Cape Verdean Escudo</option>
                <option value="CZK">Czech Republic Koruna</option>
                <option value="DJF">Djiboutian Franc</option>
                <option value="DKK">Danish Krone</option>
                <option value="DOP">Dominican Peso</option>
                <option value="DZD">Algerian Dinar</option>
                <option value="ERN">Eritrean Nakfa</option>
                <option value="ETB">Ethiopian Birr</option>
                <option value="EUR">Euro</option>
                <option value="FJD">Fijian Dollar</option>
                <option value="FKP">Falkland Islands Pound</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="GEL">Georgian Lari</option>
                <option value="GGP">Guernsey pound</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="GIP">Gibraltar Pound</option>
                <option value="GMD">Gambian Dalasi</option>
                <option value="GNF">Guinean Franc</option>
                <option value="GTQ">Guatemalan Quetzal</option>
                <option value="GYD">Guyanaese Dollar</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HNL">Honduran Lempira</option>
                <option value="HRK">Croatian Kuna</option>
                <option value="HTG">Haitian Gourde</option>
                <option value="HUF">Hungarian Forint</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="ILS">Israeli New Sheqel</option>
                <option value="IMP">Manx pound</option>
                <option value="IQD">Iraqi Dinar</option>
                <option value="IRR">Iranian Rial</option>
                <option value="ISK">Icelandic Króna</option>
                <option value="JEP">Jersey pound</option>
                <option value="JMD">Jamaican Dollar</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="KGS">Kyrgystani Som</option>
                <option value="KHR">Cambodian Riel</option>
                <option value="KMF">Comorian Franc</option>
                <option value="KPW">North Korean Won</option>
                <option value="KRW">South Korean Won</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="KZT">Kazakhstani Tenge</option>
                <option value="LAK">Laotian Kip</option>
                <option value="LBP">Lebanese Pound</option>
                <option value="LKR">Sri Lankan Rupee</option>
                <option value="LRD">Liberian Dollar</option>
                <option value="LSL">Lesotho Loti</option>
                <option value="LTL">Lithuanian Litas</option>
                <option value="LVL">Latvian Lats</option>
                <option value="MAD">Moroccan Dirham</option>
                <option value="MDL">Moldovan Leu</option>
                <option value="XAG">Silver Ounce</option>
                <option value="XAU">Gold Ounce</option>
                <option value="XCD">East Caribbean Dollar</option>
                <option value="XDR">Special drawing rights</option>
                <option value="XOF">CFA Franc BCEAO</option>
                <option value="XPF">CFP Franc</option>
                <option value="YER">Yemeni Rial</option>
                <option value="ZAR">South African Rand</option>
                <option value="ZMK">Zambian Kwacha</option>
                <option value="ZMW">Zambian Kwacha</option>
                <option value="ZWL">Zimbabwean dollar</option>
                <option value="XPT">Platinum Ounce</option>
                <option value="XPD">Palladium Ounce</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="BNB">Binance</option>
                <option value="XRP">Ripple</option>
                <option value="SOL">Solana</option>
                <option value="DOT">Polkadot</option>
                <option value="AVAX">Avalanche</option>
                <option value="MATIC">Matic Token</option>
                <option value="LTC">Litecoin</option>
                <option value="ADA">Cardano</option>
                <option value="USDT">Tether</option>
                <option value="USDC">USD Coin</option>
                <option value="DAI">Dai</option>
                <option value="BUSD">Binance USD</option>
                <option value="ARB">Arbitrum</option>
                <option value="OP">Optimism</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="BTN">Bhutanese Ngultrum</option>
                <option value="MKD">Macedonian Denar</option>
                <option value="MMK">Myanma Kyat</option>
                <option value="MNT">Mongolian Tugrik</option>
                <option value="MOP">Macanese Pataca</option>
                <option value="MRO">Mauritanian ouguiya</option>
                <option value="MUR">Mauritian Rupee</option>
                <option value="MVR">Maldivian Rufiyaa</option>
                <option value="MWK">Malawian Kwacha</option>
                <option value="MXN">Mexican Peso</option>
                <option value="MZN">Mozambican Metical</option>
                <option value="NAD">Namibian Dollar</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="NIO">Nicaraguan Córdoba</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="NPR">Nepalese Rupee</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="OMR">Omani Rial</option>
                <option value="PAB">Panamanian Balboa</option>
                <option value="PEN">Peruvian Nuevo Sol</option>
                <option value="PGK">Papua New Guinean Kina</option>
                <option value="PHP">Philippine Peso</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="PLN">Polish Zloty</option>
                <option value="PYG">Paraguayan Guarani</option>
                <option value="QAR">Qatari Rial</option>
                <option value="RON">Romanian Leu</option>
                <option value="RSD">Serbian Dinar</option>
                <option value="RUB">Russian Ruble</option>
                <option value="RWF">Rwandan Franc</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="SCR">Seychellois Rupee</option>
                <option value="SDG">Sudanese Pound</option>
                <option value="SEK">Swedish Krona</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="SHP">Saint Helena Pound</option>
                <option value="SLL">Sierra Leonean Leone</option>
                <option value="SOS">Somali Shilling</option>
                <option value="SRD">Surinamese Dollar</option>
                <option value="STD">São Tomé and Príncipe dobra</option>
                <option value="SVC">Salvadoran Colón</option>
                <option value="SYP">Syrian Pound</option>
                <option value="SZL">Swazi Lilangeni</option>
                <option value="THB">Thai Baht</option>
                <option value="TJS">Tajikistani Somoni</option>
                <option value="TMT">Turkmenistani Manat</option>
                <option value="TND">Tunisian Dinar</option>
                <option value="TOP">Tongan Paʻanga</option>
                <option value="TRY">Turkish Lira</option>
                <option value="TTD">Trinidad and Tobago Dollar</option>
                <option value="TWD">New Taiwan Dollar</option>
                <option value="TZS">Tanzanian Shilling</option>
                <option value="UAH">Ukrainian Hryvnia</option>
                <option value="UGX">Ugandan Shilling</option>
                <option value="USD">US Dollar</option>
                <option value="UYU">Uruguayan Peso</option>
                <option value="VEF">Venezuelan Bolívar</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="VUV">Vanuatu Vatu</option>
                <option value="WST">Samoan Tala</option>
                <option value="XAF">CFA Franc BEAC</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="INR">Indian Rupee</option>
                <option value="LYD">Libyan Dinar</option>
                <option value="MGA">Malagasy Ariary</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="SBD">Solomon Islands Dollar</option>
                <option value="UZS">Uzbekistan Som</option>
              </select>
            </div>
          </div>

        </div>

        <div class="mb-3">
          <label for="amount">Amount</label>
          <input type="number" id="amount" v-model="currency.amount" class="form-control">
        </div>

        <div class="p-2 mb-3 text-center text-primary fw-bold fs-3">
         {{ result.value_data }} {{ currency.to }} 
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" @click="convert" class="btn btn-primary py-2 px-5">Convert</button>

        </div>
      </div>
    </div>

  </main>
</template>
