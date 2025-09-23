"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
import {
  Target,
  BookOpen,
  Users,
  Diamond,
  Rocket,
  Globe,
  Zap,
  Shield,
  Cloud,
  Lock,
  BoltIcon,
} from "lucide-react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "AI Models Trained", value: 500, suffix: "+" },
    { label: "Users Worldwide", value: 1000000, suffix: "+" },
    { label: "Countries Served", value: 120, suffix: "+" },
    { label: "Uptime", value: 99.9, suffix: "%" },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "Deepkore was founded with a vision to democratize artificial intelligence.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "First Breakthrough",
      description:
        "Launched our first neural network model, revolutionizing creative workflows.",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to serve millions of users across 80+ countries.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Neural Vision 3.0",
      description:
        "Released advanced computer vision capabilities with unprecedented accuracy.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Enterprise Solutions",
      description:
        "Launched enterprise-grade AI solutions for Fortune 500 companies.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Neural Vision 3.5",
      description:
        "Current generation with cutting-edge multimodal AI capabilities.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "No Code - No Limits",
      description:
        "Empower your team to build applications faster with our intuitive no-code platform that removes technical barriers.",
      color: "from-[#00A551] to-[#2791D0]",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Run It Your Way",
      description:
        "Deploy your applications in the cloud or on-premises - you choose what works best for your organization.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description:
        "Bank-level security with comprehensive data protection, encryption, and compliance standards.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Data Access",
      description:
        "Advanced authorization, secure data access controls, and comprehensive audit trail generation for full compliance.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const team = [
    {
      name: "Murugan Mariappan",
      role: "Founder at Deepkore",
      //   image:
      //     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAWEBAVEBYbEBUVDRsQEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTItMSs3MEQwIys9QD8uQDQuMC0BCgoKDQ0NFg0PFSsaHxkrLTc3Ly0tKzc3NysrKy44LTc3Ky03KystKys3NystKysrKysrKysrKysrKysrNy4rK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIEBQYDBwj/xAA9EAABAwMBBQUGBQIFBQEAAAABAAIRAwQhMQUGEkFRImFxgZEHEzKhscEjQlLR4WLwFIKSorIkM3LC8RX/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAJhEBAQACAgICAQMFAAAAAAAAAAECEQMhEjEEQWEiUYETIzIzQv/aAAwDAQACEQMRAD8A8iRQATltASSSQJJJJAkUISCoMIFElNz0QJJN4D4JobyUHTCBXMtIQpHMIOiSdg59QgQqGwlCKSgaUESggCSKSBqSKSBIIlJBIhJOQhAAEYRCMKhsJQnwlCBhCCeQmPMSgTy0anK4/wCIM4RfTxMqXsjZFW5qBlNpPUxhoWbdLJvqIDqrikJI00XqNnuFTDQH5PPClHc23bo09+cLl/Vj0T49eS03aymuOsYXol9ubSkxKzm092jTJ4TI71qckrGXBlGeJk49VNc2QOcxJ8VFq0y08JEJvvCBrzyukrkkObBIPJMK7cXEwGNAB/8AVxKqGlJEoKAJIoIAkiUECKCJQQTEoSSVBCKCQRBSSSRShcq7cFdUKmhQChSwxoySde5et7pWDKVJvC0AkSe8rzDYtI1KtJjQJdqegXp9LbNG2EOkhojxK48nfUejh63a04BjAUaowzkKFsvfe3qu4PdlvQnmtC2pTflsGBK5eOnome2eurcnks3tWzJ5LW3e2qQY8gZZ8QXn+095rioSKdEhnXhKsx2ZZ6Ve0NnS04WVrUDJHRbfZO0DUeKVUZccYyFS7esjRrAxLSfIr0Yzp48+6pbCqA7hPwn6ovEEjvQo0PxQIntY5p1Y9px7ytfTmYgiUkDUCnFNKAJJJKAJIoIJpSRSCqAinQjCBkJJ8IEIGwk4SCO5FEBBe+zyjx13E6hkN8SQFu7q1oU4bUAe78xOn7rH7nUH0q1Vhc4BppvLPyvPWP71W1qWnvKoqHtRlsLjbNvVhjbjpQXe06YqcNqwCGy4BpcAO/p5rSbBvX9oOa4ksnTs88EeRzC6nYheTwtbTDvjPAOJ/jCnWtlwvqPBlgpimzGpBJcfUgeRUysvp1xxs6rIUL4Nr1S9gc7PCHdvhPcoO8dxcNaz8FzuMSHBwc0DoY0P7rnvEH0rg1M8JdBI/KVOFE1WD8RwBGMyFd6jPjbbNs7bVNHQ4FpmHN0cM6/Tn9VaXnHeUHk0w9zQ4hzewWxJk9VIp7ONMVGg8QeOnP8Asq82TYGjQeSMcBJ8IXTG79OOeOvbzIEA8R1DSQYjKqiratSyHDI940OBH6uKP+J+SqnBb3vpx8dTZqSSSiAUCiUCimpJJIEUEUlBNTgEoSCqCikkgSBTkCqGhFJJQbyg9rqlrcM0qUOF/c9p0+q3Gz7bALIPODp68l5vutWJt3siRTuGOn9PEC37L0zZtUADwXly6r38d3jt2r++ENHCxoEvIJc6O44hRLTeGh+IxrSG0xHEaZFM+DtF22htijbNdUqvAnDRzPgsza7x1aziGUvwyTAA+vqtL5SXTN7b3hD6z6bWcTCcnhkKfuhSFVtZhDqYBmn2iPHyXDfysWua5jQHYMcMOiOarNh71im4B7eHvV7s6Y8pMu2l/wAKRUAknxMrVUmg0XN5cBCyb70Go17TIOnetVs88VN3euvF6cub28k2gPd1LqlPE1rWOz+SoIAH+4+Sz5Wy39thSceACKlU8ZDfie3WT/m+SxpC1pyyv0CBRKBRgEEUEAQRQRSQRQUFikhKIcqgohAFFUJBEoSECSTS5CSg1e6O07ajSuG1iRUfHuzwkh0aD1XoNhWHC3OCMLxPiXo+7G1BUoMBPaA+Y1Xn5cft6uHP/lV720q9faApUhOG8JPwtEK72du4yiz8SoWujLpDc+JVts2o33hecuI15q0vqdOq3LQ4d+hU23Jq215ztuzoyS1xqE/ES/jJKzVTZTzppqF6JdUaDJPu2gTyWV2ndtDjwRHKFZbvpM/GztzseJnAxxz46L0XY9xFFp5kiF5hYvL3fKVtbS7lzaTSSGNl3kNPNdsOnDO7Yje/aL6lzcU5/Dbc1C0d+hP+0KgK63T3F7y/4i4l06zOVxJVciKBQSQJBIoIEgkgikkkkoJsJ0IohVDYTgiElQHFNhFFA2EoTkgCcDJQDhWk3OY5xqsE8MAg8mu5eufRQ9nbuXFYiG8APN+Plqrfb9L/APPpW9Ck78UvNR7xjiIwPLKlx3NNY5au0ipd16b8CSNR1XV+8FcMPYIMHvhcbTaTLzB/DuAMx8Lx1C5XVvXEgEfuuF/TdV6Z33Kq7rbr+EtdxTmZCoXXJJOFYXljVLoKh16ApntHyHxFaxv7OeUv2fa3Lm5bry6BWn+PNKkKVMzVquHG7UhoMn1wFnalwToOEDorvd+1NTiqnQENZ5ZP2XbGfdcrfqNVvfuoK7W3VtAquaDUp8qp6jv+vjr5/cWdWnPHTc2DmWEQvTqd+eFrT+VuFCpy6o4gwSJMc+R+y3cZWHmyEL0i93ct60l1Pgd1ZDD6aH0VFebk1RJo1G1B0cOB/wBx8ws+NXbJoKffbIuKM+9ovaOvDLPUYUBZASSSKAJJJILBGUElQpSSVpsnYdW4hwhrJ1PPrAQVS72tpUqmKbC49wwPNbnZ+6NFsFw4z1dp6LR2uz2MAAAAGgELXim2I2bue50Gs8AdG/utNYbDpUoDKYB6/m9VckRoE3hOCMdcTha1pDqNJtPxXmu/V3x33CDPBTAPicr0h74kleN390a13cVNZeY8FPtXWm8tIc08LgZaQcgrW7P23QrsDa4NOqObTDX98LHEqXbbONRgqB4idMyP77ljmxxs7d/jzPLLWK/25c0KIlrnPeR2W4b5uOseCxVYlzi4nJKmbQYWuy4OJzIKr6jlMMZJtOW5eWq51Xr0fd/ZrWWlEEZc3id4nP0XndlbGrWp0hq94HhJ1XsTqYaABoBAWnJVVbfhGIjx0CZZVg+q33YLgJD3D4IjSesxgK1c1rpBAPURMrk5raQpgCGlwaAPy+HcrsSA3HRNIXZrAMDl1THfZA1lRwnOPFV9/sSzuJNSiGO5vpHgd4wMHzCsmN9YXGoz1jKu0ZO+3Bdrb12vHJtQcDvXIPyWX2nsqvbO4K9J1M8pHZd4HQ+S9PfULcjB8Vo9hU6d0HW9ywVaZEFrhPp0PeFNSj5/SVtvXsg2V5cW2SKdQhhOrmHLT6EJLDTiiE2UZVRL2daGtVp0m6ucB4DmV6hs2zDS5gA4KbWtZ6Sfssd7ObXjui8iRTpk+Zx9JW/2W0H3561j/wAWreKV1Y2EXNPNdi2P4XN3IDzWkRyw849E9/8AeF0IOnf81xq4Bz9llVXt+791bVn9KZheQ2YMcXV2V6J7RbjgtAwfncBqsA0QwDuSe1c7+t+RvP4lbbAquZSc2AZJIz2hA1AVfSoyQAMlaq1tm07Z41dBh0Twk4xqufI9vwsbcrlPpib6s73hzJBx0wlBMRz+SZWYeLOsqZSbkK4R5uW/qq23ItOK9aeVNpcZ9PuvQ6o4iOnis37P7SBcVtJcGjyEn6haKmSTJHOFvTm6tpzGoUaoC6vTbPwNLzjmcD7qw4O7wUDZ44n1qmsv4W+Df5LkE8fdMc3IB708t+RXNwzg4hAg3uicFNe3nMTphI8+9Me3AMHUhQRh2njoBJ8v5Uzd69LariP1TKrnENp1XzkkNE+v3Td16w95AMydOSsSq722W4N3b3LR2a1uJPV7DB+RaktP7Q9k++snU4l9MGtQPgO23zE+YCSzlO1lePSjKaisj0j2X234NepzdUDR4NE/+y1Wy/hcY+Kq/wBAY+yrdxbX3dhRkZcHOPmcfKFbbOH4Yjq+P9RXSemXWt4R5LmGd66nqmAc8qjm9uQFxq8sc8KQ/UeHXC4OGfBRp5/7UKvat2c5JIWTGT3BXntIqzeMbOBTH1KpKQwmPsqy2NR4nk9B8z5hXN4TwnlkhsjPe0Tyx1Ubd63JYTqCTj9X95VleU+xrMjUavHKIPKVxzvb7XxOPXFPywt/Sh4H9QT6WT3BLaru2ANZOn996kbPocb2Uxq5wA8yunG+Z8nU5LI9G2BQ9zZUwdXDiPUz/EKbatk94Tr+GhrAMNaBHcMJ9jTEeHpK28595V93Se88mmO8rlYW/uqTG6uAl3e4zJ9ShtPtVLehMhz+J3/i3P14fVTakz9Mwg5OiYiVHcc4ClGAc6qJVPa1+SBHTJ5qPcOifFOc7XKrr+4gOUV2qYt2SJ4iTnxwuOybmn71sAMM6KTtppZSps/SwYnuWZou4Xgk5lEe00GNq0g0wSPhRVPu/fcVNpByIIRWmXgMrpbUjUexg1c4AeJMLkr7ce197fUAdGkuPkJHzhco29gtaLadNtMYDWBrfIQFzsP+2OfxAf6iu4GCVHs9HD9NRw+/3XRl0PNAjyXWPLOqaWeeFFcXHXnjCFOnnzXVzQPNFwyOiK8d9or52g4Dkxo+v7qqbyCs/aE2NoPPVo5KBsylx1GDq4ekqT7ak3ZG62Xa+7o02c4BI5zOvguW1n9jvPPv6CRoYXcScDOP9XUHuUa/b2T0jUauGdIPKVw/Nfop1jMYwm0GxUYPGB05fZaXcS047wOOlNpd56D6/JUW2W/9Q0f08vErdbh2vu7arXIzUdDT/S3+SfRd+P0+D8n/AG2La7PE89JVjbABo5BQaFOXElS7qv7uk98SQOyOrjgDzK04ItgRUr1q0YbFNnllx9ceSn1AJHiuVjbe6psYdQ3tHTiJyT5lOdpr80HOtr06qDXd8ypF1UgnuVXc3HWIn7IBXrwdOSgh3vKtOnk8T2giOU5+S5XlzHqn7rEvu2n9LXuzy5fdRVlvNUzgclmaYPFrzwrzeCTUycSYVA6oQfNBstiXTmAEFJVezqnZGfzDvSW2Xna3Psttpq16v6WBo8zJ/wCKw4XqPs1tuG0c/wDXVJ8gAPsVyx9tVrHVIB6BVuybsGvXpgz2GuGekg/ZS7xh4X8OpbhZXdwubeguOHNLT6T9QtstnH7o8+uPNPnXwTSNZ/hRReNCmMbnqumI05pAZPJB5F7UKUXTHdW59VB3Yo8VZuJhpJ7uX3Wg9q9v2qL/AOqCoG51MF9QjJDQI6ydPks3qV6PjY+XLjGjosI9ckfmOIPgom0DnJAzk9DjAnkVYkjxx4F/9Kp7h5LidYHLSM4HeuHt9+9RjtoO4rp8CIaAB0wML1mlQ91QoUYgtptDh3xn5yvNt2bL3+0wwgke9l09G5z6L0+8fLzHJejD0/O813yZUbenphMufxK9Onq1hFR/0aPWT/lUlrgxpc7AAJPLCg7IBc19dwIdVdxRPwt0aPT6rTkmVtdeqZUOCMeQXG6qkGRIx0VXcVXEGS7ywqO10/JJ8Z8ln7y4BJJcAJnWUy9BOpMTzVVdaGBiFAby/D5gEAYE88aq93BaC+u88mADzn9ljXP18VstwRFOq6NXgeg/lZipG8EcZ1WerDU96v8AbkcXl4qhqjGn7qiTaXXCAD+pJcC3sz9klUZgL2ndK393ZWzetIE+fa+6CSziVZ1jr4ZlYa7qe7vKT5gCo0n1ykktI306/sncWUklFENnHenD5/dJJFYn2p282vF0IPzWY3E/7dVx5vA78D+Uklzzez4M/uz+Wm4pnPcY5HlCiVKQBJMAj0pnqUElzyfZRPZlbcVe7uP0yAe9x/YH1WtDpdnmZ15JJL0Y+o/N5/5VH2xUL3UrVv581egpjX1wPNWBkAdqBp8Hd4pJKsIdbPM+Qj7KBckCZM/5z9EElRR3VcAY17hCob2qTM9OqSSzVV5K3G4jvwj/AOR9Uklme1SduMhwP9KoqjUklpDrMgvDCMFJJJaiV//Z",
      // },
    },
    {
      name: "Kris Gopalakrishnan",
      role: "Founder at Deepkore",
      //   image:
      //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      // },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section id="about" className="relative py-10  overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">
                About Deepkore
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Pioneering the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400">
              {" "}
              Future of AI
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We&apos;re on a mission to democratize artificial intelligence,
            making cutting-edge technology accessible to creators, businesses,
            and innovators worldwide.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2"
                  animate={{
                    scale: index === currentStat ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {index === currentStat ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={currentStat}
                    >
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </motion.span>
                  ) : (
                    `${stat.value.toLocaleString()}${stat.suffix}`
                  )}
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Tabs Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-300/50">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  {
                    id: "mission",
                    label: "Our Mission",
                    icon: <Target className="w-5 h-5" />,
                  },
                  {
                    id: "story",
                    label: "Our Story",
                    icon: <BookOpen className="w-5 h-5" />,
                  },
                  {
                    id: "team",
                    label: "Our Team",
                    icon: <Users className="w-5 h-5" />,
                  },
                  {
                    id: "values",
                    label: "Our Values",
                    icon: <Diamond className="w-5 h-5" />,
                  },
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-black hover:bg-gray-200/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-lg">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[400px]"
            >
              {activeTab === "mission" && (
                <div className="text-center">
                  <motion.div
                    className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-300/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-6xl md:text-8xl mb-8"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      🎯
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Democratizing Artificial Intelligence
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                      We believe that artificial intelligence should be
                      accessible to everyone, not just large corporations. Our
                      mission is to create intuitive, powerful AI tools that
                      empower creators, entrepreneurs, and innovators to bring
                      their ideas to life faster and more efficiently than ever
                      before.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      {[
                        {
                          icon: <Rocket className="w-8 h-8" />,
                          title: "Innovation",
                          desc: "Pushing AI boundaries",
                        },
                        {
                          icon: <Globe className="w-8 h-8" />,
                          title: "Accessibility",
                          desc: "AI for everyone",
                        },
                        {
                          icon: <Zap className="w-8 h-8" />,
                          title: "Efficiency",
                          desc: "Faster workflows",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-100/50 rounded-xl p-6 border border-gray-300/50"
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h4 className="text-lg font-bold text-black mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === "story" && (
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Our Journey Through Time
                  </h3>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

                    <div className="space-y-12">
                      {milestones.map((milestone, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                          }`}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -50 : 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div
                            className={`w-1/2 ${
                              index % 2 === 0
                                ? "pr-8 text-right"
                                : "pl-8 text-left"
                            }`}
                          >
                            <motion.div
                              className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-300/50"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="text-2xl mb-2">
                                {milestone.icon}
                              </div>
                              <h4 className="text-xl font-bold text-black mb-2">
                                {milestone.title}
                              </h4>
                              <p className="text-gray-700 mb-2">
                                {milestone.description}
                              </p>
                              <div className="text-blue-400 font-semibold">
                                {milestone.year}
                              </div>
                            </motion.div>
                          </div>
                          <div className="relative">
                            <motion.div
                              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-4 border-white"
                              whileHover={{ scale: 1.5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                          </div>
                          <div className="w-1/2"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Meet Our Visionaries
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-300/50 text-center group"
                        whileHover={{ scale: 1.05, y: -10 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          opacity: { duration: 0.6, delay: index * 0.2 },
                          y: { duration: 0.6, delay: index * 0.2 },
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="relative mb-6 mx-auto"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto shadow-lg"
                          /> */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                        <h4 className="text-xl font-bold text-black mb-2">
                          {member.name}
                        </h4>
                        <p className="text-blue-400 font-medium mb-2">
                          {member.role}
                        </p>
                        {/* <p className="text-gray-600 text-sm">
                          {member.expertise}
                        </p> */}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Our Core Values
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-300/50 group"
                        whileHover={{ scale: 1.05, y: -10 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          opacity: { duration: 0.6, delay: index * 0.2 },
                          y: { duration: 0.6, delay: index * 0.2 },
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start space-x-6">
                          <motion.div
                            className="text-5xl"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.5,
                              ease: "easeInOut",
                            }}
                          >
                            {value.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold text-black mb-3">
                              {value.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {value.description}
                            </p>
                            <motion.div
                              className={`mt-4 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Mission
          </motion.button>

          <motion.p
            className="text-gray-600 mt-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Be part of the AI revolution that&apos;s shaping the future
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
