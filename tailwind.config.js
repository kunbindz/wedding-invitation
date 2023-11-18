module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "couples": "url('https://res.cloudinary.com/ecommerce-picture/image/upload/c_scale,h_2560,q_100,w_1706/v1700294576/IMG_8857_axyxji.jpg')",
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
