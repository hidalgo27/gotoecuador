<template>

  <div class="container w-full md:w-[800px] my-24" id="form-dream-adventure">
    <div class="w-full">
      <div class="grid grid-cols-1">

        <section class="pb-8 text-center">
<!--          <img src="https://gotoperu-com.s3-us-west-1.amazonaws.com/logos/logo-gotoperu-black.png" alt="" class="mx-auto w-64">-->
          <nuxt-img src="/images/logos/logo-gotoecuador3.svg" class="w-[250px] md:w-[320px] mx-auto"></nuxt-img>
          <h3 class="my-3 font-semibold text-gray-700 text-2xl">Free Quote</h3>
          <p class="text-gray-500">We're flexible! Postpone your tour with zero cost up to 10 days prior to departure.</p>

        </section>
        <div class="divider-dashed"></div>
        <div class="text-left ">


          <h3 class="text-lg text-tertiary font-semibold mt-5 text-center">HOTEL CATEGORY</h3>
          <h3 class="text-xs text-tertiary text-center">(OPTIONAL. You may choose more than one)</h3>
          <div class="grid grid-cols-12 gap-6 my-3 overflow-x-scroll no-scrollbar focus:touch-pan-x">

            <div class="col-span-12 hidden md:col-span-2 border md:flex justify-center items-center rounded-sm bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div class="col-span-12 md:col-span-10 grid grid-cols-3 gap-3 overflow-x-scroll no-scrollbar focus:touch-pan-x">

              <div class="flex flex-col">
                <input type="checkbox" id="hotel_5" class="peer hidden" value="5" v-model="hotel" />
                <label for="hotel_5" class="select-none bg-white cursor-pointer px-5 py-2 border border-gray-300 text-center text-gray-400 rounded-sm divide-y divide-gray-400 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary peer-checked:divide-primary  ">
                  <div class="pb-1">
<!--                    <img src="/icons/hotel.svg" alt="">-->
                    <h4 class=" pt-1">Luxury</h4>
                  </div>
                  <div class="flex pt-2 gap-1 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 text-secondary" v-for="(index) in 5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </label>
              </div>

              <div class="flex flex-col">
                <input type="checkbox" id="hotel_4" class="peer hidden" value="4" v-model="hotel" />
                <label for="hotel_4" class="select-none bg-white cursor-pointer px-5 py-2 border border-gray-300 text-gray-400 rounded-sm divide-y divide-gray-400 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary peer-checked:divide-primary  ">
                  <div class="pb-1 text-center">
<!--                    <img src="/icons/hotel.svg" alt="">-->
                    <h4 class=" pt-1">Superior</h4>
                  </div>
                  <div class="flex pt-2 gap-1 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 text-secondary" v-for="(index) in 4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </label>
              </div>

              <div class="flex flex-col">
                <input type="checkbox" id="hotel_3" class="peer hidden" value="3" v-model="hotel" />
                <label for="hotel_3" class="select-none bg-white cursor-pointer px-5 py-2 border border-gray-300 text-gray-400 rounded-sm divide-y divide-gray-400 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary peer-checked:divide-primary  ">
                  <div class="pb-1 text-center">
<!--                    <img src="/icons/hotel.svg" alt="">-->
                    <h4 class=" pt-1">Best Value</h4>
                  </div>
                  <div class="flex pt-2 gap-1 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 text-secondary" v-for="(index) in 3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </label>
              </div>

            </div>
          </div>

          <h3 class="text-xs text-tertiary hidden  mt-3">You can choose one or more destinations</h3>
          <h3 class="text-lg text-tertiary font-semibold text-center pt-2">NUMBER OF TRAVELERS</h3>
          <div class="grid grid-cols-12 gap-6 my-3 overflow-x-scroll no-scrollbar focus:touch-pan-x">

            <div class="col-span-12 hidden md:col-span-2 border md:flex justify-center items-center rounded-sm bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>

            <div class="col-span-12 md:col-span-10 grid grid-cols-7 gap-3">
              <div class="flex" v-for="n in 6" :key="n">
                <input type="radio" :id="'radio_'+n" class="peer hidden" :value="n" v-model="traveller" />
                <label :for="'radio_'+n" class="w-full select-none cursor-pointer bg-white text-gray-800 rounded-sm text-center py-2 transition-colors duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-white"> {{ n }} </label>
              </div>

              <div class="flex">
                <input type="radio" :id="'radio_7'" class="peer hidden" value="7+" v-model="traveller" />
                <label :for="'radio_7'" class="w-full select-none cursor-pointer bg-white text-gray-800 rounded-sm text-center py-2 transition-colors duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-white"> 7+ </label>
              </div>
            </div>

          </div>


          <h3 class="text-lg text-tertiary font-semibold text-center pt-2">TRIP LENGTH</h3>
          <div class="grid grid-cols-12 gap-6 my-3 overflow-x-scroll no-scrollbar focus:touch-pan-x">

            <div class="col-span-12 hidden md:col-span-2 border md:flex justify-center items-center rounded-sm bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>

            </div>


            <!--          <div class="flex" v-for="n in 5" :key="n">-->
            <!--            <input type="radio" :id="'radio_'+n" class="peer hidden" :value="n" v-model="traveller" />-->
            <!--            <label :for="'radio_'+n" class="select-none cursor-pointer w-full border border-gray-300 text-gray-400 rounded-sm px-5 py-2 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary"> {{ n }} </label>-->
            <!--          </div>-->

            <div class="col-span-12 md:col-span-10 grid grid-cols-6 md:grid-cols-6 gap-3 overflow-x-scroll no-scrollbar focus:touch-pan-x">
              <div class="flex bg-white">
                <input type="checkbox" :id="'radio_t_1'" class="peer hidden" value="3-7" v-model="trip_length" />
                <label :for="'radio_t_1'" class="select-none leading-3 cursor-pointer w-full border border-gray-300 text-center text-gray-400 rounded-sm px-1 md:px-2 py-2 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary">
                  <span class="text-sm md:text-sm">3-7</span>
                  <hr>
                  <span class="text-xs">days</span>
                </label>
              </div>

              <div class="flex bg-white">
                <input type="checkbox" :id="'radio_t_2'" class="peer hidden" value="8-11" v-model="trip_length" />
                <label :for="'radio_t_2'" class="select-none cursor-pointer w-full border border-gray-300 text-center leading-3 text-gray-400 rounded-sm px-1 md:px-2 py-2 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary">
                  <span class="text-sm md:text-sm">8-11</span>
                  <hr>
                  <span class="text-xs">days</span>
                </label>
              </div>

              <div class="flex bg-white">
                <input type="checkbox" :id="'radio_t_3'" class="peer hidden" value="12-16" v-model="trip_length" />
                <label :for="'radio_t_3'" class="select-none cursor-pointer w-full border border-gray-300 text-center leading-3 text-gray-400 rounded-sm px-1 md:px-2 py-2 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary">
                  <span class="text-sm md:text-sm">12-16</span>
                  <hr>
                  <span class="text-xs">days</span>
                </label>
              </div>

              <div class="flex bg-white">
                <input type="checkbox" :id="'radio_t_4'" class="peer hidden" value="17-21" v-model="trip_length" />
                <label :for="'radio_t_4'" class="select-none cursor-pointer w-full border border-gray-300 text-center leading-3 text-gray-400 rounded-sm px-1 md:px-2 py-2 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary">
                  <span class="text-sm md:text-sm">17-21</span>
                  <hr>
                  <span class="text-xs">days</span>
                </label>
              </div>

              <div class="flex bg-white">
                <input type="checkbox" :id="'radio_t_5'" class="peer hidden" value="22+" v-model="trip_length" />
                <label :for="'radio_t_5'" class="select-none cursor-pointer w-full border border-gray-300 text-center leading-3 text-gray-400 rounded-sm px-1 md:px-2 py-2 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary">
                  <span class="text-sm md:text-sm">22+</span>
                  <hr>
                  <span class="text-xs">days</span>
                </label>
              </div>

              <div class="flex bg-white">
                <input type="checkbox" :id="'radio_t_6'" class="peer hidden" value="Undecided" v-model="trip_length" />
                <label :for="'radio_t_6'" class="select-none cursor-pointer w-full border border-gray-300 text-center leading-3 text-gray-400 rounded-sm px-1 py-2 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary text-[10px]">
                  Undecided</label>
              </div>
            </div>
          </div>



<!--          <h3 class="text-lg text-tertiary  my-5">Contact information</h3>-->

          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 pt-2 gap-3">
              <div class="relative">
                <div class="relative">
                  <div class="bg-white absolute rounded-md inset-0 -z-10"></div>
                  <input
                      type="text"
                      name="search"
                      class="is-input-ico peer"
                      placeholder=" "
                      autocomplete="off"
                      v-model="fullName"
                  />
                  <label class="is-input-ico-label">Full Name</label>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>

                  <div v-if="$v.fullName.$error" class="text-xs text-red-500">El nombre es requerido</div>

              </div>

              <div class="grid grid-cols-2 gap-3">

<!--                <div class="relative">-->
<!--                  <div class="relative">-->
<!--                  <div class="bg-white absolute rounded-md inset-0 -z-10"></div>-->
<!--                  <input-->
<!--                      type="text"-->
<!--                      class="is-input-ico peer"-->
<!--                      placeholder=" "-->
<!--                      autocomplete="off"-->
<!--                      v-model="phone"-->
<!--                      ref="phoneInputRef"-->
<!--                      id="phoneNumber"-->
<!--                  />-->
<!--                  <label class="is-input-ico-label">Phone Number</label>-->
<!--                  </div>-->
<!--                  <div v-if="$v.phone.$error" class="text-xs text-red-500">El nombre es requerido</div>-->

<!--                </div>-->

                <div>
                  <div class="relative">
                    <div class="bg-white absolute rounded-md inset-0 -z-10"></div>
                    <TelInput @updatePhone="handlePhoneChange"></TelInput>
                  </div>
                  <div v-if="$v.phone.$error" class="text-xs text-red-500">Phone Number required</div>
                  <div v-if="phoneError" class="text-xs text-red-500">Número no válido</div>
                </div>


                <div class="relative">
                  <div class="relative">
                  <div class="bg-white absolute rounded-md inset-0 -z-10"></div>
<!--                  <VMenu>-->
<!--                    <input type="text" class="is-input-ico peer" placeholder=" " v-model="formStore.travelDate" @focus="showModalProcess = true">-->
<!--                    <label class="is-input-ico-label" @click="showModalProcess = true">When</label>-->
<!--                    <div class="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-4 pointer-events-none">-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />-->
<!--                      </svg>-->
<!--                    </div>-->
<!--                    <template #popper>-->
<!--                      <vue-tailwind-datepicker as-single no-input :formatter="formatter" v-model="formStore.travelDate" @click="onClickSomething()" class="calendar-w"/>-->
<!--                    </template>-->
<!--                  </VMenu>-->

<!--                  <vue-tailwind-datepicker as-single  :formatter="formatter" placeholder="Tentative travel date" :disable-date="disablePastDates" v-model="travelDate" input-classes="is-input-ico peer !pl-3"/>-->
<!--                  <label class="is-input-ico-label !pl-0" @click="showModalProcess = true">When</label>-->


                  <client-only>
                    <VDatePicker v-model="travelDate" mode="date" :min-date="today">
                      <template #default="{ togglePopover }">
                        <button
                            class="is-input-ico peer text-left"
                            @click="togglePopover"
                        >

                          <!--                        <span v-if="filters.created_start && filters.created_end">{{ filters.created_start+' to '+filters.created_end }}</span>-->
                          <span v-if="travelDate">{{ moment(travelDate).format('YYYY-MM-DD') }}</span>
                          <span class="text-gray-500" v-else>Tentative travel date</span>
                          <span class="is-input-ico-label" >Inquire Date</span>

                          <span class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                          </span>
                        </button>

                      </template>
                    </VDatePicker>
                  </client-only>

                  </div>
                  <div v-if="$v.travelDate.$error" class="text-xs text-red-500">Travel date required</div>
                </div>
              </div>

              <div class="relative">
                <div class="relative">
                  <div class="relative">
                  <div class="bg-white absolute rounded-md inset-0 -z-10"></div>
                  <input
                      type="email"
                      name="search"
                      class="is-input-ico peer"
                      placeholder=" "
                      autocomplete="off"
                      v-model="userEmail"
                  />
                  <label class="is-input-ico-label">Email</label>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                    </svg>
                  </div>

                  </div>

                  <div v-if="$v.userEmail.$error" class="text-xs text-red-500">
                    <span v-if="$v.userEmail.email.$message">{{ $v.userEmail.email.$message }}</span>
                  </div>
                </div>
              </div>

              <div class="relative">
                <div class="relative">
                  <div class="bg-white absolute rounded-md inset-0 -z-10"></div>
                    <textarea
                        type="text"
                        name="search"
                        class="is-input-ico peer"
                        placeholder=" "
                        autocomplete="off"
                        v-model="comment"
                    />
                  <label class="is-input-ico-label text-xs md:text-[15px]">What can we do for you? We have it all. Just ask!</label>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            <div class="flex justify-center mt-6">
              <button type="submit" class="btn-primary" v-show="showLoader == false">Send</button>
              <button type="button" class="btn-disabled w-full justify-center flex" disabled v-show="showLoader == true">
                <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </svg>
                Processing...
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>


  </div>
  <client-only>
    <NotificationGroup group="foo">
      <div class="fixed inset-0 flex z-50 items-start justify-end p-6 px-4 py-6 pointer-events-none">
        <div class="w-full max-w-sm">
          <Notification
              v-slot="{ notifications }"
              enter="transform ease-out duration-300 transition"
              enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
              enter-to="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-500"
              leave-from="opacity-100"
              leave-to="opacity-0"
              move="transition duration-500"
              move-delay="delay-300"
          >
            <div v-for="notification in notifications" :key="notification.id">
              <div
                  v-if="notification.type === 'success'"
                  class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div class="flex items-center justify-center w-12 bg-green-500">
                  <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-green-500">{{ notification.title }}</span>
                    <p class="text-sm text-gray-600">{{ notification.text }}</p>
                  </div>
                </div>
              </div>

              <div
                  class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
                  v-if="notification.type === 'error'"
              >
                <div class="flex items-center justify-center w-12 bg-red-500">
                  <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500">{{ notification.title }}</span>
                    <p class="text-sm text-gray-600">{{ notification.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>
  </client-only>
</template>
<script setup lang="ts">
import {useFormStore} from "~/stores/form";
import {email, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {useIpStore} from "~/stores/ip";
import {Notification, NotificationGroup, notify} from "notiwind";
import VueTailwindDatepicker from "vue-tailwind-datepicker";


import moment from "moment-timezone";
import TelInput from "~/components/form/TelInput.vue";
const { dataLayer } = useScriptGoogleTagManager()

const today = new Date();

const { $device } = useNuxtApp()

const formStore = useFormStore()
const ipStore = useIpStore()

const showLoader = ref(false)

const travelDate = ref()
const traveller = ref()
const hotel = ref([])
const destination = ref([])
const trip_length = ref([])

const fullName = ref('')
const phone = ref('')
const userEmail = ref('')
const comment = ref('')

const country_code2 = ref('')
const country2 = ref('')

const listDestination = ref([])

const geoIp = ref()

const phoneInputRef = ref(null);

const showModalProcess = ref(false)


const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})

// const disablePastDates = computed(() => {
//   return (date) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Asegurarse de que solo se comparen las fechas
//     return date < today;
//   };
// });

const disablePastDates = (date:any) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Asegurarse de que solo se comparen las fechas
  return date < today;
};

// VALIDACION
const rules = {
  fullName: { required },
  phone: { required },
  userEmail: { required, email },
  travelDate: { required },
  // comment: { required },
};

const $v = useVuelidate(rules, { fullName, phone, userEmail, travelDate});

const onClickSomething = () => {
  showModalProcess.value = false
}


const saveInquire = async (obj: any, obj2: any) => {
  try {
    await formStore.saveInquire(obj)
    await formStore.saveLead(obj2)
  } catch (error) {
    console.error("Error al guardar inquire o lead:", error)
    throw error
  }
}

function getBrowserName() {
  if ($device.isChrome) return 'Chrome'
  if ($device.isSafari) return 'Safari'
  if ($device.isFirefox) return 'Firefox'
  if ($device.isEdge) return 'Edge'
  if ($device.isSamsung) return 'Samsung Browser'
  return 'Unknown'
}
const handleSubmit = async () => {

  $v.value.$validate();
  if ($v.value.$invalid) {
    // manejar errores
    console.log('Formulario no válido');
  } else {
    // manejar envío
    console.log('Formulario válido');

    showLoader.value = true

    let obj = {
      category_d: hotel.value,
      destino_d: formStore.destination,
      pasajeros_d: traveller.value,
      duracion_d: trip_length.value,

      el_nombre: fullName.value,
      el_email: userEmail.value,
      el_fecha: travelDate.value ? moment(travelDate.value).format('YYYY-MM-DD') : null,
      el_telefono: phone.value,
      el_textarea: comment.value,

      country: country2.value,
      codigo_pais: country_code2.value,

      producto: "gotoecuador.com",
      device: $device.isMobile ? 'Mobile' : $device.isTablet ? 'Tablet' : 'Desktop',
      browser: getBrowserName(),
      origen: "Web",
      inquire_date: moment().tz('America/Lima').format('YYYY-MM-DD HH:mm:ss')
    }

    const obj2 = {
      product_id: 6,
      package: '',
      hotel_category: hotel.value,
      destinations: formStore.destination,
      passengers: String(traveller.value),
      duration: trip_length.value,
      travel_date: travelDate.value ? moment(travelDate.value).format('YYYY-MM-DD') : null,
      country: country2.value,
      country_code: country_code2.value,
      device: $device.isMobile ? 'Mobile' : $device.isTablet ? 'Tablet' : 'Desktop',
      origin: 'Web',
      browser: getBrowserName(),
      name: fullName.value,
      email: userEmail.value,
      phone: phone.value,
      comment: comment.value,
      initial_price: 0,
      inquiry_date: moment().tz('America/Lima').format('YYYY-MM-DD HH:mm:ss'),
      dialCode: ''
    }

    dataLayer.push({
      user_properties: {
        "user_id": {"value":  crypto.randomUUID()},
        'email': {"value":  userEmail.value},
        'full_name': {"value":  fullName.value},
        'tentative_date': {"value":  formStore.travelDate},
      },
      'event': 'generate_lead',
      'HotelCategory':  hotel.value,
      'NumberTravelers': traveller.value,
      'TripLength': trip_length.value+' day',
    });


    await formStore.getInquire(obj).then(async (res) => {
      try {
        if (res){
          await saveInquire(obj, obj2)
          showLoader.value = false


          travelDate.value = []
          traveller.value = ""
          hotel.value = []
          formStore.destination = []

          fullName.value = ""
          phone.value = ""
          trip_length.value = []
          userEmail.value = ""
          comment.value = ""
          formStore.showModalInquireGlobal = false
          // localStorage.clear()
          formStore.$reset()

          $v.value.$reset()

          notify({
            group: "foo",
            title: 'Well done',
            type: "success",
            text: "Your trip has been successfully created 🙂",
          }, 4000) // 4s
        }else{
          formStore.$reset()
        }
      } catch (error){
        console.log(error)
      }
    }).catch((err) => {
      showLoader.value = false
      formStore.showModalInquireGlobal = false

      travelDate.value = []
      traveller.value = ""
      hotel.value = []
      formStore.destination = []

      fullName.value = ""
      phone.value = ""
      trip_length.value = []
      userEmail.value = ""
      comment.value = ""
      formStore.showModalInquireGlobal = false
      formStore.$reset()

      $v.value.$reset()

      notify({
        group: "foo",
        title: 'Error',
        type: "error",
        text: "Error :(",
      }, 4000) // 4s
    })



  }
};

const getPais = async () => {
  const res:any = await formStore.getCountry('peru')
  // listDestination.value = res
  listDestination.value = res.filter(desti => desti.form === 1);
  console.log(listDestination.value)
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

const getIp = async () => {
  const res = await ipStore.getIp()
  geoIp.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

const phoneError = ref(false)

const handlePhoneChange = ({ number, isValid, country, country_code, dialCode }) => {
  // console.log(number, isValid, country, country_code, dialCode)
  phone.value = number

  country2.value = String(country)

  country_code2.value = dialCode+' +'+country_code

  phoneError.value = !isValid
}


onMounted(async () => {

  await getIp()

  await getPais()

  // if (process.client) {
  //   // @ts-ignore
  //   import('intl-tel-input/build/js/intlTelInput.min.js').then((module) => {
  //     const intlTelInput = module.default;
  //     if (phoneInputRef.value) {
  //
  //       // if (res.token) {
  //       //   policyStore['tokenLogin'] = res.token
  //       //   loadingUser.value = false
  //       // }
  //
  //       intlTelInput(phoneInputRef.value, {
  //         initialCountry: "auto",
  //         // @ts-ignore
  //         geoIpLookup: function(callback) {
  //           fetch("https://ipapi.co/json")
  //               .then(function(res) { return res.json(); })
  //               .then(function(data) { callback(data.country_code); })
  //               .catch(function() { callback("us"); });
  //         },
  //       });
  //     }
  //   });
  // }

})

</script>
<style>
@import 'intl-tel-input/build/css/intlTelInput.css';
.iti__selected-dial-code{
  padding-top: 12px;
}
</style>