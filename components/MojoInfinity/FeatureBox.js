export default function FeatureBox({
  number,
  title,
  description,
  minInvestment,
  isLogin,
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
          {isLogin ? (
            <a type="button" href="/sample" className="btn btn-sm btn-primary">
              Get Started
            </a>
          ) : (
            <a
              type="button"
              href="https://sandbox.mojoinfinity.com/mojo/login?redirect=/hni/landing"
              className="btn btn-sm btn-primary"
            >
              Get Started
            </a>
          )}
          <div>
            <p>Minimum Investment</p>
            <span>{minInvestment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
