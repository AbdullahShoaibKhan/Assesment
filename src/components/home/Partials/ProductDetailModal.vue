<script setup>
import Star from "@/components/@components/icons/Star.vue";
import { defineProps, defineEmits } from "vue";

defineProps({
  item: Object,
});
</script>

<template>
  <div class="overflow-hidden">
    <div class="h-fit w-full">
      <div class="flex max-h-[60px] min-h-[60px] items-center justify-between gap-x-3 border border-b px-5 pb-4 pt-5">
        <div class="w-[3%]"></div>
        <div class="flex w-full flex-col items-center overflow-hidden text-center">
          <h2 class="text-[17px] text-ellipsis text-wrap font-extrabold capitalize text-[#414141]">
            {{ item?.title }}
          </h2>
        </div>
        <div class="w-[3%]"></div>
      </div>
    </div>
    <div class="flex w-full flex-col max-h-[550px] overflow-y-auto sm:overflow-hidden">
      <div class="mt-3 flex sm:flex-row flex-col items-start gap-6 px-9 py-8 pt-5 md:px-[50px]">
        <div class="sm:w-[50%] w-full h-[300px] sm:h-[420px] border rounded-xl border-grey-100">
          <img :src="item?.thumbnail" class="h-full w-full rounded-lg object-contain object-center " alt="item.title" />
        </div>
        <div
          class="flex flex-col sm:w-[50%] w-full h-full max-h-[420px] overflow-none sm:overflow-y-auto gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal">
            <div class="font-semibold pb-1">Description</div>{{ item?.description }}
          </div>

          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal grid grid-cols-2 gap-2">

            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Category</div>{{ item?.category }}
            </div>
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Rating</div>{{ item?.rating }}
            </div>
          </div>
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal">
            <div class="font-semibold pb-1">Tags</div>
            <div class="flex flex-nowrap items-center gap-x-2 mt-2 max-h-[20px] h-[20px] min-h-[20px]">
              <div v-for="tags in item?.tags" :key="tags?.id"
                class="flex w-fit items-center justify-center rounded-full bg-[#F5F5F5] px-2 py-1 text-[15px] capitalize text-ellipsis overflow-hidden text-nowrap text-black">
                {{ tags }}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 w-full">

            <div></div>
          </div>
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal grid grid-cols-3 gap-2">

            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Price</div>$ {{ item?.price }}
            </div>
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Stock Status</div>{{ item?.availabilityStatus }}
            </div>
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Discount</div>{{ item?.discountPercentage }} %
            </div>
          </div>

          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal grid grid-cols-3 gap-2">

            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Width</div>{{ item?.dimensions?.width }}
            </div>
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Height</div>{{ item?.dimensions?.height }}
            </div>
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Depth</div>{{ item?.dimensions?.depth }}
            </div>
          </div>
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal">
            <div class="font-semibold pb-1">Warranty Policy</div>{{ item?.warrantyInformation }}
          </div>
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal">
            <div class="font-semibold pb-1">Return Policy</div>{{ item?.returnPolicy }}
          </div>
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Shipping</div>{{ item?.shippingInformation }}
            </div>
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Weight</div>{{ item?.weight }}
            </div>
          </div>
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
              <div class="font-semibold pb-1">Barcode</div>{{ item?.meta?.barcode }}
            </div>
            <div class="flex flex-col gap-1 h-20 w-20">
              <img :src="item?.meta?.qrCode" class="h-full w-full rounded-lg object-contain object-center "
                alt="QR code" />
            </div>
          </div>
          <div class=" border border-grey-100 p-2 rounded-xl text-base font-normal">
            <div class="font-semibold pb-1">Reviews</div>
            <div class="flex flex-col gap-1">
              <div v-for="review in item?.reviews" :key="review?.id">
                <div class="flex justify-between items-center">
                  <p class="text-sm font-medium">{{ review?.reviewerName }}</p>
                  <div class="flex items-center gap-1">
                    <Star class="h-4 w-4 fill-[#fbbc04]" />{{ review?.rating }}
                  </div>
                </div>
                <div class="text-xs font-thin mb-1">{{ review?.comment }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>