import React from 'react';
import styles from './Pricing.module.css';

const PricingPage = () => {
    return (
        <div className={`${styles.header}`} style={{
            background: "rgb(23,0,36)",
            backgroundImage: "linear-gradient(90deg, rgba(23,0,36,1) 0%, rgba(121,9,115,1) 37%, rgba(255,0,125,1) 100%)"
        }}>
            <div className={`${styles.innerHeader} ${styles.flex}`}>
                <section className={styles.section}>
                    <h1 className="text-6xl py-8 mb-8 lg:mb-16 text-center text-purple-heart-50 font-semibold">
                        GoTezu Price List
                    </h1>

                    <div className={`${styles.pricing}`}>
                        {/* Basic Plan */}
                        <div className={`${styles.pricingItem}`} style={{ minHeight: '497px' }}>
                            <div className={styles.pricingDeco}>
                                <svg
                                    className={styles.pricingDecoImg}
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                >
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer1}`}
                                        d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                        fill="#FFFFFF"
                                        opacity="0.6"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer2}`}
                                        d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                        fill="#FFFFFF"
                                        opacity="0.6"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer3}`}
                                        d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                        fill="#FFFFFF"
                                        opacity="0.7"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer4}`}
                                        d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                                <div className={styles.pricingPrice}>
                                    <span className={styles.pricingCurrency}>₹</span>99
                                    <span className={styles.pricingPeriod}>/ One Time</span>
                                </div>
                                <h3 className={styles.pricingTitle}>The Launchpad Package</h3>
                            </div>
                            <ul className={styles.pricingFeatureList}>
                                <li className={styles.pricingFeature}>Free Profile Listing on Gotezu’s elite trainer network.</li>
                                <li className={styles.pricingFeature}>Client-Based Work Allocation – Get matched with corporate training opportunities.</li>
                                <li className={styles.pricingFeature}>Access to Gotezu’s Resource Hub (templates, case studies, and industry trends).</li>
                                <li className={styles.pricingFeature}>Ideal For: Aspiring trainers ready to dip their toes into the corporate training world.</li>


                            </ul>
                            <button className={styles.pricingAction}>Choose plan</button>
                        </div>

                        {/* Premium Plan (Featured) */}
                        <div className={`${styles.pricingItem} ${styles.pricingItemFeatured} lg:-translate-y-8`} style={{ minHeight: '497px' }}>
                            <div
                                className={styles.pricingDeco}
                                style={{ background: 'linear-gradient(135deg,#a93bfe,#584efd)' }}
                            >
                                <svg
                                    className={styles.pricingDecoImg}
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                >
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer1}`}
                                        d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                        fill="#FFFFFF"
                                        opacity="0.6"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer2}`}
                                        d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                        fill="#FFFFFF"
                                        opacity="0.6"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer3}`}
                                        d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                        fill="#FFFFFF"
                                        opacity="0.7"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer4}`}
                                        d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                                <div className={styles.pricingPrice}>
                                    <span className={styles.pricingCurrency}>₹</span>19,999
                                    <span className={styles.pricingPeriod}>/ month</span>
                                </div>
                                <h3 className={styles.pricingTitle}>The Elite Pro Package</h3>
                            </div>
                            <ul className={styles.pricingFeatureList}>
                                <li className={styles.pricingFeature}>Premium Profile Listing with priority visibility for high-value clients.</li>
                                <li className={styles.pricingFeature}>Guaranteed ROI Assurance – Earn consistent revenue through curated assignments.</li>
                                <li className={styles.pricingFeature}>LinkedIn Makeover – Professional restructure for maximum industry impact.</li>
                                <li className={styles.pricingFeature}>Dedicated Mentorship from Gotezu’s L&D experts.</li>
                                <li className={styles.pricingFeature}>Ideal For: Experienced professionals aiming to scale their training career with assured growth.</li>
                            </ul>
                            <button className={styles.pricingAction}>Choose plan</button>
                        </div>

                        {/* Standard Plan */}
                        <div className={`${styles.pricingItem}`} style={{ minHeight: '497px' }}>
                            <div className={styles.pricingDeco}>
                                <svg
                                    className={styles.pricingDecoImg}
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                >
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer1}`}
                                        d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                        fill="#FFFFFF"
                                        opacity="0.6"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer2}`}
                                        d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                        fill="#FFFFFF"
                                        opacity="0.6"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer3}`}
                                        d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z"
                                        fill="#FFFFFF"
                                        opacity="0.7"
                                    />
                                    <path
                                        className={`${styles.decoLayer} ${styles.decoLayer4}`}
                                        d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                                <div className={styles.pricingPrice}>
                                    <span className={styles.pricingCurrency}>₹</span>1,49,999
                                    <span className={styles.pricingPeriod}>/ month</span>
                                </div>
                                <h3 className={styles.pricingTitle}>The Celestial Trainer Package</h3>
                            </div>
                            <ul className={styles.pricingFeatureList}>
                                <li className={styles.pricingFeature}>Celebrity Trainer Status – Elevate your brand as a thought leader.</li>
                                <li className={styles.pricingFeature}>Media Exposure – Invitation to interviews on Zee Business & Times Now.</li>
                                <li className={styles.pricingFeature}>Gotezu Verified Badge – Boost credibility with a trusted industry endorsement.</li>
                                <li className={styles.pricingFeature}>ROI Assurance + Advanced LinkedIn Optimization (ongoing updates).</li>
                                <li className={styles.pricingFeature}>Priority Access to Gotezu’s premium corporate contracts.</li>
                                <li className={styles.pricingFeature}>Ideal For: Business heads and HR leaders seeking to dominate the training landscape with prestige and visibility.</li>


                            </ul>
                            <button className={styles.pricingAction}>Choose plan</button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Wave Animation */}
            <div>
                <svg
                    className={styles.waves}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.parallax}>
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default PricingPage;