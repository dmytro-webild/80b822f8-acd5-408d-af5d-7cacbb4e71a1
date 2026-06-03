"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about-us",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Chai Vaai Cafe"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="Your Cozy Chai Corner in the Hills"
      description="Experience authentic kulhad chai and delicious handcrafted snacks, a perfect blend of tradition and taste, right here in Dehradun."
      testimonials={[
        {
          name: "Priya Sharma",
          handle: "@priya_eats",
          testimonial: "Absolutely love the vibe here! The ginger chai is my favorite and the snacks are super delicious. A must-visit spot in Dehradun.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-brunette-woman-denim-shirt_273609-11862.jpg",
          imageAlt: "Priya Sharma avatar",
        },
        {
          name: "Amit Singh",
          handle: "@amit_travels",
          testimonial: "Came here on a recommendation and was not disappointed. The ambiance is so relaxing, and the masala chai hit just the right spot. Perfect for a quiet afternoon.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-stylish-black-hat_273609-11595.jpg",
          imageAlt: "Amit Singh avatar",
        },
        {
          name: "Neha Gupta",
          handle: "@neha_reads",
          testimonial: "Chai Vaai Cafe is my new go-to for studying. Great coffee, free Wi-Fi, and a peaceful environment. Plus, their sandwiches are incredible!",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/selfie-portrait-videocall_23-2149186160.jpg",
          imageAlt: "Neha Gupta avatar",
        },
        {
          name: "Rajesh Kumar",
          handle: "@rajesh_foodie",
          testimonial: "Fantastic experience! The staff is friendly, service is quick, and the chai is genuinely authentic. Tried their Maggi, and it was pure comfort.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-pensive-curly-haired-woman-student-returns-from-lecures-wears-headband-casual-neat-clothes-strolls-outdoors-poses-against-blurred-urban-background-people-lifestyle-concept_273609-62304.jpg",
          imageAlt: "Rajesh Kumar avatar",
        },
        {
          name: "Sonia Devi",
          handle: "@sonia_explores",
          testimonial: "Such a charming cafe! The decor is lovely, and the elaichi chai is perfectly balanced. I could spend hours here just relaxing and enjoying the view.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-wearing-colorful-fashion_23-2151038278.jpg",
          imageAlt: "Sonia Devi avatar",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cream-liquer_23-2148014925.jpg?_wi=1"
      imageAlt="Cozy cafe interior with people enjoying chai"
      showBlur={true}
      textPosition="bottom"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiley-man-with-headphones-front-view_23-2149915903.jpg",
          alt: "Happy customer avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-indian-man-shirt-sunglasses-posed-against-pink-wall_627829-1767.jpg",
          alt: "Satisfied customer avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-arab-beard-man-wear-grey-turtleneck-black-jaket-arabian-model-guy-background-autumn-leaves_627829-4350.jpg",
          alt: "Smiling patron avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sideways-woman-white-pants-floral-shirt_23-2148286096.jpg",
          alt: "Reviewer avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman-posing-against-corrugated-wall_23-2148204703.jpg",
          alt: "Cafe visitor avatar",
        },
      ]}
      avatarText="Loved by Chai Lovers"
    />
  </div>

  <div id="about-us" data-section="about-us">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "The Perfect Hangout Spot",
          description: "A welcoming space for friends, couples, and students to relax, connect, and enjoy the vibrant atmosphere.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-having-coffee-together_23-2148263232.jpg?_wi=1",
          imageAlt: "Friends laughing in a cafe",
        },
        {
          title: "Freshly Brewed Chai",
          description: "Savor the rich flavors of our authentic Kulhad Chai, prepared with love and the finest ingredients.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cup-tea-with-fresh-black-tea-gray-background-flower-color-flavor-photo-breakfast-ceremony-coffee_140725-160840.jpg?_wi=1",
          imageAlt: "Kulhad chai being poured",
        },
        {
          title: "Delicious Snacks & Bites",
          description: "Pair your chai with our delectable range of handcrafted snacks, from classic Maggi to gourmet sandwiches.",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-sandwiches-arrangement-white-background_23-2148617389.jpg?_wi=1",
          imageAlt: "Assortment of cafe snacks",
        },
      ]}
      title="More Than Just a Cafe"
      description="Chai Vaai Cafe is Dehradun's favorite gathering spot. Whether you're catching up with friends, enjoying a romantic date, or finding a peaceful corner to study and work, our warm ambiance and delightful offerings make every visit special. Relax, rejuvenate, and make memories with us."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "chai-adrak",
          name: "Adrak Kulhad Chai",
          price: "₹60",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-decoration-with-coffee-cup-candle_23-2148325559.jpg?_wi=1",
          imageAlt: "Adrak Kulhad Chai",
        },
        {
          id: "chai-elaichi",
          name: "Elaichi Kulhad Chai",
          price: "₹60",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-cup-tea-with-lemon-slice-cinnamon-with-nuts-walnut-flowers-blue-background_141793-27562.jpg",
          imageAlt: "Elaichi Kulhad Chai",
        },
        {
          id: "chai-masala",
          name: "Masala Kulhad Chai",
          price: "₹70",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-two-cups-coffee-cookies-cinnamon-limes-old-newspaper-dark-surface_140725-142669.jpg",
          imageAlt: "Masala Kulhad Chai",
        },
        {
          id: "maggi-pasta",
          name: "Classic Maggi & Pasta",
          price: "₹120",
          imageSrc: "http://img.b2bpic.net/free-photo/fusilli-pasta-chicken-slices-wooden-board_114579-76559.jpg",
          imageAlt: "Maggi and Pasta dishes",
        },
        {
          id: "burger-sandwich",
          name: "Gourmet Burgers & Sandwiches",
          price: "₹150",
          imageSrc: "http://img.b2bpic.net/free-photo/burger-bread-bun-with-meat-french-fries_114579-3535.jpg",
          imageAlt: "Burger and Sandwich",
        },
        {
          id: "shakes",
          name: "Refreshing Shakes",
          price: "₹140",
          imageSrc: "http://img.b2bpic.net/free-photo/resting-cafe-with-digital-tablet_1098-17375.jpg",
          imageAlt: "Variety of shakes",
        },
      ]}
      title="Our Delicious Menu"
      description="Explore a curated selection of beverages and bites, crafted with love and the finest ingredients, perfect for any mood."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "vibe-interior-1",
          value: "Interior",
          title: "Warm Aesthetics",
          description: "Inviting indoor spaces with thoughtful decor and comfortable seating.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-woman-using-digital-tablet-restaurant-table_23-2147936094.jpg",
          imageAlt: "Cozy cafe interior",
        },
        {
          id: "vibe-interior-2",
          value: "Ambiance",
          title: "Relaxing Corners",
          description: "Find your perfect spot, whether for quiet reflection or lively conversations.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-wood-chair_1339-6716.jpg",
          imageAlt: "Relaxing cafe corner",
        },
        {
          id: "vibe-outdoor",
          value: "Outdoors",
          title: "Al Fresco Delight",
          description: "Enjoy the fresh Dehradun air in our charming outdoor seating area.",
          imageSrc: "http://img.b2bpic.net/free-photo/rustic-patio-with-deck-furniture-vegetation_23-2150698370.jpg",
          imageAlt: "Outdoor cafe seating",
        },
        {
          id: "vibe-food",
          value: "Presentation",
          title: "Artful Plates",
          description: "Our food isn't just delicious, it's a feast for the eyes, beautifully presented.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-delicious-food_23-2148948992.jpg",
          imageAlt: "Aesthetically presented food",
        },
      ]}
      title="Our Cozy Cafe Vibe"
      description="Step into our world of comfort and charm. Every corner of Chai Vaai Cafe is designed for your relaxation and enjoyment, capturing the true essence of Dehradun."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What are your most popular chai options?",
          content: "Our Adrak, Elaichi, and Masala Kulhad Chais are customer favorites, offering authentic flavors for every preference. Don't miss our seasonal specials!",
        },
        {
          id: "faq-2",
          title: "Do you offer vegetarian and vegan options?",
          content: "Yes, our menu includes a wide range of vegetarian snacks, Maggi, and pasta dishes. We also have several vegan-friendly options, just ask our staff for recommendations!",
        },
        {
          id: "faq-3",
          title: "Is Chai Vaai Cafe suitable for students to study?",
          content: "Absolutely! We provide a comfortable and quiet ambiance during off-peak hours, perfect for studying or working with free Wi-Fi and plenty of delicious fuel.",
        },
        {
          id: "faq-4",
          title: "Do you take reservations for groups?",
          content: "For groups larger than 6, we recommend calling ahead to ensure we can accommodate you comfortably. Smaller groups are welcome on a walk-in basis.",
        },
      ]}
      sideTitle="Got Questions?"
      sideDescription="Find quick answers to common queries about Chai Vaai Cafe."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Anjali Sharma",
          date: "April 2024",
          title: "Best Kulhad Chai in Dehradun!",
          quote: "Chai Vaai Cafe is simply the best! Their kulhad chai is authentic and so refreshing. The ambiance is cozy, perfect for a relaxed evening with friends. Highly recommend their Masala Chai!",
          tag: "Authentic Chai",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-blonde-guy-wearing-yellow-t-shirt-glasses_141793-89293.jpg",
          avatarAlt: "Anjali Sharma",
          imageSrc: "http://img.b2bpic.net/free-photo/cream-liquer_23-2148014925.jpg?_wi=2",
          imageAlt: "smiling young woman portrait",
        },
        {
          id: "2",
          name: "Rahul Verma",
          date: "March 2024",
          title: "My Go-To Study Spot",
          quote: "As a student, I love coming to Chai Vaai Cafe. It's pocket-friendly, has great Wi-Fi, and the Maggi is a lifesaver during late-night study sessions. The staff are always friendly and welcoming.",
          tag: "Student Friendly",
          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-holding-camera_23-2149915894.jpg",
          avatarAlt: "Rahul Verma",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-having-coffee-together_23-2148263232.jpg?_wi=2",
          imageAlt: "smiling young woman portrait",
        },
        {
          id: "3",
          name: "Priya Singh",
          date: "February 2024",
          title: "Lovely Ambiance & Delicious Snacks",
          quote: "The cafe has such a warm and inviting vibe. It’s perfect for a date night or just unwinding. Their sandwiches are delicious, and the shakes are a must-try. Keep up the great work!",
          tag: "Cozy Vibe",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-brunette-with-wooden-background_23-2147640700.jpg",
          avatarAlt: "Priya Singh",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cup-tea-with-fresh-black-tea-gray-background-flower-color-flavor-photo-breakfast-ceremony-coffee_140725-160840.jpg?_wi=2",
          imageAlt: "smiling young woman portrait",
        },
        {
          id: "4",
          name: "Deepak Kumar",
          date: "January 2024",
          title: "Great Value for Money",
          quote: "I'm always impressed by the quality and taste at Chai Vaai Cafe, especially for the prices. You get premium experience without breaking the bank. My family loves coming here!",
          tag: "Great Prices",
          avatarSrc: "http://img.b2bpic.net/free-photo/people-pleasant-emotions-feelings-active-lifestyle-concept-content-dark-skinned-mixed-race-teenage-boy-holds-skateboard_273609-8752.jpg",
          avatarAlt: "Deepak Kumar",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-sandwiches-arrangement-white-background_23-2148617389.jpg?_wi=2",
          imageAlt: "smiling young woman portrait",
        },
        {
          id: "5",
          name: "Meena Devi",
          date: "December 2023",
          title: "A Taste of Home in Every Sip",
          quote: "The chai here reminds me of home-cooked tea. It's so comforting and flavorful. It's become my regular spot for an afternoon pick-me-up. The staff is wonderful too!",
          tag: "Comfort Food",
          avatarSrc: "http://img.b2bpic.net/free-photo/woman-drinking-looking-camera_23-2147770083.jpg",
          avatarAlt: "Meena Devi",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-decoration-with-coffee-cup-candle_23-2148325559.jpg?_wi=2",
          imageAlt: "smiling young woman portrait",
        },
      ]}
      title="What Our Guests Say"
      description="Hear it from those who love their Chai Vaai moments. We're proud of the cozy experiences and delightful tastes we create for every visitor."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Find Your Way to Chai Vaai"
      description="Located in the heart of Dehradun, Chai Vaai Cafe is easily accessible and always ready to welcome you. Drop by for a refreshing break!\n\n**Address:**\nDehradun, Uttarakhand\n\n**Hours:**\nMonday - Sunday: 10:00 AM - 10:00 PM\n\n**Phone:**\n+91 98765 43210"
      imageSrc="http://img.b2bpic.net/free-photo/location-symbol-with-landscape-background_23-2149906268.jpg"
      imageAlt="Exterior view of Chai Vaai Cafe in Dehradun"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Your Email for Updates"
      buttonText="Stay Connected"
      termsText="By clicking Stay Connected you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/coffee-business-concept-handsome-bearded-man-apron-making-coffee-while-standing-cafe_1258-104246.jpg"
      imageAlt="Aesthetic cafe counter"
      logoText="Chai Vaai Cafe"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About Us",
              href: "#about-us",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Cookie Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/chaivaaicafe",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/chaivaaicafe",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Chai Vaai Cafe. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
