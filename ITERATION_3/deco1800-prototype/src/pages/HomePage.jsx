import "./HomeStyles.css"

function HomePage() {

    const items = [
        { title: 'Courses', imgPlaceholder: 'Student studying' },
        { title: 'Degrees', imgPlaceholder: 'UQ landmark architecture' },
        { title: 'Interviews', imgPlaceholder: 'Two people chatting' },
        { title: 'Reviews', imgPlaceholder: 'A person thinking' }
    ];


    return (
        <section className="py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">UQ Course Information Pad</h1><h6>Deploy ver.</h6>
          <p className="lead text-muted">All the information you'll need about your UQ study plan - Right here with us.</p>
          <h2 className="h4 text-start mt-4 border-bottom pb-2">Overview</h2>
        </div>

        {/* 4-Column Grid */}
        <div className="row g-4">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              {/* Card with custom clip-path class applied */}
              <div className="card h-100 text-center shadow-sm border-0 angled-card">
                <div className="bg-secondary text-white py-5 card-img-top d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                  <small className="p-3">*{item.imgPlaceholder}</small>
                </div>
                <div className="card-body d-flex flex-column justify-content-end p-4">
                  <a href={`/${item.title.toLowerCase()}`} className="h5 card-title text-decoration-none text-dark stretched-link fw-bold">
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default HomePage