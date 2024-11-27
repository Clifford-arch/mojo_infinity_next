export default function FeatureBox({
  number,
  title,
  description,
  minInvestment,
}) {
  return (
    <div className="col-12 col-md-4 col-lg-4">
      <div className="feature-box-1 h-100">
        <div className="feature-content">
          <div className="icon">{number}</div>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="feature-footer">
          <a type="button" className="btn btn-sm btn-primary">
            Get Started
          </a>
          <div>
            <p>Minimum Investment</p>
            <span>{minInvestment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
