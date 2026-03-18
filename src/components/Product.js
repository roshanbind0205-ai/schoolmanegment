import "./Product.css";

function Product() {
  return (
    <div className="product-container">
      <h1 className="product-title">College Products</h1>

      <p className="product-text">
        College Management System ke main modules jisse pura college smoothly manage hota hai.
      </p>

      <div className="product-card-wrapper">

        <div className="product-card">
          <h2>Student Management</h2>
          <p>Student admission, profile, ID card aur academic details manage karna.</p>
        </div>

        <div className="product-card">
          <h2>Fees & Accounting</h2>
          <p>Fee collection, receipts, dues aur financial reports manage karna.</p>
        </div>

        <div className="product-card">
          <h2>Attendance Tracking</h2>
          <p>Daily/Monthly attendance aur automatic attendance reports.</p>
        </div>

        <div className="product-card">
          <h2>Examination System</h2>
          <p>Exam creation, marks entry, grade system aur result generation.</p>
        </div>

        <div className="product-card">
          <h2>Faculty Management</h2>
          <p>Teachers ki details, workload aur subject allocation manage karna.</p>
        </div>

        <div className="product-card">
          <h2>Course & Department</h2>
          <p>UG/PG courses, departments aur subject structure manage karna.</p>
        </div>

        <div className="product-card">
          <h2>Time Table</h2>
          <p>Weekly class schedule, faculty timing aur room allocation.</p>
        </div>

        <div className="product-card">
          <h2>Hostel Management</h2>
          <p>Room allotment, hostel fees, attendance aur mess records.</p>
        </div>

        <div className="product-card">
          <h2>Library Management</h2>
          <p>Books issue/return, membership aur fine calculation.</p>
        </div>

      </div>
    </div>
  );
}

export default Product;