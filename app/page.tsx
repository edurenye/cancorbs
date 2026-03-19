import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BookingForm />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
