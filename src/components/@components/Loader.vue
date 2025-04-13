<template>
    <div class="flex flex-col items-center h-full justify-center w-full">
        <div class="loader "></div>
    </div>
</template>

<style>
.loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 100%;
    background: black;
    box-shadow: 0 0 0 0 black;
    animation: l1 1s infinite;
}
@keyframes l1 {
  100% {
    box-shadow: 0 0 0 30px #0000
  }
}
@keyframes blink {

0%,
100% {
  opacity: 1;
}

50% {
  opacity: 0.4;
}
}

.animate-blink {
animation: blink 1s infinite;
}
</style>
