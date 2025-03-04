# 🚀 TaskFlow - Modern Task Management App

TaskFlow is a beautiful and intuitive task management application built with React, Firebase, and Supabase. It features a modern UI, real-time updates, and seamless task management capabilities.

![TaskFlow Dashboard](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop)

## ✨ Features

- 🔐 **Secure Authentication**: User authentication powered by Firebase
- 📝 **Task Management**: Create, update, and delete tasks with ease
- 🎯 **Task Status**: Mark tasks as complete/incomplete
- 💫 **Modern UI**: Beautiful animations and transitions using Framer Motion
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔄 **Real-time Updates**: Instant updates using Supabase

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Authentication**: Firebase Auth
- **Database**: Supabase
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📱 Application Screenshots

### Login Page
![Login Page](/public/screenshots/login-page.png)
Secure authentication with email/password and a modern UI with gradient background

### Register Page
![Register Page](/public/screenshots/register-page.png)
User-friendly registration form with password confirmation and helpful features list

### Dashboard
![Dashboard](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop)
Clean and intuitive task management interface

### Task Management
![Task Management](https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop)
Easy task creation and management

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/taskflow.git
   cd taskflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🎯 Core Features

### User Authentication
- Secure login/register with email and password
- Protected routes for authenticated users
- Persistent user sessions

### Task Management
- Create new tasks with title and description
- Mark tasks as complete/incomplete
- Delete tasks
- Real-time task updates

### Modern UI/UX
- Clean and intuitive interface
- Smooth animations and transitions
- Responsive design for all devices
- Loading states and error handling

## 📦 Project Structure

```
taskflow/
├── src/
│   ├── components/     # Reusable components
│   ├── context/       # Auth and other contexts
│   ├── pages/         # Main application pages
│   ├── store/         # Zustand store
│   ├── styles/        # Global styles
│   └── utils/         # Helper functions
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

## 🔒 Security Features

- Firebase Authentication for secure user management
- Row Level Security (RLS) in Supabase
- Protected API routes
- Secure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Firebase and Supabase for backend services
- Framer Motion for beautiful animations
- Tailwind CSS for styling utilities
- Unsplash for beautiful images
