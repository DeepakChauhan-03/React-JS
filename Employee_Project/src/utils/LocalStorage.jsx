const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create responsive login page using Tailwind CSS",
        date: "2025-01-05",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve navbar alignment issue on mobile view",
        date: "2025-01-02",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update README",
        description: "Add project setup instructions in README file",
        date: "2024-12-30",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate product API with frontend",
        date: "2025-01-06",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Redux Setup",
        description: "Configure Redux Toolkit for state management",
        date: "2025-01-03",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Unit Testing",
        description: "Write unit tests for auth module",
        date: "2024-12-28",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 5,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create Dashboard UI",
        description: "Build dashboard cards and charts",
        date: "2025-01-07",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress and optimize website images",
        date: "2025-01-01",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy on Netlify",
        description: "Deploy latest build on Netlify",
        date: "2024-12-27",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database Schema",
        description: "Design MongoDB schema for tasks",
        date: "2025-01-04",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Auth Middleware",
        description: "Implement JWT authentication middleware",
        date: "2025-01-02",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Error Handling",
        description: "Improve global error handling in Express",
        date: "2024-12-29",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Content Writing",
        description: "Write content for landing page",
        date: "2025-01-06",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Optimize meta tags and headings",
        date: "2025-01-01",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social Media Plan",
        description: "Prepare weekly social media posting plan",
        date: "2024-12-26",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem("employee", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employee'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees,admin}
}