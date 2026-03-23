import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import GallerySection from "@/components/GallerySection";
import BookingForm from "@/components/BookingForm";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BookingForm />
      <GallerySection />
      <HistorySection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
