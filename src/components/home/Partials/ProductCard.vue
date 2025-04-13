<script setup>
import Star from '@/components/@components/icons/Star.vue'

defineProps({
    item: {
        type: Object,
        required: true,
    }
})
</script>

<template>

    <div
        class="font-jakarta delay-50 w-full group flex cursor-pointer flex-col justify-between rounded-[20px] border transition duration-200 ease-in-out hover:scale-[1.03]">
        <div class="relative h-[188px] overflow-hidden rounded-t-[20px] md:h-[178px] lg:h-[188px]">
            <img :src="item?.thumbnail"
                class="relative h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />

            <div
                class='absolute left-4 top-4 w-fit bg-white overflow-hidden text-ellipsis rounded-full  px-3 py-1 text-sm font-medium capitalize  shadow-md'>
                {{ item?.availabilityStatus }}
            </div>
            <div
                class="absolute right-4 top-4 flex w-fit items-center gap-x-2 overflow-hidden text-ellipsis rounded-full bg-white px-3 py-1 text-sm  shadow-md font-medium capitalize text-black">
                <Star class="h-4 w-4 fill-[#fbbc04]" />
                <span>{{ item?.rating }}</span>
            </div>
        </div>
        <div class="flex flex-col rounded-b-[20px] bg-white px-4 py-[21px] w-full ">
            <div>
                <p
                    class="line-clamp-2 min-h-[40px] max-h-[40px] overflow-hidden text-ellipsis  text-base font-semibold capitalize leading-[19.36px] text-black lg:text-wrap">
                    {{ item?.title }}
                </p>
                <p class="mt-1.5 text-[15px] min-h-[20px]   font-medium text-[#727272]">
                    {{ item?.brand }}
                </p>
                <div class="flex flex-nowrap items-center gap-x-2 mt-2 max-h-[20px] h-[20px] min-h-[20px]">
                    <div v-for="tags in item?.tags" :key="tags?.id"
                        class="flex w-fit items-center justify-center rounded-full bg-[#F5F5F5] px-2 py-1 text-sm font-xs capitalize text-xs text-ellipsis overflow-hidden text-nowrap text-[#727272]">
                        {{ tags }}
                    </div>
                </div>
            </div>
            <div class="mt-7 flex items-center gap-x-2">
                <div class="flex flex-col justify-center">
                    <p class="text-base font-bold capitalize text-[#505050]">
                        ${{ item?.price }}
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <div class="flex items-center text-sm">
                    <div
                        class='flex w-fit flex-col items-center white justify-center rounded-lg font-medium px-3 bg-red-400 py-1 rounded-lg'>

                        {{ item?.discountPercentage }} %

                    </div>
                    <div class="text-nowrap pl-[7px] text-sm font-medium">
                        Off
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
