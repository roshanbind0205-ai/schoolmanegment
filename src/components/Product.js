import "./Product.css";

function Product() {
  return (
    <div className="product-container">
      <h1 className="product-title">College Products</h1>

      <p className="product-text">
Main modules of a College Management System that are essential for managing the entire college smoothly.      </p>

      <div className="product-card-wrapper">

        <div className="product-card">
          <h2>Student Management</h2>
          <p>Managing student admissions, profiles, ID cards, and academic details.</p>
          <img src="/pic/product1.jpeg"></img>
        </div>

        <div className="product-card">
          <h2>Fees & Accounting</h2>
          <p>Managing fee collection, receipts, pending dues, and financial reports.</p>
           <img src="/pic/product2.png"></img>
        </div>

        <div className="product-card">
          <h2>Attendance Tracking</h2>
          <p>Daily/Monthly attendance and automatic attendance reports.</p>
          <img src="/pic/product3.png"></img>
        </div>

        <div className="product-card">
          <h2>Examination System</h2>
          <p>Exam creation, marks entry, grading system, and result generation.</p>
          <img src="/pic/product4.png"></img>

        </div>

        <div className="product-card">
          <h2>Faculty Management</h2>
          <p>Managing teachers’ details, workload, and subject allocation.</p>
          <img src="/pic/product5.png"></img>
        </div>

        <div className="product-card">
          <h2>Course & Department</h2>
          <p>Managing UG/PG courses, departments, and subject structure.</p>
          <img src="/pic/product6.png"></img>
        </div>

        <div className="product-card">
          <h2>Time Table</h2>
          <p>Weekly class schedule, faculty timing aur room allocation.</p>
          <img src="/pic/product9.png"></img>
        </div>

        <div className="product-card">
          <h2>Hostel Management</h2>
          <p>Room allotment, hostel fees, attendance aur mess records.</p>
              <img src="/pic/product7.png"></img>
        </div>

        <div className="product-card">
          <h2>Library Management</h2>
          <p>Books issue/return, membership aur fine calculation.</p>
          <img src="/pic/product8.png"></img>
        </div>

      </div>
    </div>
  );
}

export default Product;