# 🔗 URL Shortener App

This is a simple URL shortener web application built with **Next.js**, **MongoDB**, and **Tailwind CSS**.  
Users can paste their long URLs, save them, and get a shorter link. When users click on the shortened link, it redirects to the original site.

---

## ✨ Features

- 🔗 Shorten any valid URL
- 📎 Store URLs in MongoDB database
- 🔁 Redirect to original website using short link
- 💻 Built using Next.js, Tailwind CSS, and MongoDB
- ⚡ Fast and simple interface

---



## 🚀 Live Demo

🔗 [Live Site](https://shortner-url-five.vercel.app)  
*(Replace with your actual Vercel link)*

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** MongoDB (via Next.js API routes)

---

## 📂 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/tulsishuka/shortner-url.git

# 2. Navigate to the project directory
cd shortner-url

# 3. Install dependencies
npm install

# 4. Create a `.env.local` file in the root and add the following:
MONGODB_URI=mongodb://localhost:27017
NEXT_PUBLIC_HOST=http://localhost:3000

# 5. Run the development server
npm run dev


