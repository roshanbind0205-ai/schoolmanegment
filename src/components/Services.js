import React, { useState } from "react";
import "./Services.css";
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaMoneyBill,
  FaLaptopCode,
  FaBell
} from "react-icons/fa";

const services = [
  {
    icon: <FaSchool />,
    title: "College ERP System",
    desc: "Manage students, teachers, attendance, exams, fees, accounts, transport & reports in a single dashboard."

  },
  {
    icon: <FaUserGraduate />,
    title: "Student Information System",
    desc: "Store admission, personal details, academics, attendance, performance & records in one platform."
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Teacher Management",
    desc: "Automate teacher profiles, workload, class schedules, subject allocations and performance tracking."
  },
  {
    icon: <FaClipboardList />,
    title: "Attendance Management",
    desc: "Auto attendance using biometric, RFID and mobile app with real-time reports for parents & admin."
  },
  {
    icon: <FaBook />,
    title: "Exam & Result Management",
    desc: "Generate report cards, handle grading, marks entry, analysis charts & online exams."
  },
  {
    icon: <FaMoneyBill />,
    title: "Fee Management System",
    desc: "Automate fee receipts, dues tracking, online payments, refunds & finance reports."
  },
  {
    icon: <FaLaptopCode />,
    title: "School Website Development",
    desc: "Professional responsive websites for schools, institutes & colleges with admin panel."
  },
  {
    icon: <FaBell />,
    title: "Notification & Communication",
    desc: "Send instant alerts, SMS, push notifications & announcements to teachers & parents."
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Education Services</h2>
      <p className="services-subtitle">
        Smart digital solutions for schools, colleges & educational institutions.
      </p>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div
              className={`service-header ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.title}</div>
              <div className={`arrow ${activeIndex === index ? "open" : ""}`}>⌄</div>
            </div>

            <div
              className={`service-content ${activeIndex === index ? "show" : ""}`}
            >
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}