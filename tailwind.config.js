module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "couples": "url('https://res.cloudinary.com/ecommerce-picture/image/upload/v1712847618/ap_2_wwmc4t.jpg')",
        "texture": "url('@/assets/textures/paper.png')",
        "prewedding": "url('@/assets/prewedding.jpg')"
      },
      fontSize: {
        'xxs': '.65rem',
        'title': '3.5rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}
