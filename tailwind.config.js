module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "couples": "url('https:///res-console.cloudinary.com/ecommerce-picture/thumbnails/transform/v1/image/upload/Y19zY2FsZSxoXzI1NjAsd18xNzA2/v1699091498/QklTMDg4MzdfdGtrbHQ5/template_primary')",
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
