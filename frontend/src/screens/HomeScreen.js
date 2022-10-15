import p2 from "./homeimage/p2.webp";
import Monitor from "./homeimage/Monitor.webp";
import p4 from "./homeimage/p4.jpg";
import p6 from "./homeimage/p6.webp";
import p7 from "./homeimage/p7.jpg";
import p8 from "./homeimage/p8.jpg";
import p10 from "./homeimage/p10.jpg";
import p11 from "./homeimage/p11.jpg";
import p12 from "./homeimage/p12.jpg";
import p13 from "./homeimage/p13.jpg";
import p15 from "./homeimage/p15.jpg";
import p16 from "./homeimage/p16.jpg";
import p17 from "./homeimage/p17.jpg";
import p18 from "./homeimage/p18.jpg";
import p19 from "./homeimage/p19.jpg";

import Customer1 from "./homeimage/customer-1.jpg";
import Customer2 from "./homeimage/customer-2.jpg";
import Customer3 from "./homeimage/customer-3.jpg";
import Customer4 from "./homeimage/customer-4.jpg";
import Customer5 from "./homeimage/customer-5.jpg";
import Customer6 from "./homeimage/customer-6.jpg";

import Amanda from "./homeimage/Amanda.jpg";
import Katie from "./homeimage/Katie.jpg";
import Caleb from "./homeimage/Caleb.jpg";
import Trevon from "./homeimage/Trevon.jpg";

import LG from "./homeimage/LG.jpg";
import SAMSUNG from "./homeimage/SAMSUNG.jpg";
import SIPS from "./homeimage/Cooler_Master.png";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function HomeScreen() {
  return (
    <div className="thehead">
      <div>
        <section class="section-Landing">
          <div class="Landing">
            <div class="Landing-text-box">
              <h1 class="heading-primary">
                Monitors have enhanced features and specifications to give you a
                fantastic experience
              </h1>
              <p class="Landing-description">
                No matter where you choose to work — whether the kitchen table
                or a dedicated workspace — a computer monitor is a tech
                essential. It’s easy to set up, efficient for faster workflow,
                and portable enough to move around anywhere
              </p>

              <Link to="/shop" className="btn btn--full margin-right-sm ">
                Shop Now
              </Link>

              {/* <a href="#how" class="btn btn--outline">Learn more &darr;</a> */}
              <div class="delivered-Monitors">
                <div class="delivered-imgs">
                  <img src={Customer1} alt="Customer photo" />
                  <img src={Customer2} alt="Customer photo" />
                  <img src={Customer3} alt="Customer photo" />
                  <img src={Customer4} alt="Customer photo" />
                  <img src={Customer5} alt="Customer photo" />
                  <img src={Customer6} alt="Customer photo" />
                </div>
                <p class="delivered-text">
                  <span>5,000+</span> Monitors delivered last year!
                </p>
              </div>
            </div>
            <div class="Landing-img-box">
              <img src={Monitor} class="Landing-img" alt="picture" />
            </div>
          </div>
        </section>

        <section class="section-Monitors" id="Monitors">
          <div class="container center-text">
            <span class="subheading">Trending Buy</span>
            <h2 class="heading-secondary">Most Popular Choices </h2>
          </div>

          <div class="container grid grid--3-cols margin-bottom-md">
            <div class="Monitor">
              <img src={SAMSUNG} class="Monitor-img" alt="Japanese Gyozas" />
              <div class="Monitor-content">
                <div class="Monitor-tags">
                  <span class="tag tag--vegetarian">Budget Option</span>
                </div>
                <p class="Monitor-title">SAMSUNG LC27F3</p>
                <ul class="Monitor-attributes">
                  <li class="Monitor-attribute">
                    <ion-icon
                      class="Monitor-icon"
                      name="refresh-outline"
                    ></ion-icon>
                    <span>
                      <strong>Refresh Rate: </strong>60 Hz
                    </span>
                  </li>
                  <li class="Monitor-attribute">
                    <ion-icon class="Monitor-icon" name="tv-outline"></ion-icon>
                    <span>
                      <strong>Screen Size: </strong> 34.0 Inches{" "}
                    </span>
                  </li>
                  <li class="Monitor-attribute">
                    <ion-icon
                      class="Monitor-icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>4.9</strong> rating (355)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="Monitor">
              <img src={LG} class="Monitor-img" alt="Japanese Gyozas" />
              <div class="Monitor-content">
                <div class="Monitor-tags">
                  <span class="tag tag--vegetarian">Top Quality Option</span>
                </div>
                <p class="Monitor-title">LG 38WN95C-W</p>
                <ul class="Monitor-attributes">
                  <li class="Monitor-attribute">
                    <ion-icon
                      class="Monitor-icon"
                      name="refresh-outline"
                    ></ion-icon>
                    <span>
                      <strong>Refresh Rate: </strong> 144 Hz
                    </span>
                  </li>
                  <li class="Monitor-attribute">
                    <ion-icon class="Monitor-icon" name="tv-outline"></ion-icon>
                    <span>
                      <strong>Screen Size: </strong> 38.0 Inches{" "}
                    </span>
                  </li>
                  <li class="Monitor-attribute">
                    <ion-icon
                      class="Monitor-icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>4.5</strong> rating (377)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="Monitor">
              <img src={SIPS} class="Monitor-img" alt="Japanese Gyozas" />
              <div class="Monitor-content">
                <div class="Monitor-tags">
                  <span class="tag tag--vegetarian">Under 200 Option</span>
                </div>
                <p class="Monitor-title">Sceptre IPS</p>
                <ul class="Monitor-attributes">
                  <li class="Monitor-attribute">
                    <ion-icon
                      class="Monitor-icon"
                      name="refresh-outline"
                    ></ion-icon>
                    <span>
                      <strong>Refresh Rate: </strong> 75 Hz
                    </span>
                  </li>
                  <li class="Monitor-attribute">
                    <ion-icon class="Monitor-icon" name="tv-outline"></ion-icon>
                    <span>
                      <strong>Screen Size: </strong>27.0 Inches{" "}
                    </span>
                  </li>
                  <li class="Monitor-attribute">
                    <ion-icon
                      class="Monitor-icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>3.9</strong> rating (270)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="section-testimonials" id="testimonials">
          <div class="testimonials-container">
            <span class="subheading">Testimonials</span>
            <h2 class="heading-secondary">
              Once you try it, you can't go back
            </h2>

            <div class="testimonials">
              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Amanda Bryson"
                  src={Amanda}
                />
                <blockquote class="testimonial-text">
                  Good insight and easy to use - I particularly like the live
                  notifications when a new device is added to my network.
                </blockquote>
                <p class="testimonial-name">&mdash; Amanda Bryson</p>
              </figure>

              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Caleb Hadley"
                  src={Caleb}
                />
                <blockquote class="testimonial-text">
                  Packaging perfect, delivered on time. This is easy to set up
                  and use, great controls over brightness and contrast. I would
                  buy again.
                </blockquote>
                <p class="testimonial-name">&mdash; Caleb Hadley</p>
              </figure>

              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Trevon Miller"
                  src={Trevon}
                />
                <blockquote class="testimonial-text">
                  Use it for work, very nice quality and LOVE the ability to
                  move it up/down and tilt which has been super helpful with my
                  classes and meetings online.
                </blockquote>
                <p class="testimonial-name">&mdash; Trevon Miller</p>
              </figure>

              <figure class="testimonial">
                <img
                  class="testimonial-img"
                  alt="Photo of customer Katie Smith"
                  src={Katie}
                />
                <blockquote class="testimonial-text">
                  Love this monitor, just needed something for school with
                  everything being online and this fits all my needs. Easy to
                  set up and the screen is bright.
                </blockquote>
                <p class="testimonial-name">&mdash; Katie Smith</p>
              </figure>
            </div>
          </div>

          <div class="gallery">
            <figure class="gallery-item">
              <img src={p2} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p13} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p17} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p4} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p16} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p6} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p7} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p8} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p15} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p18} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p19} alt="Photo of Monitor" />
            </figure>
            <figure class="gallery-item">
              <img src={p12} alt="Photo of Monitor" />
            </figure>
          </div>
        </section>

        <section class="section-pricing" id="pricing">
          <div class="container">
            <span class="subheading">Highlights</span>
            <h2 class="heading-secondary">Great Qualities to enjoy from</h2>
          </div>

          <div class="container grid grid--4-cols">
            <div class="feature">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faImages}
              ></FontAwesomeIcon>
              <p class="feature-title">Impressive Picture Quality</p>
              <p class="feature-text">
                Features an IPS panel for premium picture quality, with vibrant
                color reproduction and crystal-clear images and text without
                color shift.
              </p>
            </div>
            <div class="feature">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faLightbulb}
              ></FontAwesomeIcon>
              <p class="feature-title">Ultra-Low Blue Light Technology</p>
              <p class="feature-text">
                Eye Saver Mode lowers blue light levels, to help reduce eye
                strain during long work hours.
              </p>
            </div>
            <div class="feature">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faAdjust}
              ></FontAwesomeIcon>
              <p class="feature-title">Ergonomic and Adjustable</p>
              <p class="feature-text">
                The monitor swivels, tilts, pivots and is height-adjustable, for
                comfort over a long workday.
              </p>
            </div>
            <div class="feature">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faPlug}
              ></FontAwesomeIcon>
              <p class="feature-title">Connectivity</p>
              <p class="feature-text">
                Versatile connectivity options with HDMI, DisplayPort, and
                USB-C.
              </p>
            </div>
          </div>
        </section>

        <section class="section-cta" id="cta">
          <div class="container">
            <div class="cta">
              <div class="cta-text-box">
                <h2 class="heading-secondary">Contact Us</h2>
                <p class="cta-text"></p>

                <form class="cta-form" name="sign-up" netlify>
                  <div>
                    <label for="full-name">Full Name</label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="John Smith"
                      name="full-name"
                      required
                    />
                  </div>

                  <div>
                    <label for="email">Email address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="me@example.com"
                      name="email"
                      required
                    />
                  </div>

                  <div class="form-control">
                    <label for="description">Message</label>
                    <textarea
                      id="description"
                      type="text"
                      placeholder="Type Message here"
                      name="description"
                      required
                    />
                  </div>

                  <button class="btn btn--form">Send Message</button>
                </form>
              </div>
              <div class="cta-img-box" role="img" aria-label=""></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
