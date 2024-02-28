<template>
  <div class="flex h-screen flex-col items-center justify-center bg-gray-100">
    <div class="mb-5 animate-pulse">
      <img src="/Logo.png" alt="Logo" class="h-10 customFill" />
    </div>
    <div
      class="mt-5 px-5 text-center text-xl font-medium text-teal-800 dark:text-teal-500"
      v-html="getRandomSlogan()"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'SplashScreen',
  methods: {
    getRandomSlogan() {
      const slogans = [
        'Loading brilliance<br /> one line of code at a time!',
        'Unleashing the magic of code<br /> just for you!',
        'Buckle up! Code in progress<br /> Fasten your seatbelt!',
        'Brace yourself for a code-driven masterpiece!',
        'Loading awesomeness...<br /> because backend is where the magic happens!',
        'Raising the code curtain<br /> get ready for the backend spectacle!',
        'Cooking up code delicacies<br /> just for you. Loading...',
        'Code may be silent, but the magic is loud<br /> Loading greatness!',
        "Behind every pixel, there's a coder's touch<br /> Loading brilliance now!",
        "Hold tight...<br /> we're injecting pure code joy into your experience!",
      ]

      const randomIndex = Math.floor(Math.random() * slogans.length)
      return slogans[randomIndex]
    },
  },
}
</script>

<style>
@keyframes pulse {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>
