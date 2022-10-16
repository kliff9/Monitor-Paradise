import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "2kliff",
      lastname: "kliff",
      gender: "Male",
      birthday: "August 23",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Eren",
      lastname: "yarn",
      gender: "Male",
      birthday: "October 23",
      email: "admin@example.com",
      email: "Eren@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'SAMSUNG LC27F398FWNXZA 27"',
      category: "27 inches",
      image: "/img/SSLC.png",
      price: 219,
      brand: "Samsung",
      rating: 4.9,
      numReviews: 355,
      description: `It also features a slim frame design and a glossy black finish. All these aspects combined make it extremely modern and sleek,
            as well as perfect for combining with minimalist desk aesthetics.`,
      countInStock: 12,
    },
    {
      name: `Dell UltraSharp U2720Q 27"`,
      category: "27 inches",
      image: "/img/DellU2.png",
      price: 589,
      brand: "Dell",
      rating: 4.5,
      numReviews: 110,
      description: `Experience true color reproduction and wide color gamut coverage with the U2720Q UltraSharp 27" 16:9 HDR 4K IPS Monitor from Dell,
      which features a native resolution of 3840 x 2160 with a 60 Hz refresh rate, as well as coverage for 99% of the sRGB and Rec. 709 color gamuts and 95% of the DCI-P3 color gamut.`,
      countInStock: 11,
    },
    {
      name: `AOC C27G2Z 27"`,
      category: "27 inches",
      image: "/img/AOCC2.png",
      price: 249,
      brand: "AOC",
      rating: 4.3,
      numReviews: 122,
      description: `The curved AOC C27G2Z has a 27” VA panel and a curvature radius of 1500R. Its frame rate of 240Hz and
                    300 nits luminance, 0.5ms response time and low input lag ensure a stutter-free display and radiant picture quality`,
      countInStock: 27,
    },
    {
      name: `HP 24mh FHD 24" `,
      category: "24 inches",
      image: "/img/HP24.png",
      price: 175,
      brand: "HP ",
      rating: 4.1,
      numReviews: 216,
      description: `A 23.8-inch diagonal screen experience with this stylish, height-adjustable HP display.
                         Advanced IPS technology provides up to 178° ultra-wide viewing angles with consistent detail and vibrant color`,
      countInStock: 5,
    },
    {
      name: `Sceptre IPS 27"`,
      category: "27 inches",
      image: "/img/SPIP.png",
      price: 155,
      brand: "Sceptre",
      rating: 3.9,
      numReviews: 270,
      description: `IPS Panel: The IPS (In-Plane Switching) panel cannot be beat when it comes to consistently
      delivering top color performance & sharp visibility from multiple viewing angles.
      up to 75Hz Refresh Rate: With 75Hz refresh rate, images change faster and smoother than the standard, reducing screen tearing`,
      countInStock: 31,
    },
    {
      name: `LG 27GL83A-B 27" `,
      category: "Mouse",
      image: "/img/LG27.png",
      price: 358,
      brand: "LG",
      rating: 3.7,
      numReviews: 190,
      description: `It delivers a great gaming experience with extremely low input lag, an outstanding response time, and a few great gaming
                            features. It supports AMD's FreeSync variable refresh rate technology (VRR), but it's also certified by NVIDIA to support VRR from recent
                            NVIDIA graphics cards. It has wide viewing angles, good reflection handling, and very good peak brightness, so glare shouldn't be an issue.
                             As a more budget-oriented model, it has a pretty basic stand, with limited ergonomics and no RGB lighting. Although it supports HDR, this
                             doesn't really add much, as it can't get bright enough to deliver a true HDR experience and has a low contrast ratio.`,
      countInStock: 30,
    },
    {
      name: `BenQ SW271C 27" `,
      category: "27 inches",
      image: "/img/BESW.png",
      price: 1600,
      brand: "BenQ",
      rating: 4.2,
      numReviews: 134,
      description: `With 99% coverage of the Adobe RGB color space, the SW271C 27" 16:9 4K HDR IPS Monitor from BenQ
                            is designed for those demanding enhanced color accuracy for tasks such as video editing, photo editing, graphic design,
                             and more. In addition to 99% coverage of the Adobe RGB color space, this monitor also covers 100% of the sRGB and Rec.709`,
      countInStock: 22,
    },
    {
      name: `Dell Alienware AW3423DW 34" `,
      category: "34 inches",
      image: "/img/Dell_Alienware_AW3423DW.png",
      price: 1299,
      brand: "Alienware ",
      rating: 4.3,
      numReviews: 77,
      description: `It's an excellent monitor with a new panel technology known as QD-OLED. This unique monitor delivers
      incredibly deep blacks, with no distracting blooming around bright objects,
      making it an excellent choice for dark room viewers`,
      countInStock: 20,
    },
    {
      name: `GIGABYTE M28U  28" `,
      category: "28 inches",
      image: "/img/GIGABYTE_M28U.png",
      price: 529,
      brand: "GIGABYTE ",
      rating: 4.2,
      numReviews: 451,
      description: `It's a great 28-inch monitor with a 4k native resolution, delivering incredibly sharp
      images and crystal clear text. It offers an impressive combination of features for both gamers and office users`,
      countInStock: 20,
    },
    {
      name: `Dell S2722DGM  27" `,
      category: "27 inches",
      image: "/img/Dell_S2722DGM.png",
      price: 279,
      brand: "Dell",
      rating: 4.0,
      numReviews: 200,
      description: ` It's a good monitor for most uses. It has great peak brightness and decent reflection
      handling, so glare isn't an issue in bright rooms.It also has good contrast, with deep blacks,
        so it's a good choice for a dark room`,
      countInStock: 20,
    },
    {
      name: 'LG 38WN95C-W 38"',
      category: "38 inches",
      image: "/img/LG38.png",
      price: 1599,
      brand: "LG",
      rating: 4.5,
      numReviews: 377,
      description: `The curved, ultra-wide display makes easy work of your tasks.
        Stay immersed in every moment with its curved design and enjoy its 21:9 screen ratio for a panoramic desktop experience that surrounds you.`,
      countInStock: 21,
    },
    {
      name: `ViewSonic OMNI XG2431 24" `,
      category: "24 inches",
      image: "/img/ViewSonic_OMNI_XG2431.png",
      price: 299,
      brand: "Dell",
      rating: 4.0,
      numReviews: 14,
      description: ` The high refresh rate helps provide an extremely fast response time. It also has an optional backlight strobing
      feature to reduce persistence blur, and unlike many monitors,
       you can control the pulse width and phase to your liking`,
      countInStock: 20,
    },
  ],
};

export default data;
