import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Pricing() {
  useEffect(() => {
    if (document.body.classList.contains('has-animations')) {
      const sr = ScrollReveal();
      sr.reveal('.pricing-table-inner', {
        duration: 600,
        distance: '20px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 100
      });
    }
  }, []);

  return (
    <section className="pricing section">
      <div className="container-sm">
        <div className="pricing-inner section-inner">
          <div className="pricing-header text-center">
            <h2 className="section-title mt-0">My Cloud Vision</h2>
            <p className="section-paragraph mb-0" We are commited to providing the best cloud services to our clients
            </p>
        </div>
        <div className="pricing-tables-wrap">
          <div className="pricing-table">
            <div className="pricing-table-inner is-revealing">
              <div className="pricing-table-main">
                <div className="pricing-table-header pb-24">
                  <div className="pricing-table-price"><span
                    className="pricing-table-price-currency h2">$</span><span
                      className="pricing-table-price-amount h1">49</span><span
                        className="text-xs">/month</span></div>
                </div>
                <div className="pricing-table-features-title text-xs pt-24 pb-24">What you will get
                </div>
                <ul className="pricing-table-features list-reset text-xs">
                  <li>
                    <span>Lorem ipsum dolor sit nisi</span>
                  </li>
                  <li>
                    <span>Lorem ipsum dolor sit nisi</span>
                  </li>
                  <li>
                    <span>Lorem ipsum dolor sit nisi</span>
                  </li>
                  <li>
                    <span>Lorem ipsum dolor sit nisi</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-table-cta mb-8">
                <a className="button button-primary button-shadow button-block" href="#">Pre order
                  now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}
